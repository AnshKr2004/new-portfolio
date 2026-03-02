"use client";
import { experiences } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="Building production software at scale."
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-linear-to-b from-accent via-accent-teal to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative pl-12 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

                  <div className="glass rounded-2xl p-6 md:p-8 hover:border-accent/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-text-secondary text-right">
                        <p>{exp.duration}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-5">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-teal shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
