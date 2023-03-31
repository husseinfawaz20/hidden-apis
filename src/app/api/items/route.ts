import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { B_URL } from "../../../../environment";

export async function GET() {
  const response = await fetch(`${B_URL}`);
  const data = await response.json();
  if (!data) return new Response("NOT FOUND");
  // return new Response(JSON.stringify(data));
  return Response.json(data);

  // if (!data) return res.status(404);
  // return res.status(200).json(JSON.stringify(data));
}
