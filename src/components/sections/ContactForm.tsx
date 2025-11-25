"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormData, contactFormSchema } from "@/lib/contactFormSchema";
import axios from "axios";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    //kirim ke api
    try {
      const response = await axios.post("/api/contact", data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Card className="p-8 bg-background/80 backdrop-blur-sm shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Send Message
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              {...register("name")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            {errors.name && (
              <span className="text-red-500 ">{errors.name.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            {errors.email && (
              <span className="text-red-500 ">{errors.email.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject *
            </label>
            <input
              {...register("subject")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            {errors.subject && (
              <span className="text-red-500 ">{errors.subject.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              {...register("message")}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-background focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            />
            {errors.message && (
              <span className="text-red-500 ">{errors.message.message}</span>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              type="submit"
              className="w-full bg-purple-500 rounded-md p-3 text-white 
             transition-all duration-300
             hover:bg-purple-600
             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-purple-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Mengirim..." : "Kirim"}
            </button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
