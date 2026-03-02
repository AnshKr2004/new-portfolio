"use client";
import { freelanceServices } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FreelanceCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Building{" "}
              <span className="gradient-text">AI-Powered Products</span>
              <br />
              for Startups & Businesses
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From concept to production — I help founders and businesses ship
              intelligent software that scales and generates revenue.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {freelanceServices.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 text-center hover:border-accent/30 hover:scale-[1.02] transition-all duration-300 h-full">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <a
              href="#contact"
              className="gradient-btn inline-block px-10 py-4 rounded-full text-white font-semibold text-lg"
            >
              Start a Project →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
