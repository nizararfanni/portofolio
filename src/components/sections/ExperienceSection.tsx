"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Industrial Work Practice Intern",
      company: "PROCOM",
      period: "May 2022 - July 2022",
      description:
        "Completed a 2-month industrial internship focused on practical technology workflows. Gained hands-on experience in a professional computing environment, contributing to real-world projects and learning from industry mentors.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
