import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  const { name, email, phone, registration, service, message, vehicleInfo } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email and message are required." }, { status: 400 });
  }

  const vehicleSection = vehicleInfo
    ? `
<h3 style="color:#29abe2;">Vehicle Details</h3>
<table style="border-collapse:collapse;width:100%;">
  <tr><td style="padding:4px 8px;color:#666;">Registration</td><td style="padding:4px 8px;font-weight:bold;">${vehicleInfo.registrationNumber || registration}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">Make</td><td style="padding:4px 8px;">${vehicleInfo.make}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">Year</td><td style="padding:4px 8px;">${vehicleInfo.yearOfManufacture}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">Colour</td><td style="padding:4px 8px;">${vehicleInfo.colour}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">Fuel Type</td><td style="padding:4px 8px;">${vehicleInfo.fuelType}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">MOT Status</td><td style="padding:4px 8px;">${vehicleInfo.motStatus}</td></tr>
  <tr><td style="padding:4px 8px;color:#666;">MOT Expiry</td><td style="padding:4px 8px;">${vehicleInfo.motExpiryDate || "N/A"}</td></tr>
</table>`
    : registration
    ? `<p><strong>Registration:</strong> ${registration}</p>`
    : "";

  try {
    if (!resend) {
      console.log("Resend API key not configured - logging contact instead");
      console.log({ name, email, phone, service, message });
      return Response.json({ success: true });
    }

    await resend.emails.send({
      from: "AI Diagnostics Ltd <noreply@aidiagnosticsltd.com>",
      to: ["ismail@aidiagnosticsltd.com"],
      replyTo: email,
      subject: `New Booking Enquiry — ${service || "General"} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#29abe2;padding:24px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;">New Booking Enquiry</h1>
            <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;">AI Diagnostics Ltd Website</p>
          </div>
          <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;">
            <h3 style="color:#29abe2;">Customer Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service Requested:</strong> ${service || "Not specified"}</p>
            ${vehicleSection}
            <h3 style="color:#29abe2;">Message</h3>
            <p style="background:white;padding:16px;border-radius:6px;border-left:4px solid #29abe2;">${message}</p>
            <hr style="margin:24px 0;border:none;border-top:1px solid #ddd;" />
            <p style="color:#999;font-size:12px;">Sent from aidiagnosticsltd.com contact form</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
