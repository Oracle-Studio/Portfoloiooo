"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { FaDownload, FaEye, FaExpand } from "react-icons/fa"; // Import icons

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
    <div className="min-h-screen bg-[#000000] text-[#e0e1dd] flex flex-col items-center gap-8 pt-[130px]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full flex justify-center py-7 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/80 backdrop-blur-md shadow-lg"
            : "bg-[#000000]"
        }`}
      >
        <div className="bg-[#27272A] text-white px-1 py-1 rounded-xl shadow-lg flex gap-2">
          {["Home", "Projects", "Resume", "Contact"].map((item) => (
            <span
              key={item}
              onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
              className={`cursor-pointer py-2 px-4 transition-all duration-300 ease-in-out rounded-lg ${
                activeItem === `/${item.toLowerCase()}`
                  ? "bg-[#3a3a3d] font-[Inter] font-bold shadow-xl"
                  : "text-gray-400 font-[Inter] font-semibold text-sm hover:shadow-xl"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Resume Section */}
      <section className="w-full flex-grow flex flex-col justify-center items-center gap-4">
        <div className="w-full h-[85vh] md:h-[90vh]">
          {showFullScreen ? (
            <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
              <iframe
                src="/Resume_Mondherbenhajammar.pdf"
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
              src="/Resume_Mondherbenhajammar.pdf"
              className="w-full h-full border-none"
              title="Resume"
            />
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {/* Full Screen Button */}
          <button
            onClick={toggleFullScreen}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <FaExpand className="text-xl" />
            <span className="text-sm font-semibold">Full Screen</span>
          </button>

          {/* View Button */}
          <a
            href="/Resume_Mondherbenhajammar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <FaEye className="text-xl" />
            <span className="text-sm font-semibold">View</span>
          </a>

          {/* Download Button */}
          <a
            href="/Resume_Mondherbenhajammar.pdf"
            download
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <FaDownload className="text-xl" />
            <span className="text-sm font-semibold">Download</span>
          </a>
        </div>
      </section>
    </div>
  );
}
