import { NextResponse } from 'next/server'
import { google } from 'googleapis'

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Combine address fields into a single property address
    const propertyAddress = `${data.streetAddress}, ${data.city}, ${data.state} ${data.zipCode}`
    
    // Format the data for Google Sheets
    const row = [
      new Date().toISOString(),
      data.ownerCompany,
      data.email,
      data.phone,
      propertyAddress,           // Combined address
      data.streetAddress,        // Split address fields
      data.city,
      data.state,
      data.zipCode,
      data.propertyType,
      data.numberOfUnits,
      data.assignedParkingSpaces,
      data.guestParkingSpaces,
      data.notes,
      data.consent ? 'Yes' : 'No', // Convert boolean to Yes/No
      'New'
    ]

    // Update the range to include consent column
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:P',      // Updated from A:O to A:P
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row]
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 