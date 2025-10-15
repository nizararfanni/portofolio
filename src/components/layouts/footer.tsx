import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "../ui/tooltip";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaEnvelope,
      name: "nizararfan22@gmail.com",
      url: "nizararfan22@gmail.com",
      color: "text-red-500 hover:text-red-600",
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "text-gray-700 hover:text-gray-900",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaInstagram,
      name: "nzrr_arfan",
      url: "https://instagram.com/yourusername",
      color: "text-pink-500 hover:text-pink-600",
    },
  ];

  const techStack = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-green-600" },
    { icon: SiReact, name: "React", color: "text-blue-400" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
  ];

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nizar Kheneddy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Passionate software developer who loves crafting digital
              experiences. Always curious, always learning, always building
              something cool! 
            </p>
            <div className="flex items-center space-x-2">
              <FaCode className="text-primary w-4 h-4" />
              <a
                href="https://github.com/yourusername/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View Source Code
              </a>
            </div>
          </div>

          {/*  Reach Me Out */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Reach Me Out</h3>
            <p className="text-muted-foreground text-sm">
              Let's connect and build something amazing together!
            </p>

            <TooltipProvider>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${social.color} transition-all duration-200 hover:scale-110 hover:-translate-y-1`}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{social.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>

          {/* Built With */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Built With</h3>
            <p className="text-muted-foreground text-sm">
              This portfolio was crafted using modern technologies
            </p>

            <TooltipProvider>
              <div className="flex space-x-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <Tooltip key={index}>
                      <TooltipTrigger>
                        <Icon
                          className={`w-6 h-6 ${tech.color} hover:scale-110 transition-transform`}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-medium">{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-border" />

        {/*  Copyright & Fun Fact */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Nizar_Arfanni</span>
          </div>

          <div className="text-sm text-muted-foreground">
            <span className="italic">"illusion of knowledge" </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
