"use client";
import { about } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Engineer. Builder. Problem Solver."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — text */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                {about.summary}
              </p>
              <p className="text-base text-text-secondary/80 leading-relaxed">
                {about.detail}
              </p>
            </div>
          </ScrollReveal>

          {/* Right — stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((stat, i) => (
                <GlassCard
                  key={i}
                  className="text-center hover:scale-[1.02] transition-transform duration-300"
                >
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
