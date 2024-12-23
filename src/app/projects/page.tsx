"use client";
import React, { useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation"; // Import usePathname

export default function Portfolio() {
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

  const projects = [
    {
      title: "Madidou Real Estate Rental Mobile Application",
      description:
        "Developed a secure and innovative platform for real estate rentals using Flutter, Node.js, and Firebase. Focused on designing user interfaces, backend development, and cloud deployment to ensure scalability and reliability.",
      techStack: [
        { name: "flutter", label: "Flutter" },
        { name: "nodejs", label: "Node.js" },
        { name: "firebase", label: "Firebase" },
        { name: "javascript", label: "JS" },
        { name: "typescript", label: "TS" },
      ],
      image: "/Imagenature.webp",
      link: "https://example.com/project1",
      githubLink: "https://github.com/your-repo1",
      video: "/projet1video.mp4", // Path to the video file

      comingSoon: true,
      logo: "devicon-flutter-plain", // Replace with appropriate logo class or image path
    },
    {
      title: "Taxis freressok Drivers Management System",
      description:
        "Taxis Freressok is a driver management platform using Next.js, Node.js, Firebase, and Twilio. It streamlines operations with real-time notifications, course management, and secure authentication, ensuring efficiency and scalability..",
      techStack: [
        { name: "nextjs", label: "Next.js" },
        { name: "nodejs", label: "Node.js" },
        { name: "firebase", label: "Firebase" },
        { name: "javascript", label: "JS" },
        { name: "typescript", label: "TS" },
      ],
      video: "/projectvideo2.mp4", // Path to the video file

      image: "/photo.webp",
      link: "https://taxisfreressok.com/",
      githubLink: "https://github.com/your-repo2",
      logo: "devicon-nextjs-plain", // Replace with appropriate logo class or image path

      comingSoon: false,
    },
    {
      title: "DevOps Mobile Platform",
      description:
        "Created a mobile platform for continuous integration and deployment (CI/CD) of applications using REACT-JS, Node.js, and GitHub Actions. Focused on automated processes, testing, and documentation for maintenance and future updates.",
      techStack: [
        { name: "nextjs", label: "Next.js" },
        { name: "nodejs", label: "Node.js" },
        { name: "firebase", label: "Firebase" },
        { name: "javascript", label: "JS" },
        { name: "typescript", label: "TS" },
      ],
      image: "/Imagenature.webp",
      link: "https://example.com/project1",
      githubLink: "https://github.com/your-repo1",
      video: "/projetvideo3.mp4", // Path to the video file

      comingSoon: true,
      logo: "devicon-nextjs-plain", // Replace with appropriate logo class or image path
    },

    {
      title: " Java EE Leave Management Application",
      description:
        "Built an application for managing leave requests, approvals, and tracking using Java EE and JavaServer Faces (JSF). Worked on user interface design, backend logic, and user training for system adoption.",
      techStack: [{ name: "java", label: "java" }],
      image: "/Imagenature.webp",
      link: "https://example.com/project1",
      githubLink: "https://github.com/your-repo1",
      video: "/project4.mp4", // Path to the video file

      comingSoon: true,
      logo: "devicon-java-plain",
      // Replace with appropriate logo class or image path
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-4">
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

      {/* Projects Section */}
      <section id="portfolio" className="max-w-6xl mt-4">
        <div className="grid grid-cols-1  ">
          {" "}
          {/* Set no gap */}
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-12 bg-black -mb-44 gap-5  rounded-2xl shadow-2xl mt-5"
            >
              {/* Left Section: Image */}
              <div className="col-span-6 bg-black rounded-2xl overflow-hidden">
                <video
                  src={project.video} // Use a "video" key in your project object
                  className="w-full h-[28rem] rounded-2xl object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline // Ensures autoplay works on mobile devices
                ></video>
              </div>

              {/* Right Section: Content */}
              <div className="col-span-6  gap-5  grid grid-rows-2">
                {/* Title and Description */}
                <div className="bg-[#18181B] animate-card-Top p-5 rounded-2xl h-[20rem] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center  mb-6">
                      <span className="text-4xl  text-gray-50 mr-3 p-3 bg-[#27272A] rounded-xl shadow-lg hover:bg-[#3a3a3d] hover:text-gray-300 hover:shadow-2xl transition duration-300">
                        <i className={project.logo}></i>
                      </span>

                      <h3 className="text-3xl font-bold font-[Inter]">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed font-[Inter]">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-5 mb-1 mt-4 ">
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

                {/* Buttons */}
                <div className="grid grid-cols-2  gap-5 ">
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
                        <span className="text-gray-400 font-semibold text-lg animate-card-right">
                          Coming Soon!
                        </span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-link"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="#ffffff"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="46"
                          height="46"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M9 15l6 -6"></path>
                          <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
                          <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
                        </svg>
                      )}
                    </a>
                  </div>
                  <div className="bg-[#18181B] p-6 rounded-2xl flex justify-center items-center h-[6rem] animate-card-right">
                    <svg
                      href={project.githubLink}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      fill="#ffffff"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                  </div>
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
