import { NextRequest, NextResponse } from 'next/server';

// This is a simple in-memory counter for demonstration
// In production with Vercel KV, you would use:
// import { kv } from '@vercel/kv';

let loveCount = 0;
const lovedBy = new Set<string>();

export async function GET() {
    try {
        // In production with Vercel KV:
        // const count = await kv.get('love_count') || 0;

        return NextResponse.json({ count: loveCount });
    } catch (error) {
        console.error('Error fetching love count:', error);
        return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { userId } = await request.json();

        if (!userId) {
            return NextResponse.json({ error: 'User ID required' }, { status: 400 });
        }

        // Check if this user has already loved
        if (!lovedBy.has(userId)) {
            lovedBy.add(userId);
            loveCount++;

            // In production with Vercel KV:
            // await kv.incr('love_count');
            // await kv.sadd('loved_by', userId);

            return NextResponse.json({ count: loveCount, alreadyLoved: false });
        }

        return NextResponse.json({ count: loveCount, alreadyLoved: true });
    } catch (error) {
        console.error('Error incrementing love count:', error);
        return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
    }
}
