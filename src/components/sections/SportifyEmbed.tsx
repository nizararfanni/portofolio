"use client";
import React from "react";
import { motion } from "motion/react";

const SportifyEmbed = () => {
  return (
    <motion.div 
      className="w-max md:w-max py-2"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      <motion.iframe
        data-testid="embed-iframe"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/4cBm8rv2B5BJWU2pDaHVbF?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
        initial={{ opacity: 0, rotateY: -15 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="shadow-lg hover:shadow-xl transition-shadow duration-300"
      />
    </motion.div>
  );
};

export default SportifyEmbed;
