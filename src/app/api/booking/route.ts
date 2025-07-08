import type { NextRequest } from 'next/server';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import Booking from '@/models/Booking';

const MONGODB_URI = process.env.MONGODB_URI || '';

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export async function GET() {
  try {
    await connectDB();
    const bookings = await Booking.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const data = await req.json();
    const booking = await Booking.create(data);
    return NextResponse.json({ success: true, booking });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
