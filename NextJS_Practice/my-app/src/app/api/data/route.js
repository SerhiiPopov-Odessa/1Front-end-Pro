/* export async function GET(request) {
    const data = {
        name:'Bob',
        age: 10,
        bio: 'Some info'
    }
    return new Response (JSON.stringify(data))
} */

import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        name:'Bob',
        age: 10,
        bio: 'Some info'
    })
}

export async function POST(request) {
    
    return new Response (request.body)
}