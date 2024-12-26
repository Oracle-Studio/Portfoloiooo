"use client";
import React, { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import enTranslations from "../locales/en/common.json";
import frTranslations from "../locales/fr/common.json";

export default function Portfolio() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false); // Track if the page is scrolled
  const [locale, setLocale] = useState<string>("en"); // Default to English

  const t = locale === "fr" ? frTranslations : enTranslations;

  useEffect(() => {
    // Detect user's language
    const userLanguage = navigator.language; // Use navigator.language for modern browsers
    const detectedLocale = userLanguage.startsWith("fr") ? "fr" : "en";

    // Set locale based on detection
    setLocale(detectedLocale);

    // Redirect to the detected language route if not already on it
    if (!window.location.pathname.startsWith(`/${detectedLocale}`)) {
      router.push(`/${detectedLocale}`);
    }
  }, [router]);
  const projects = t.projects;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Set to true if scrolled down > 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update activeItem when the path changes
  useEffect(() => {
    setActiveItem(pathname); // Update active item based on pathname
  }, [pathname]);

  const handleNavigation = (path: string) => {
    setActiveItem(path); // Update active item when a menu is clicked
    router.push(path); // Navigate to the clicked menu item path
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#e0e1dd] flex flex-col items-center gap-8 pt-[60px]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full flex justify-center py-7 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/80 backdrop-blur-md shadow-lg"
            : "bg-[#000000]"
        }`}
      >
        <div className="bg-[#27272A] text-white px-1 py-1 rounded-xl shadow-lg flex gap-2">
          {Object.entries(t.navbar).map(([key, label]) => (
            <span
              key={key}
              onClick={() => handleNavigation(`/${key.toLowerCase()}`)}
              className={`cursor-pointer py-2 px-4 transition-all duration-300 ease-in-out rounded-lg ${
                activeItem === `/${key.toLowerCase()}`
                  ? "bg-[#3a3a3d] font-[Inter] font-bold shadow-xl"
                  : "text-gray-400 font-[Inter] font-semibold text-sm hover:shadow-xl"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </nav>

      {/* Projects Section */}
      <section id="portfolio" className="max-w-6xl mt-32">
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 gap-4 sm:gap-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-5 bg-black rounded-2xl shadow-2xl"
            >
              <div className="col-span-6 bg-black rounded-2xl overflow-hidden">
                <video
                  src={project.video}
                  className="w-full h-[28rem] rounded-2xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={project.post}
                ></video>
              </div>

              <div className="col-span-6 flex flex-col gap-5">
                <div className="bg-[#18181B] animate-card-Top p-5 rounded-2xl h-auto sm:h-[20rem] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-6">
                      <span className="text-4xl text-gray-50 mr-3 p-3 bg-[#27272A] rounded-xl shadow-lg">
                        <i className={project.logo}></i>
                      </span>
                      <h3 className="text-3xl font-bold font-[Inter]">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed font-[Inter]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 mb-1 mt-4">
                    {project.techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-gray-700 text-gray-300 text-sm font-medium py-1 px-2 rounded-full"
                      >
                        <i className={`devicon-${tech.name}-plain text-lg`}></i>
                        <span>{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                  <div className="bg-[#18181B] h-[6rem] rounded-2xl flex justify-center items-center animate-card-right">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-center font-[Inter] ${
                        project.comingSoon
                          ? "text-gray-400 cursor-not-allowed"
                          : "hover:text-gray-400"
                      }`}
                    >
                      {project.comingSoon ? (
                        <p className="text-indigo-500 font-semibold text-center">
                          Coming Soon!
                        </p>
                      ) : (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center items-center bg-gray-500/20 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mr-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 3.75a4.5 4.5 0 014.5 4.5v7.5a4.5 4.5 0 01-4.5 4.5h-9a4.5 4.5 0 01-4.5-4.5v-7.5a4.5 4.5 0 014.5-4.5h9zM8.25 12h7.5"
                            />
                          </svg>
                          View Project
                        </a>
                      )}
                    </a>
                  </div>
                  <div className="bg-[#18181B] p-6 rounded-2xl flex justify-center items-center h-[6rem]">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        fill="#ffffff"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-14">
          {projects.map((project, index) => (
            <div key={index} className="bg-black rounded-2xl shadow-2xl p-4">
              <div className="flex items-center mb-6">
                <span className="text-4xl text-gray-50 mr-3 p-3 bg-[#27272A] rounded-xl shadow-lg">
                  <i className={project.logo}></i>
                </span>
                <h3 className="text-2xl font-bold">{project.name}</h3>
              </div>

              <video
                src={project.video}
                className="w-full rounded-2xl mb-4"
                autoPlay
                loop
                muted
                playsInline
                poster={project.post}
              ></video>

              <div className="bg-[#18181B] p-4 rounded-xl shadow-lg">
                <p className="text-lg text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 text-gray-300 text-sm font-medium py-1 px-2 rounded-full"
                    >
                      <i className={`devicon-${tech.name}-plain text-lg`}></i>
                      <span>{tech.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100px); /* Start above the element */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* End at the normal position */
          }
        }

        @keyframes slideInFromBottom {
          //
          0% {
            opacity: 0;
            transform: translateY(100px); /* Start above the element */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* End at the normal position */
          }
        }

        .animate-card-Bottom {
          animation: slideInFromBottom 1s ease-out forwards;
        }

        .animate-card-Top {
          animation: slideInFromTop 1s ease-out forwards;
        }

        .animate-card-left {
          animation: slideInFromLeft 1s ease-out forwards;
        }

        .animate-card-right {
          animation: slideInFromRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
