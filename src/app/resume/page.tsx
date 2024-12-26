"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { FaDownload, FaEye, FaExpand } from "react-icons/fa"; // Import icons
import enTranslations from "../locales/en/common.json";
import frTranslations from "../locales/fr/common.json";

const InterFont = Inter({
  subsets: ["latin"],
  weight: "400",
});

export default function ResumePage() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile
  const [showFullScreen, setShowFullScreen] = useState(false); // Track full-screen mode
  const locale = pathname.split("/")[1] || "en";
  const t = locale === "fr" ? frTranslations : enTranslations;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile status based on screen width
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize the mobile status on mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    setActiveItem(path);
    router.push(path);
  };

  const toggleFullScreen = () => {
    setShowFullScreen(!showFullScreen); // Toggle full-screen mode
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#e0e1dd] flex flex-col items-center gap-8 ">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full flex justify-center py-7 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/80 backdrop-blur-md shadow-lg"
            : "bg-[#000000]"
        }`}
      >
        <div className="bg-[#27272A] text-white px-1 py-1 rounded-xl shadow-lg flex gap-2 ">
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
      {/* Resume Section */}
      <section className="w-full flex-grow flex flex-col justify-center items-center gap-4">
        <div className="hidden md:block w-full h-[125vh] md:h-[125vh] pt-[130px]">
          {showFullScreen ? (
            <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
              <iframe
                src={t.cvRep}
                className="w-full h-full border-none"
                title="Resume"
              />
              <button
                onClick={toggleFullScreen}
                className="absolute top-5 right-5 bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
              >
                Close Full Screen
              </button>
            </div>
          ) : (
            <iframe
              src={t.cvRep}
              className="w-full h-full border-none"
              title="Resume"
            />
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex flex-wrap justify-center gap-8">
          {/* Full Screen Button */}

          {/* View Button */}
          <a
            href={t.cvRep}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaEye className="text-2xl" />
            <span className="text-base font-bold">🌟 {t.Resume.View}</span>
          </a>

          {/* Download Button */}
          <a
            href={t.cvRep}
            download
            className="flex items-center gap-3 bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <FaDownload className="text-2xl" />
            <span className="text-base font-bold">📥 {t.Resume.Download}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
