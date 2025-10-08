"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "nizar.arfanni@example.com",
      link: "mailto:nizar.arfanni@example.com",
      color: "text-red-500"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+62 812-3456-7890",
      link: "tel:+628123456790",
      color: "text-green-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Jakarta, Indonesia",
      link: "https://maps.google.com",
      color: "text-blue-500"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/nizar-arfanni",
      color: "text-gray-700 dark:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/nizar-arfanni",
      color: "text-blue-600"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/nizar_arfanni",
      color: "text-blue-400"
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      url: "https://instagram.com/nizar.arfanni",
      color: "text-pink-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Contact Information
        </motion.h2>

        <div className="space-y-4">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === "Location" ? "_blank" : "_self"}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
            >
              <motion.div
                className={`text-2xl ${info.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {info.icon}
              </motion.div>
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground">
                  {info.title}
                </h3>
                <p className="font-medium group-hover:text-purple-600 transition-colors">
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          Follow Me
        </motion.h2>

        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
            >
              <motion.div
                className={`text-3xl ${social.color}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {social.icon}
              </motion.div>
              <span className="text-sm font-medium group-hover:text-purple-600 transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Availability Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="p-6 bg-gradient-to-r  from-green-500/20 via-emerald-500/20 to-teal-500/20">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">
              Currently Available
            </h3>
          </div>
          <p className="text-muted-foreground">
            I'm currently open to new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
          Let's Build Something Great Together
        </h3>
        <p className="text-muted-foreground mb-6">
          Whether you have a clear vision or just an idea, I'm here to help bring your digital dreams to life.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 hover:from-indigo-600 hover:via-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full"
          >
            <a href="mailto:nizar.arfanni@example.com">
              Start a Conversation 💬
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
