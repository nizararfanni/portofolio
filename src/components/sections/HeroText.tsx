"use client";
import React from "react";
import { motion } from "motion/react";
import SportifyEmbed from "./SportifyEmbed";
import HeroSectionHome from "./HeroSectionHome";

const HeroText = () => {
  return (
    <motion.div 
      className="flex flex-col gap-5 md:gap-2 justify-center font-bold"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1 
        className="text-3xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Hi!
      </motion.h1>
      
      <motion.h2 
        className="text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        I'm{" "}
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Nizar
        </motion.span>{" "}
        - Software Developer
      </motion.h2>
      
      <motion.p 
        className="text-lg font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        I'm an informatics student, and I enjoy working with TypeScript, React,
        and Node.js. I also enjoy exploring new technologies and learning new
        things.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <SportifyEmbed />
      </motion.div>
      
      <motion.div 
        className="flex gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <HeroSectionHome />
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
