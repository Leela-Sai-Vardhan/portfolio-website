import { kv } from '@vercel/kv';
import { NextRequest } from 'next/server';

export async function GET() {
    try {
        // Get current love count
        const count = await kv.get<number>('love_count') || 0;

        return Response.json({ count });
    } catch (error) {
        console.error('Error fetching love count:', error);
        return Response.json({ count: 0 }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { userId } = await request.json();

        if (!userId) {
            return Response.json({ error: 'User ID required' }, { status: 400 });
        }

        // Check if this user has already loved the portfolio
        const alreadyLoved = await kv.sismember('loved_users', userId);

        if (alreadyLoved) {
            // User already loved - return current count
            const count = await kv.get<number>('love_count') || 0;
            return Response.json({ count, alreadyLoved: true });
        }

        // New love - add user to set and increment counter
        await kv.sadd('loved_users', userId);
        await kv.incr('love_count');

        // Get updated count
        const count = await kv.get<number>('love_count') || 0;

        return Response.json({ count, alreadyLoved: false });
    } catch (error) {
        console.error('Error processing love:', error);
        return Response.json({ error: 'Failed to process love' }, { status: 500 });
    }
}
