"use client";
import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPrisma,
  SiSequelize,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";

const LangauageLearned = () => {
  const skills = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiReact, name: "React.js", color: "text-blue-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-600" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    { icon: SiFirebase, name: "Firebase", color: "text-orange-400" },
    { icon: SiPrisma, name: "Prisma", color: "text-indigo-600" },
    { icon: SiSequelize, name: "Sequelize", color: "text-blue-500" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-700" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-sky-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-7xl mx-auto px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-2xl font-bold mb-8 text-center"
      >
        Tools & Tech I Play With 🛠️
      </motion.h2>

      <TooltipProvider>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Tooltip key={index}>
                <TooltipTrigger className="transition-transform hover:scale-110 hover:-translate-y-1 duration-200">
                  <Icon className={`w-10 h-10 ${skill.color}`} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </motion.div>
      </TooltipProvider>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-muted-foreground mt-6 text-sm"
      >
        Always learning, always building something cool ✨
      </motion.p>
    </motion.div>
  );
};

export default LangauageLearned;
