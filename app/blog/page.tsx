import Link from "next/link";
import { ArrowRight, Clock, Settings, Wrench, Cpu, Lightbulb, Wind } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – AI Diagnostics Ltd Bedford",
  description: "Car care tips, MOT advice, and garage news from AI Diagnostics Ltd in Bedford.",
};

const W = "w-full px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-28";

const categoryIcons: Record<string, LucideIcon> = {
  Servicing: Settings,
  MOT: Wrench,
  Diagnostics: Cpu,
  Advice: Lightbulb,
  Repairs: Wrench,
  Maintenance: Wind,
};

const posts = [
  { slug: "how-often-should-you-service-your-car", title: "How Often Should You Service Your Car?", excerpt: "Unsure whether you need an interim, full or major service? We break down what each service covers and how to know which one your car needs based on age and mileage.", category: "Servicing", date: "15 May 2025", readTime: "4 min read" },
  { slug: "mot-common-failure-points", title: "The 10 Most Common MOT Failure Points (And How to Avoid Them)", excerpt: "Every year thousands of vehicles fail their MOT for preventable reasons. Here are the top 10 failure points and simple checks you can do before your MOT appointment.", category: "MOT", date: "2 May 2025", readTime: "6 min read" },
  { slug: "warning-lights-explained", title: "Dashboard Warning Lights Explained — What Each One Means", excerpt: "From the engine management light to the oil pressure warning, we explain what every common dashboard warning light means and whether you should stop driving immediately.", category: "Diagnostics", date: "20 April 2025", readTime: "5 min read" },
  { slug: "dealership-vs-independent-garage", title: "Dealership vs Independent Garage — Which Is Better For Your Car?", excerpt: "Many drivers assume a dealership is the only safe option for servicing. We explain why a specialist independent garage like AI Diagnostics offers the same quality — at significantly lower cost.", category: "Advice", date: "8 April 2025", readTime: "5 min read" },
  { slug: "timing-belt-when-to-replace", title: "Timing Belt: When Should You Replace It and What Happens If You Don't?", excerpt: "A snapped timing belt can destroy your engine in seconds. We explain what it does, when it needs replacing, and why this is one maintenance job you really can't afford to skip.", category: "Repairs", date: "25 March 2025", readTime: "4 min read" },
  { slug: "air-conditioning-maintenance", title: "Why Your Car's Air Conditioning Needs Regular Maintenance", excerpt: "Most drivers only notice their AC when it stops working. We explain how the system works, why refrigerant depletes over time, and how a re-gas can restore full performance.", category: "Maintenance", date: "10 March 2025", readTime: "3 min read" },
];

const categoryColours: Record<string, string> = {
  MOT: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Servicing: "bg-green-500/10 text-green-400 border-green-500/30",
  Diagnostics: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  Advice: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  Repairs: "bg-red-500/10 text-red-400 border-red-500/30",
  Maintenance: "bg-orange-500/10 text-orange-400 border-orange-500/30",
};

export default function BlogPage() {
  const featured = posts[0];
  const FeaturedIcon = categoryIcons[featured.category] ?? Wrench;

  return (
    <>
      <section className="bg-[#1e1e1e] pt-28 pb-16 border-b border-[#404040]">
        <div className={`${W} text-center`}>
          <FadeIn>
            <span className="text-[#29abe2] text-xs font-semibold uppercase tracking-widest">Car Care Advice</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">Our Blog</h1>
            <p className="text-[#a0a0a0] text-lg max-w-xl mx-auto">
              Expert advice, MOT tips and garage news from the team at AI Diagnostics Ltd.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#2a2a2a] py-20">
        <div className={W}>
          {/* Featured */}
          <FadeIn className="mb-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-[#333] border border-[#404040] hover:border-[#29abe2]/40 rounded-2xl overflow-hidden transition-colors"
            >
              <div className="bg-[#29abe2]/8 border-r border-[#404040] flex items-center justify-center p-12 min-h-52">
                <div className="w-24 h-24 bg-[#29abe2]/10 border border-[#29abe2]/20 rounded-2xl flex items-center justify-center">
                  <FeaturedIcon size={40} className="text-[#29abe2]" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColours[featured.category]}`}>
                    {featured.category}
                  </span>
                  <span className="text-[#a0a0a0] text-xs flex items-center gap-1">
                    <Clock size={11} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-white font-bold text-2xl mb-3 group-hover:text-[#29abe2] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#a0a0a0] text-xs">{featured.date}</span>
                  <span className="text-[#29abe2] text-sm font-medium flex items-center gap-1">
                    Read more <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>

          {/* Rest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.slice(1).map(({ slug, title, excerpt, category, date, readTime }, i) => {
              const CardIcon = categoryIcons[category] ?? Wrench;
              return (
                <FadeIn key={slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${slug}`}
                    className="group bg-[#333] border border-[#404040] hover:border-[#29abe2]/40 rounded-xl overflow-hidden transition-colors flex flex-col h-full"
                  >
                    <div className="bg-[#29abe2]/8 flex items-center justify-center py-10 border-b border-[#404040]">
                      <div className="w-16 h-16 bg-[#29abe2]/10 border border-[#29abe2]/20 rounded-xl flex items-center justify-center">
                        <CardIcon size={28} className="text-[#29abe2]" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${categoryColours[category]}`}>
                          {category}
                        </span>
                        <span className="text-[#a0a0a0] text-xs flex items-center gap-1">
                          <Clock size={11} /> {readTime}
                        </span>
                      </div>
                      <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#29abe2] transition-colors flex-1">
                        {title}
                      </h3>
                      <p className="text-[#a0a0a0] text-sm leading-relaxed mb-4 line-clamp-2">{excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#404040]">
                        <span className="text-[#a0a0a0] text-xs">{date}</span>
                        <span className="text-[#29abe2] text-xs font-medium flex items-center gap-1">
                          Read <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
