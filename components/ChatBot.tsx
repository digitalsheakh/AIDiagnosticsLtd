"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, User, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ConversationContext {
  askedName: boolean;
  askedEmail: boolean;
  askedPhone: boolean;
  userName?: string;
  userEmail?: string;
  userPhone?: string;
  userIntent?: string;
  conversationStage: "greeting" | "understanding" | "collecting_info" | "closing";
}

function TypingIndicator() {
  return (
    <div className="flex gap-1">
      <motion.div
        className="w-2 h-2 bg-[#29abe2] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="w-2 h-2 bg-[#29abe2] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2 h-2 bg-[#29abe2] rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm Ismail from AI Diagnostics 👋\n\nHow can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState<ConversationContext>({
    askedName: false,
    askedEmail: false,
    askedPhone: false,
    conversationStage: "greeting",
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateTyping = async (responses: string[]) => {
    setIsTyping(true);
    
    for (let i = 0; i < responses.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600 + Math.random() * 400));
      
      const assistantMessage: Message = {
        id: Date.now().toString() + i,
        role: "assistant",
        content: responses[i],
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    }
    
    setIsTyping(false);
  };

  const analyzeIntent = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    if (msg.match(/\b(mot|test)\b/)) return "mot";
    if (msg.match(/\b(service|servicing|oil change)\b/)) return "service";
    if (msg.match(/\b(diagnostic|check engine|warning light|fault)\b/)) return "diagnostic";
    if (msg.match(/\b(price|cost|how much|pricing)\b/)) return "pricing";
    if (msg.match(/\b(book|appointment|schedule)\b/)) return "booking";
    if (msg.match(/\b(clutch|brake|repair)\b/)) return "repair";
    if (msg.match(/\b(location|address|where|find)\b/)) return "location";
    if (msg.match(/\b(hours|open|opening times)\b/)) return "hours";
    if (msg.match(/\b(contact|call|phone|email)\b/)) return "contact";
    
    return "general";
  };

  const extractContactInfo = (userMessage: string) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const phoneRegex = /\b(\+?44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}\b/;
    
    const emailMatch = userMessage.match(emailRegex);
    const phoneMatch = userMessage.match(phoneRegex);
    
    return {
      email: emailMatch ? emailMatch[0] : null,
      phone: phoneMatch ? phoneMatch[0] : null,
    };
  };

  const generateResponse = async (userMessage: string) => {
    const intent = analyzeIntent(userMessage);
    const { email, phone } = extractContactInfo(userMessage);
    const msg = userMessage.toLowerCase();
    
    let responses: string[] = [];
    let newContext = { ...context };

    if (email && !context.askedEmail) {
      newContext.userEmail = email;
      newContext.askedEmail = true;
    }
    
    if (phone && !context.askedPhone) {
      newContext.userPhone = phone;
      newContext.askedPhone = true;
    }

    if (!context.userIntent) {
      newContext.userIntent = intent;
      newContext.conversationStage = "understanding";
    }

    switch (intent) {
      case "mot":
        responses.push("Our MOT test is £40.");
        responses.push("We can also bundle it with a service to save you money. MOT + Full Service is £227.53.");
        if (!context.askedName) {
          responses.push("Would you like to book? What's your name?");
          newContext.askedName = true;
          newContext.conversationStage = "collecting_info";
        }
        break;

      case "service":
        responses.push("We offer three service levels:");
        responses.push("• Interim Service: £154.57\n• Full Service: £187.53\n• Major Service: £271.28");
        if (!context.askedName) {
          responses.push("Which one interests you? And what's your name?");
          newContext.askedName = true;
          newContext.conversationStage = "collecting_info";
        }
        break;

      case "diagnostic":
        responses.push("Our diagnostic check is £60.");
        responses.push("We use professional equipment to identify any faults across all vehicle systems.");
        if (!context.askedName) {
          responses.push("Want to book? What's your name?");
          newContext.askedName = true;
          newContext.conversationStage = "collecting_info";
        }
        break;

      case "pricing":
        responses.push("You can see all our prices at aidiagnosticsltd.com/pricing");
        responses.push("Or I can help you with a specific service. What do you need?");
        break;

      case "booking":
        responses.push("Great! You can book online 24/7 at aidiagnosticsltd.com/booking");
        if (!context.askedName) {
          responses.push("Or I can help you now. What's your name?");
          newContext.askedName = true;
          newContext.conversationStage = "collecting_info";
        }
        break;

      case "location":
        responses.push("We're at 18 College St, Bedford, MK42 8LU.");
        responses.push("Easy to find in Bedford town centre with parking nearby.");
        break;

      case "hours":
        responses.push("We're open:\nMon-Fri: 9 AM - 6 PM\nSat: 9 AM - 4 PM\nSun: Closed");
        responses.push("You can book online anytime though!");
        break;

      case "contact":
        responses.push("You can reach us at:\n📞 07986 848798\n📧 ismail@aidiagnosticsltd.com");
        break;

      default:
        if (context.askedName && !context.userName && !msg.includes("@")) {
          newContext.userName = userMessage;
          responses.push(`Nice to meet you, ${userMessage}!`);
          
          if (!context.askedEmail) {
            responses.push("What's your email address?");
            newContext.askedEmail = true;
          }
        } else if (context.askedEmail && !context.userEmail) {
          if (email) {
            newContext.userEmail = email;
            if (!context.askedPhone) {
              responses.push("Got it! And your phone number?");
              newContext.askedPhone = true;
            }
          } else {
            responses.push("I didn't catch that email. Could you send it again?");
          }
        } else if (context.askedPhone && !context.userPhone) {
          if (phone) {
            newContext.userPhone = phone;
            newContext.conversationStage = "closing";
            responses.push("Perfect! I've got your details.");
            responses.push(`I'll pass this to our team and we'll call you at ${phone} to confirm your booking.`);
            responses.push("Anything else I can help with?");
          } else {
            responses.push("I didn't catch that number. Could you send it again?");
          }
        } else {
          responses.push("I can help with MOT, servicing, diagnostics, or general enquiries.");
          responses.push("What would you like to know?");
        }
    }

    if (context.userName && context.userEmail && context.userPhone && newContext.conversationStage === "closing") {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: context.userName,
          email: context.userEmail,
          phone: context.userPhone,
          message: `Chat enquiry about: ${context.userIntent || "general query"}`,
          source: "chatbot",
        }),
      });
    }

    setContext(newContext);
    await simulateTyping(responses);
  };

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    await generateResponse(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-[#1e1e1e] border border-[#404040] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ height: "600px", maxHeight: "calc(100vh - 8rem)" }}
          >
            <div className="bg-[#29abe2] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Bot size={22} className="text-[#29abe2]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">AI Diagnostics</h3>
                  <p className="text-white/80 text-xs">Ismail - Online now</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#2a2a2a]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    message.role === "user" ? "bg-[#29abe2]" : "bg-[#404040]"
                  }`}>
                    {message.role === "user" ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                    message.role === "user"
                      ? "bg-[#29abe2] text-white"
                      : "bg-[#333] text-white"
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-[#404040]">
                    <Bot size={16} className="text-white" />
                  </div>
                  <div className="bg-[#333] rounded-2xl px-4 py-3">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-[#1e1e1e] border-t border-[#404040]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#2a2a2a] border border-[#404040] text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-[#29abe2] transition-colors placeholder:text-[#606060]"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="bg-[#29abe2] hover:bg-[#1a7fb5] disabled:bg-[#404040] disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#29abe2] hover:bg-[#1a7fb5] text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 flex items-center gap-2"
      >
        <MessageCircle size={24} />
      </button>
    </>
  );
}
