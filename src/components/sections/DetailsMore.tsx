"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const DetailsMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button asChild className="text-md px-8 py-3 font-semibold ">
          <Link
            href={"/projects"}
            className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            See More Projects..
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default DetailsMore;
