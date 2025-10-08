"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Indonesia",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering with focus on web development and system design.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-16 bg-muted/30"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
      >
        Education
      </motion.h2>

      <div className="max-w-2xl mx-auto">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-lg text-muted-foreground font-medium">{edu.institution}</p>
                <div className="flex justify-center items-center gap-4 mt-2 text-sm">
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent font-semibold">
                    {edu.period}
                  </span>
                  <span className="text-muted-foreground">GPA: {edu.gpa}</span>
                </div>
              </div>
              <p className="text-muted-foreground text-center leading-relaxed">{edu.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EducationSection;
