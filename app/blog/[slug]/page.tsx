import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "how-often-should-you-service-your-car": {
    title: "How Often Should You Service Your Car?",
    category: "Servicing",
    date: "15 May 2025",
    readTime: "4 min read",
    content: `
Regular servicing is one of the most important things you can do to keep your car reliable, safe, and holding its value. But many drivers aren't sure which service they need or how often to book one.

**The Three Main Service Types**

At AI Diagnostics Ltd, we offer three levels of service:

- **Interim Service (£154.57)** — A 25-point oil service recommended every 6 months or 6,000 miles, whichever comes first. Ideal if you do a higher mileage or want extra peace of mind between full services.

- **Full Service (£187.53)** — Our most popular 40-point annual service, recommended every 12 months or 12,000 miles. This covers everything in the Interim plus additional checks and replacements.

- **Major Service (£271.28)** — A comprehensive 60-point service recommended every 24 months or 24,000 miles. This includes spark plug replacement, cabin filter replacement, and a thorough inspection of all major systems.

**How to Choose the Right One**

If you're unsure, consider two factors: how many miles you cover per year and how old your car is. A high-mileage driver doing 15,000+ miles annually should consider an Interim every 6 months alongside their annual Full Service. A lower-mileage driver may only need a Full Service once a year.

**Will Servicing Void My Warranty?**

No. EU block exemption regulations mean you can service your car at any reputable independent garage without affecting a manufacturer warranty, as long as the correct specification parts and fluids are used. We follow manufacturer service schedules and use quality OE-standard parts.

**Book Today**

If you're unsure which service is right for your vehicle, just get in touch — tell us your registration and mileage and we'll advise you honestly.
    `,
  },
  "mot-common-failure-points": {
    title: "The 10 Most Common MOT Failure Points (And How to Avoid Them)",
    category: "MOT",
    date: "2 May 2025",
    readTime: "6 min read",
    content: `
Each year, over 10 million vehicles fail their MOT test — and many of those failures are entirely preventable with simple checks beforehand. Here are the 10 most common reasons cars fail and what you can do about them.

**1. Lighting and Signalling**
Check all your lights work: headlights, brake lights, indicators, fog lights, and reversing lights. A blown bulb is a simple fix but a common failure point.

**2. Tyres**
Tyres need a minimum of 1.6mm tread depth across the central three-quarters of the tyre. Check for uneven wear, cuts, or bulges too.

**3. Windscreen Wipers and Washers**
Wiper blades that smear or leave streaks are a failure. Check they clear the windscreen effectively and that your washer reservoir is topped up.

**4. Brakes**
Pulling to one side, squealing, or a spongy pedal can all indicate brake issues. These are safety-critical and one of the most common failure reasons.

**5. Steering**
Excessive play in the steering wheel or unusual noises when turning can signal issues with the steering system or wheel bearings.

**6. Horn**
It must work. Give it a quick test before your MOT.

**7. Mirrors**
You need at least two working mirrors — typically the driver's side and interior. Check they're not cracked or loose.

**8. Seat Belts**
Belts must retract properly and the buckle must latch securely. Check all belts including rear seats.

**9. Emissions**
High exhaust emissions are a common failure. If your engine warning light is on, address it before your MOT.

**10. Number Plates**
Plates must be clean, legible, and correctly formatted. Illegal spacing or heavily dirty plates will fail.

**Book a Pre-MOT Check**
For just £20, we'll inspect all the common failure points before your official test, so there are no surprises. Any issues found can be quoted and fixed in advance.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  return {
    title: post ? `${post.title} – AI Diagnostics Ltd` : "Blog – AI Diagnostics Ltd",
    description: post ? `${post.title} — expert advice from AI Diagnostics Ltd, Bedford.` : "",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#2a2a2a]">
        <div className="text-center">
          <p className="text-[#a0a0a0] mb-4">Post not found.</p>
          <Link href="/blog" className="text-[#29abe2] hover:underline flex items-center gap-2 justify-center">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split("\n\n");

  return (
    <>
      <section className="bg-[#1e1e1e] pt-28 pb-16 border-b border-[#404040]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#a0a0a0] hover:text-[#29abe2] text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">{post.category}</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-[#a0a0a0] text-sm">
            <span>{post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="bg-[#2a2a2a] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <article className="prose prose-invert prose-blue max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} className="text-white font-bold text-lg mt-8 mb-3">{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("- ")) {
                const items = para.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-none space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#d0d0d0] text-sm leading-relaxed">
                        <span className="text-[#29abe2] mt-1">•</span>
                        <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[#a0a0a0] leading-relaxed my-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>") }} />
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-[#29abe2]/10 border border-[#29abe2]/30 rounded-2xl p-8 text-center">
            <h3 className="text-white font-bold text-xl mb-2">Ready to Book?</h3>
            <p className="text-[#a0a0a0] text-sm mb-6">
              Book your MOT, service or diagnostic check online — free, no deposit required.
            </p>
            <Link href="/contact" className="bg-[#29abe2] hover:bg-[#1a7fb5] text-white font-semibold px-7 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
              Book Now <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog" className="text-[#29abe2] hover:underline text-sm flex items-center gap-2 justify-center">
              <ArrowLeft size={14} /> More Articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
