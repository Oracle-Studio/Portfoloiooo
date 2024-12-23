"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
export default function ResumePage() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  const [activeItem, setActiveItem] = useState("");

  // Update activeItem when the path changes
  useEffect(() => {
    setActiveItem(pathname); // Update active item based on pathname
  }, [pathname]);

  const handleNavigation = (path: string) => {
    setActiveItem(path); // Update active item when a menu is clicked
    router.push(path); // Navigate to the clicked menu item path
  };

  return (
    <div className=" min-h-screen  bg-black text-gray-200 flex flex-col items-center ">
      {/* Navigation Bar */}
      <nav className="w-full flex justify-center py-9">
        <div className="bg-[#27272A] text-white px-1 py-1 rounded-xl shadow-lg flex gap-2">
          {["Home", "Projects", "Resume", "Contact"].map((item) => (
            <span
              key={item}
              onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
              className={`cursor-pointer py-2 px-4 transition-all duration-300 ease-in-out rounded-lg ${
                activeItem === `/${item.toLowerCase()}` // Check if item is active using state
                  ? "bg-[#3a3a3d] font-[Inter] font-bold shadow-xl" // Active state styles
                  : "text-gray-400 font-[Inter] font-semibold text-sm hover:shadow-xl" // Hover state styles
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
