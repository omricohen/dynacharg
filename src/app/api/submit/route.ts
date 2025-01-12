import { google } from 'googleapis'
import { NextResponse } from 'next/server'

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
})

const sheets = google.sheets({ version: 'v4', auth })

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { ownerCompany, email, phone, properties, consent } = body

    // Create a row for each property
    const rows = properties.map(property => [
      new Date().toISOString(), // Timestamp
      ownerCompany,
      email,
      phone,
      property.streetAddress,
      property.city,
      property.state,
      property.zipCode,
      property.propertyType,
      property.numberOfUnits,
      property.assignedParkingSpaces,
      property.guestParkingSpaces,
      property.notes,
      consent ? 'Yes' : 'No'
    ])

    // Append rows to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A2:N', // Updated range to match number of columns
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: rows
      },
    })

    return NextResponse.json({
      message: 'Form submitted successfully',
      properties: properties.length
    })

  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 