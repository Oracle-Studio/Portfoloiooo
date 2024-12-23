"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

export default function Home() {
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
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#e0e1dd] flex flex-col items-center gap-8">
      {/* Navbar */}
      <nav className="w-full flex justify-center py-7">
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

      {/* Puzzle Layout */}
      <section className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-6xl">
        {/* Card 1 */}

        <div
          className={`col-span-4 bg-[#18181B] rounded-xl shadow-2xl flex flex-col ${
            isBrowser ? "animate-card-left" : ""
          }`}
        >
          <h1 className="text-4xl  font-[Inter]  pt-5 pr-5 pl-5 font-bold ">
            Who am I?
          </h1>
          <p className="pt-3 pr-5  font-[Inter]  pl-5 text-lg text-gray-400 leading-relaxed">
            I’m Mondher ben haj ammar, a technology enthusiast with a passion
            for tackling complex problems through innovative solutions. With
            hands-on experience in programming, software development, and data
            structures, I’ve built a strong foundation in creating scalable
            systems. My journey has been shaped by projects and internships,
            fueling my interest in the real-world impact of technology. I thrive
            in collaborative environments, embrace challenges, and stay ahead of
            emerging trends, driven by a commitment to making a meaningful
            impact and leading technological transformation.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`col-span-2 row-span-2 bg-[#0D3C52] p-6 rounded-xl shadow-lg flex items-center justify-center text-center ${
            isBrowser ? "animate-card-right" : ""
          }`}
        >
          <Image
            src="/photo.webp"
            alt="Background"
            width={320}
            height={220}
            quality={75}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div
          className={`col-span-2 h-22 w-7/9 bg-[#0D3C52] pt-6 rounded-xl shadow-lg text-center ${
            isBrowser ? "animate-card-left" : ""
          }`}
        >
          <h2 className="text-3xl  font-[Inter]  font-bold">
            Full Stack Developer
          </h2>
        </div>

        <div
          className={`col-span-2 row-span-2   bg-[#18181B] p-6  rounded-lg shadow-lg text-center flex flex-col items-center justify-center ${
            isBrowser ? "" : ""
          }`}
        >
          <Image
            src="/photoimage.jpg"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full shadow-lg mb-4"
          />
          <h2 className="text-4xl font-bold font-[Inter] ">
            Mondher <br /> Ben Haj Ammar
          </h2>
        </div>

        {/* Card 3 */}
        <div
          className={`col-span-2 row-span-2 h-80 bg-[#18181B] p-6 rounded-xl mb-7 shadow-lg ${
            isBrowser ? "animate-card-left" : ""
          }`}
        >
          <h2 className="text-3xl font-bold pb-6 text-white font-[Inter] mb-4">
            Technologies I have worked with
          </h2>
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { name: "flutter", label: "Flutter" },
              { name: "nextjs", label: "Next.js" },
              { name: "nodejs", label: "Node.js" },
              { name: "javascript", label: "JS" },
              { name: "typescript", label: "TS" },
              { name: "tailwindcss", label: "Tailwind" },
              { name: "firebase", label: "Firebase" },
              { name: "mongodb", label: "MongoDB" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center relative group"
              >
                <span className="text-[#778da9] text-4xl">
                  <i className={`devicon-${tech.name}-plain`}></i>
                </span>
                <p className="text-gray-400 text-sm font-semibold">
                  {tech.label}
                </p>
                {/* Custom Tooltip */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-white text-black text-sm font-semibold rounded-xl py-1 px-2">
                  {` ${tech.label}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4 */}

        {/* Card 5 */}

        {/* Card 6 */}
        <div
          className={`col-span-2 row-span-1 bg-[#0D3C52] p-8 rounded-xl shadow-lg flex items-center justify-center text-center ${
            isBrowser ? "animate-card-right" : ""
          }`}
        >
          <h2 className="text-3xl font-extrabold text-[#e0e1dd] leading-snug">
            Think
            <br />
            Build
            <br />
            Optimize
          </h2>
        </div>

        {/* Education Section */}
        <div
          className={`col-span-4 mb-7 bg-[#18181B] p-6 rounded-lg shadow-lg ${
            isBrowser ? "animate-card-right" : ""
          }`}
        >
          <h2 className="text-3xl font-extrabold mb-4">Education</h2>
          <p className="text-[#e0e1dd] text-xl inline font-sans mb-4 pt-6">
            <span className="font-bold">
              ESPRIT: Private Higher School of Engineering and Technologies
            </span>{" "}
            (2021-2024)
          </p>
          <p className="text-lg text-gray-400 font-sans mb-4">
            National Engineering Degree in Computer Science
          </p>
          <p className="text-[#e0e1dd] text-xl inline font-sans mb-4">
            <span className="font-bold">
              Faculty of Economic Sciences and Management of Tunis
            </span>{" "}
            (2018-2021)
          </p>
          <p className="text-lg text-gray-400 font-sans">
            Bachelor of Science in Management Information Systems
          </p>
        </div>
      </section>

      {/* Tailwind Animations */}
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
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .animate-card-Top {
          animation: slideInFromTop 0.8s ease-out forwards;
        }

        .animate-card-left {
          animation: slideInFromLeft 2.5s ease-out forwards;
        }

        .animate-card-right {
          animation: slideInFromRight 2.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
