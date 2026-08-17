import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || company.length < 2 || message.length < 12) {
    return NextResponse.json({ ok: false, error: "Please complete every field." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid work email." }, { status: 400 });
  }
  if (!interest) {
    return NextResponse.json({ ok: false, error: "Select an interest." }, { status: 400 });
  }

  console.info("[design-in]", { name, email, company, interest, message: message.slice(0, 500) });
  return NextResponse.json({ ok: true });
}
