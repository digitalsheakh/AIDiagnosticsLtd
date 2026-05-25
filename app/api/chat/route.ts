import { NextRequest, NextResponse } from "next/server";
import { services } from "@/lib/services";

// Simple intent classification
function classifyIntent(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("£")) {
    return "pricing";
  }
  if (lower.includes("service") || lower.includes("mot") || lower.includes("repair") || lower.includes("diagnostic") || 
      lower.includes("clutch") || lower.includes("brake") || lower.includes("air con") || lower.includes("oil")) {
    return "services";
  }
  if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule")) {
    return "booking";
  }
  if (lower.includes("where") || lower.includes("location") || lower.includes("address") || 
      lower.includes("hours") || lower.includes("open") || lower.includes("when")) {
    return "location";
  }
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    return "greeting";
  }
  if (lower.includes("thank") || lower.includes("thanks")) {
    return "thanks";
  }
  return "general";
}

// Generate short, realistic responses
function generateResponse(message: string, intent: string): { responses: string[]; requestContact: boolean } {
  const lower = message.toLowerCase();

  switch (intent) {
    case "pricing":
      // Check for specific service mentions
      if (lower.includes("mot")) {
        return {
          responses: ["MOT is £40 👍", "Want to book one?"],
          requestContact: false,
        };
      }
      if (lower.includes("service") && lower.includes("full")) {
        return {
          responses: ["Full Service is £187.53", "Includes 40 checks ✓"],
          requestContact: false,
        };
      }
      if (lower.includes("diagnostic")) {
        return {
          responses: ["Diagnostics is £60", "We use dealer-level equipment 🔧"],
          requestContact: false,
        };
      }
      return {
        responses: ["Here are our main prices:", "MOT £40 | Service £154-£271 | Diagnostics £60", "What do you need?"],
        requestContact: false,
      };

    case "services":
      if (lower.includes("mot")) {
        return {
          responses: ["We do MOTs - £40", "DVSA authorised ✓", "Need to book?"],
          requestContact: false,
        };
      }
      if (lower.includes("brake")) {
        return {
          responses: ["Yes, we do brake repairs!", "Pads, discs, fluid - all of it 🔧", "What's the issue?"],
          requestContact: false,
        };
      }
      if (lower.includes("air con") || lower.includes("aircon")) {
        return {
          responses: ["Air con re-gas is £60", "Takes about 30 mins", "Book it?"],
          requestContact: false,
        };
      }
      return {
        responses: ["We do:", "MOT, Servicing, Diagnostics, Brakes, Clutch, Air Con", "What do you need? 🚗"],
        requestContact: false,
      };

    case "booking":
      return {
        responses: ["Let me help you book!", "Can I get your details?"],
        requestContact: true,
      };

    case "location":
      if (lower.includes("hour") || lower.includes("open") || lower.includes("when")) {
        return {
          responses: ["We're open:", "Mon-Fri: 9am-6pm", "Sat: 9am-4pm", "Sunday: Closed"],
          requestContact: false,
        };
      }
      return {
        responses: ["18 College St, Bedford MK42 8LU", "Mon-Fri 9-6, Sat 9-4", "Need directions?"],
        requestContact: false,
      };

    case "greeting":
      return {
        responses: ["Hey! 👋", "What can I help with?"],
        requestContact: false,
      };

    case "thanks":
      return {
        responses: ["You're welcome! 😊", "Anything else?"],
        requestContact: false,
      };

    default:
      return {
        responses: ["I can help with:", "• Prices & services", "• Booking", "• Location & hours", "What do you need? 💬"],
        requestContact: false,
      };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { messages, contactData } = await request.json();

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "No messages" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const userMessage = lastMessage.content;

    const intent = classifyIntent(userMessage);
    const response = generateResponse(userMessage, intent);

    if (contactData) {
      console.log("Contact data:", contactData);
      // TODO: Save to database or send notification
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
