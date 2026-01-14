import { kv } from '@vercel/kv';
import { NextRequest } from 'next/server';

export async function GET() {
    try {
        // Get current visitor count
        const count = await kv.get<number>('visitor_count') || 0;

        return Response.json({ count });
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        return Response.json({ count: 0 }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { visitorId } = await request.json();

        if (!visitorId) {
            return Response.json({ error: 'Visitor ID required' }, { status: 400 });
        }

        // Check if this visitor has been counted before
        const exists = await kv.sismember('unique_visitors', visitorId);

        if (!exists) {
            // New visitor - add to set and increment counter
            await kv.sadd('unique_visitors', visitorId);
            await kv.incr('visitor_count');
        }

        // Get updated count
        const count = await kv.get<number>('visitor_count') || 0;

        return Response.json({ count });
    } catch (error) {
        console.error('Error tracking visitor:', error);
        return Response.json({ error: 'Failed to track visitor' }, { status: 500 });
    }
}
