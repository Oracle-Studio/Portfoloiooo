"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
import { Inter } from "next/font/google";

const InterFont = Inter({
  subsets: ["latin"],
  weight: "400",
});
export default function ResumePage() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false); // Track if the page is scrolled

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
    <div className="min-h-screen bg-[#000000] text-[#e0e1dd] flex flex-col items-center gap-8 pt-[150px]">
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
      <section className="w-full flex-grow flex justify-center items-center">
        <div className="w-full  h-[85vh] md:h-[90vh]">
          <iframe
            src="/Cv_Mondherbenhajammar.pdf"
            className="w-full h-full border-none"
            title="Resume"
          />
        </div>
      </section>
    </div>
  );
}
