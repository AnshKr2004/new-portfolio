"use client";
import { skillCategories } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="The tools and technologies I use to bring products to life."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.name} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background/50 text-text-secondary border border-glass-border hover:border-accent/40 hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
