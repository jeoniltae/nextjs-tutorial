import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const body = await req.json();

  if (!body.email || !body.message) {
    return NextResponse.json(
      { error: "Invalid data" },
      { status: 400 }
    );
  }

  console.log("📩 Contact:", body);

  return NextResponse.json({ success: true });
};