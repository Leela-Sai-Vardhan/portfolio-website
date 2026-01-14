import { NextRequest, NextResponse } from 'next/server';

// This is a simple in-memory counter for demonstration
// In production with Vercel KV, you would use:
// import { kv } from '@vercel/kv';

let visitCount = 0;
const visitors = new Set<string>();

export async function GET() {
    try {
        // In production with Vercel KV:
        // const count = await kv.get('visitor_count') || 0;

        return NextResponse.json({ count: visitCount });
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        return NextResponse.json({ error: 'Failed to fetch count' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { visitorId } = await request.json();

        if (!visitorId) {
            return NextResponse.json({ error: 'Visitor ID required' }, { status: 400 });
        }

        // Check if this visitor has been counted before
        if (!visitors.has(visitorId)) {
            visitors.add(visitorId);
            visitCount++;

            // In production with Vercel KV:
            // await kv.incr('visitor_count');
            // await kv.sadd('visitors', visitorId);
        }

        return NextResponse.json({ count: visitCount });
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
    }
}
