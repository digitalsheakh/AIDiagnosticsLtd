import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { registrationNumber } = await req.json();

  if (!registrationNumber) {
    return Response.json({ error: "Registration number is required." }, { status: 400 });
  }

  const cleaned = registrationNumber.replace(/\s/g, "").toUpperCase();

  const res = await fetch(
    "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    {
      method: "POST",
      headers: {
        "x-api-key": process.env.DVLA_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ registrationNumber: cleaned }),
    }
  );

  if (!res.ok) {
    if (res.status === 404) {
      return Response.json({ error: "Vehicle not found. Please check the registration." }, { status: 404 });
    }
    return Response.json({ error: "Unable to retrieve vehicle data." }, { status: res.status });
  }

  const data = await res.json();
  return Response.json(data);
}
