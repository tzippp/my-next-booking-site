import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ error: 'Missing Google API key or Place ID.' }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== 'OK') {
      return NextResponse.json({ error: data.error_message || 'Failed to fetch reviews.' }, { status: 500 });
    }
    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching reviews.' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  // Placeholder: Create a new review
  const data = await request.json();
  return NextResponse.json({ message: 'Review created', data });
} 