"use client";

import Link from "next/link";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaMagnifyingGlassLocation } from "react-icons/fa6";

const FooterMain = () => {
  return (
    <footer className="bg-white text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-200">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Left Section - Logo and Socials */}
        <div className="max-w-80">
          <h1 className="text-black font-bold text-2xl">Aptura Tech</h1>
          <p className="text-sm mt-2">
            We build modern, scalable, and intelligent solutions that drive real
            value. Empowering businesses through cutting-edge technology and
            expert services.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-4 text-gray-700">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/aptura-tech-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-blue-700 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Expertise */}
        <div>
          <p className="text-lg text-gray-800 font-medium">Expertise</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "Web Development", path: "/service/web-development" },
              { name: "App Development", path: "/service/mobile-apps" },
              { name: "UI/UX Design", path: "/service/ui-ux" },
              { name: "Cyber Security", path: "/service/cybersecurity" },
              {
                name: "Artificial Intelligence",
                path: "/service/ai",
              },
              { name: "Internet Of Things (IoT)", path: "/service/iot" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-lg text-gray-800 font-medium">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Our Methodology", path: "/methodology" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-blue-600 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="max-w-80">
          <h3 className="text-lg text-gray-800 mb-2 font-medium">Contact Us</h3>
          <p className="text-sm text-gray-500 mb-4">
            Reach out to us for collaboration or queries.
          </p>

          <div className="space-y-4 text-sm text-gray-800">
            {/* Location */}
            <div className="flex items-start gap-3">
              <FaMagnifyingGlassLocation className="text-blue-600 text-xl mt-1" />
              <p>Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-8" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-xs">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:text-blue-600">
            Aptura Tech Solutions
          </Link>
          . All rights reserved.
        </p>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
