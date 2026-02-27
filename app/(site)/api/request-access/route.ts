import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const response = await fetch(`${process.env.STRAPI_URL}/api/sylvan-request-accesses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
            },
            body: JSON.stringify({
                data: {
                    fullName: body.fullName,
                    email: body.email,
                    companyName: body.companyName || null,
                    phone: body.phone,
                    message: body.message || null,
                    tenant: 2,
                    submittedAt: new Date().toISOString()
                }
            })
        })

        if (!response.ok) {
            const error = await response.json()
            return NextResponse.json({ error: 'Failed to submit request', details: error }, { status: response.status })
        }

        const data = await response.json()
        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Request access error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
