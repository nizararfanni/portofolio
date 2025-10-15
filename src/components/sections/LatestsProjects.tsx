"use client";
import React from "react";
import { Card } from "../ui/card";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const LatestsProjects = () => {
  const projects = [
    {
      id: 1,
      title: "NextManga",
      punchline:
        "Baca manga dan manhwa favorit dengan pengalaman UI yang bersih dan nyaman",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "nodejs"],
      image: "http://localhost:3000/images/porto1.png",
      lastUpdated: "-",

      createdDate: "30 june 2025",
      link: "#",
    },
    {
      id: 2,
      title: "Cashflow App",
      punchline:
        "Kelola pemasukan dan pengeluaran dengan visualisasi keuangan yang jelas",
      tech: ["React Native", "Node.js", "Express", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      lastUpdated: "-",
      createdDate: "23 june 2025",
      link: "#",
    },
    {
      id: 3,
      title: "E-Commerce",
      punchline:
        "Platform belanja online dengan checkout cepat dan integrasi pembayaran modern",
      tech: ["Next.js", "Prisma", "Stripe API", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1515169067865-5387ec356754?w=400&h=250&fit=crop",
      lastUpdated: "-",

      createdDate: "22 august 2025",
      link: "#",
    },
    {
      id: 4,
      title: "E-Quran",
      punchline:
        "Aplikasi Al-Qur’an digital dengan tafsir, audio, dan pencarian ayat cepat",
      tech: ["Next.js", "TypeScript", "Quran API", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1612178993481-9d3b6a2f8b6f?w=400&h=250&fit=crop",
      lastUpdated: "-",

      createdDate: "may 5 2025",
      link: "#",
    },
    {
      id: 5,
      title: "Anime Streaming",
      punchline:
        "Streaming anime dengan subtitle multi-bahasa dan playlist favorit",
      tech: ["Next.js", "Node.js", "GraphQL", "Video.js"],
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76d2?w=400&h=250&fit=crop",
      lastUpdated: "-",

      createdDate: "17 april 2025",
      link: "#",
    },
  ];
  return (
    <motion.div
      className="w-full  mx-auto  px-4  py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-bold  bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Latest Projects
      </motion.h1>
      <motion.p
        className="font-semibold text-sm md:text-[15px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Check out my featured blog posts.
      </motion.p>

      {/* Cards grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.2,
              ease: "easeOut",
            }}
          >
            <Card className="overflow-hidden hover:scale-105 transform transition-all duration-300 ease-in-out h-full">
              {/* Image container with tech stack overlay */}
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Tech stack overlay on top of image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{
                        duration: 0.4,
                        delay: 1.2 + index * 0.2 + techIndex * 0.1,
                        ease: "easeOut",
                      }}
                      className="px-2 py-1 bg-black/70 text-white rounded-md text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Content container - takes up remaining space */}
              <div className="p-4 space-y-2">
                <h3 className="text-md font-semibold">{project.title}</h3>

                <div className="flex justify-between bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent truncate">
                  {" "}
                  <p className="text-sm text-muted-foreground truncate">
                    {project.lastUpdated}
                  </p>
                  <p className="text-sm text-muted-foreground">Last Update</p>
                </div>

                <p className="text-sm font-semibold">
                  Created {project.createdDate}
                </p>

                <p className="text-sm font-sans text-foreground pt-1">
                  {project.punchline}
                </p>
              </div>
              {/* slider */}

              <button className="group relative px-4 mb-2 text-sm font-medium ">
                <Link
                  href="/projects"
                  className="flex items-center justify-center relative"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    See Mores <ArrowRight size={17} />
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </button>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestsProjects;
