import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    phone,
    registration,
    service,
    preferredDate,
    preferredTime,
    notes,
    faultDescription,
  } = await req.json();

  if (!name || !email || !phone) {
    return Response.json(
      { error: "Name, email and phone number are required." },
      { status: 400 }
    );
  }

  const bookingDetailsRows = [
    preferredDate
      ? `<tr><td style="padding:6px 8px;color:#666;width:40%;">Preferred Date</td><td style="padding:6px 8px;font-weight:bold;">${preferredDate}</td></tr>`
      : "",
    preferredTime
      ? `<tr><td style="padding:6px 8px;color:#666;">Preferred Time</td><td style="padding:6px 8px;font-weight:bold;">${preferredTime}</td></tr>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  const notesSection =
    notes
      ? `<h3 style="color:#29abe2;margin-top:24px;">Additional Notes</h3>
         <p style="background:white;padding:16px;border-radius:6px;border-left:4px solid #29abe2;margin:0;">${notes}</p>`
      : "";

  const faultSection =
    faultDescription
      ? `<h3 style="color:#29abe2;margin-top:24px;">Fault / Issue Description</h3>
         <p style="background:#fff8e1;padding:16px;border-radius:6px;border-left:4px solid #f59e0b;margin:0;">${faultDescription}</p>`
      : "";

  try {
    await resend.emails.send({
      from: "AI Diagnostics Ltd <noreply@aidiagnosticsltd.com>",
      to: ["eppa.shop.uk@gmail.com"],
      replyTo: email,
      subject: `New Booking — ${service || "General"} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
          <div style="background:#29abe2;padding:24px 28px;border-radius:8px 8px 0 0;">
            <h1 style="color:white;margin:0;font-size:20px;">New Booking Request</h1>
            <p style="color:rgba(255,255,255,0.85);margin:5px 0 0;font-size:14px;">AI Diagnostics Ltd — aidiagnosticsltd.com</p>
          </div>
          <div style="background:#f9f9f9;padding:28px;border-radius:0 0 8px 8px;">

            <h3 style="color:#29abe2;margin-top:0;">Customer Details</h3>
            <table style="border-collapse:collapse;width:100%;background:white;border-radius:6px;overflow:hidden;">
              <tr><td style="padding:6px 8px;color:#666;width:40%;">Name</td><td style="padding:6px 8px;font-weight:bold;">${name}</td></tr>
              <tr style="background:#fafafa;"><td style="padding:6px 8px;color:#666;">Email</td><td style="padding:6px 8px;"><a href="mailto:${email}" style="color:#29abe2;">${email}</a></td></tr>
              <tr><td style="padding:6px 8px;color:#666;">Phone</td><td style="padding:6px 8px;font-weight:bold;">${phone}</td></tr>
            </table>

            <h3 style="color:#29abe2;margin-top:24px;">Vehicle</h3>
            <table style="border-collapse:collapse;width:100%;background:white;border-radius:6px;overflow:hidden;">
              <tr><td style="padding:6px 8px;color:#666;width:40%;">Registration</td><td style="padding:6px 8px;font-weight:bold;">${registration || "Not provided"}</td></tr>
            </table>

            <h3 style="color:#29abe2;margin-top:24px;">Booking Details</h3>
            <table style="border-collapse:collapse;width:100%;background:white;border-radius:6px;overflow:hidden;">
              <tr><td style="padding:6px 8px;color:#666;width:40%;">Service</td><td style="padding:6px 8px;font-weight:bold;">${service || "Not specified"}</td></tr>
              ${bookingDetailsRows}
            </table>

            ${faultSection}
            ${notesSection}

            <hr style="margin:28px 0;border:none;border-top:1px solid #e0e0e0;" />
            <p style="color:#aaa;font-size:12px;margin:0;">Sent from the booking form at aidiagnosticsltd.com</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return Response.json(
      { error: "Failed to send booking. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
