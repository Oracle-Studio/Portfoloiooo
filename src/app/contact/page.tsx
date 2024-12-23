"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname
export default function Contact() {
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center gap-12 p-8">
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
      {/* Contact Section */}
      <section
        id="Contact"
        className="flex flex-col items-center w-full max-w-4xl mt-20"
      >
        <div className="flex flex-col items-center gap-6 w-full">
          {/* Email and Social Links */}
          <div className="grid grid-cols-2 gap-6 w-full ">
            <a
              href="mailto:Mondherbenhajammar@gmail.com"
              className="flex items-center animate-card-Top justify-center bg-[#18181B] rounded-xl shadow-2xl py-6 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="50"
                  fill="#ffffff"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-lg text-white font-semibold tracking-wide">
                  Mondherbenhajammar@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/Mondher19" // Replace with your actual GitHub profile URL
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Improves security when opening a new tab
              className="flex animate-card-right items-center col-span-1 row-span-3 justify-center bg-[#18181B] rounded-xl shadow-2xl py-6 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col  items-center gap-4">
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
                <div className="text-center">
                  <h1 className="text-3xl font-bold  text-white">
                    GitHub Profile
                  </h1>
                  <p className="text-xl mt-1 text-gray-400">
                    Find more of my repositories
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mondher-ben-haj-ammar-a25312205/" // Replace with your actual LinkedIn profile URL
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Improves security when opening a new tab
              className="flex items-center animate-card-left justify-center bg-[#18181B] rounded-xl shadow-2xl py-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-2">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  fill="#ffffff"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </div>
            </a>

            <a
              href="tel:+21693699995"
              className="flex items-center animate-card-Bottom justify-center w-full bg-[#18181B] rounded-xl shadow-2xl py-6 cursor-pointer hover:bg-gray-700 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28.314 28.323"
                  width="48"
                  height="48"
                  fill="white" // Set the fill color of the phone icon to white
                >
                  <path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z" />
                </svg>

                <p className="text-lg text-gray-300 font-semibold tracking-wide">
                  <span className="text-white">(+216)</span> 93 369 995
                </p>
              </div>
            </a>
          </div>

          {/* Form */}

          {/* <div className="mt-10 w-full max-w-2xl text-center p-8 rounded-lg shadow-md bg-[hsl(var(--nextui-default-100)/var(--nextui-default-100-opacity,var(--tw-bg-opacity)))]">
            <h2 className="text-2xl font-bold mb-4 text-left">
              Contact with me
            </h2>
            <p className="text-left text-gray-400 mb-6">
              You can also get in touch with me through this form below.
            </p>
            <form className="space-y-4 flex flex-col items-center">
              <input
                type="text"
                placeholder="Your Name"
                className="w-11/12 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-11/12 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-700 focus:outline-none"
              />
              <textarea
                placeholder="Enter your message here"
                className="w-11/12 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-700 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-11/12 px-6 py-3 bg-gray-700 hover:bg-gray-700 text-white rounded-md shadow-md"
              >
                Send Message
              </button>
            </form>
          </div> */}
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
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-card-right {
          animation: slideInFromRight 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
