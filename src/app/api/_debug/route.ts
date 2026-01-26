import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    DATABASE_URL_EXISTS: !!process.env.DATABASE_URL,
    DATABASE_URL_LENGTH: process.env.DATABASE_URL?.length ?? 0,
  });
}