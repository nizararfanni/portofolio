"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineTask } from "react-icons/md";

const HeroSectionHome = () => {

  return (
    <motion.main
      className="mt-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <motion.section
        className="flex gap-2 py-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant={"outline"}
            asChild
            className="text-md  text-white transition-all duration-300 ease-in-out hover:scale-105 border-white border-2"
          >
            <Link href="/projects">See my projects</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="outline"
            asChild
            className="text-md  text-white transition-all duration-300 ease-in-out hover:scale-105 border-white border-2"
          >
            <Link href="/about">Learn About Me</Link>
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.a
          href="https://github.com/Nizar-Dev"
          target="_blank"
          className="flex items-center gap-2 hover:text-indigo-500 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.1, x: 5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <MdOutlineTask />
          </motion.div>
          <p>Resume</p>
        </motion.a>

        <motion.a
          href="https://github.com/Nizar-Dev"
          target="_blank"
          className="flex items-center gap-2 hover:text-purple-600 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.1, x: 5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin />
          </motion.div>
          <p>Linkedin</p>
        </motion.a>

        <motion.a
          href="https://github.com/Nizar-Dev"
          target="_blank"
          className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1, x: 5 }}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.div>
          <p>Github</p>
        </motion.a>
      </motion.section>
    </motion.main>
  );
};

export default HeroSectionHome;
