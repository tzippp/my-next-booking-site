import type { NextRequest } from 'next/server';
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || 'chatbot';

async function getMongoClient() {
  if (!MONGODB_URI) {
    throw new Error('Missing MONGODB_URI');
  }
  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  return client;
}

export async function GET() {
  // Placeholder: Return chat messages
  return NextResponse.json({ message: 'List of chat messages' });
}

export async function POST(request: NextRequest) {
  try {
    const { userId, message, history = [] } = await request.json();
    if (!message) {
      return NextResponse.json({ error: 'Message required' }, { status: 400 });
    }
    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing OpenAI API key' }, { status: 500 });
    }

    // Prepare messages for OpenAI (history + new message)
    const openaiMessages = [
      ...history,
      { role: 'user', content: message },
    ];

    // Call OpenAI API
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: openaiMessages,
        temperature: 0.7,
      }),
    });
    const openaiData = await openaiRes.json();
    const aiMessage = openaiData.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Store conversation in MongoDB
    const client = await getMongoClient();
    const db = client.db(DB_NAME);
    const collection = db.collection('conversations');
    await collection.insertOne({
      userId: userId || null,
      timestamp: new Date(),
      userMessage: message,
      aiMessage,
      history,
    });
    await client.close();

    return NextResponse.json({ aiMessage });
  } catch (error) {
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
