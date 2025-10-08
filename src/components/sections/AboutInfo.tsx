"use client";
import React from "react";
import { motion } from "motion/react";

const AboutInfo = () => {
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
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hi there! I'm Nizar Arfanni, a passionate software developer with a love for creating 
            innovative digital solutions. Currently pursuing my degree in Computer Science at 
            Universitas Indonesia, I've been immersing myself in the world of web development 
            for the past 3 years.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            My journey started with curiosity about how websites work, and it has evolved into 
            a deep passion for full-stack development. I enjoy working with modern technologies 
            like React, Next.js, and Node.js to build applications that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to 
            open-source projects, or sharing my knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-500/10 via-purple-600/10 to-pink-500/10 border border-gradient-to-r from-indigo-500/20 via-purple-600/20 to-pink-500/20">
            <h3 className="text-xl font-semibold mb-2">🎯 Mission</h3>
            <p className="text-muted-foreground">
              To create meaningful digital experiences that solve problems and improve lives 
              through clean, efficient, and scalable code.
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-indigo-500/10 border border-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-500/20">
            <h3 className="text-xl font-semibold mb-2">🚀 Vision</h3>
            <p className="text-muted-foreground">
              To become a leading developer in the tech industry while contributing to 
              innovative projects that make technology more accessible to everyone.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutInfo;
