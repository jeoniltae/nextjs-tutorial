import { NextResponse } from "next/server";

export async function GET() {
  const secret = process.env.API_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      { error: "Missing secret" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
};
