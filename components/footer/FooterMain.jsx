"use client";

import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const FooterMain = () => {
  return (
    <footer className="relative bg-[#050507] text-[#94a3b8] pt-16 px-6 md:px-16 lg:px-24 xl:px-32 border-t border-white/5 overflow-hidden">
      {/* Giant watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-heading font-bold text-white/[0.02] leading-none tracking-tight">
          APTURA
        </span>
      </div>

      <div className="relative z-10 flex flex-wrap justify-between gap-12 md:gap-6">
        {/* Left Section */}
        <div className="max-w-80">
          <div className="flex items-center gap-2.5 mb-2">
            <Image
              src="/logo-rembg1.png"
              alt="Aptura Tech Solutions Logo"
              width={36}
              height={36}
              className="object-contain logo-glow"
            />
            <h1 className="text-white font-heading font-bold text-2xl gradient-text">
              Aptura Tech
            </h1>
          </div>
          <p className="text-sm mt-2 text-[#94a3b8]">
            Engineering intelligent software, AI systems, and digital products
            that give ambitious businesses their unfair advantage.
          </p>

          <div className="flex items-center gap-3 mt-4 text-[#94a3b8]">
            <a
              href="https://www.linkedin.com/company/aptura-tech-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-6 h-6 hover:text-[#00f0ff] transition"
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
          <p className="text-lg text-white font-heading font-medium">
            Expertise
          </p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "Web Development", path: "/service/web-development" },
              { name: "App Development", path: "/service/mobile-apps" },
              { name: "UI/UX Design", path: "/service/ui-ux" },
              { name: "Cyber Security", path: "/service/cybersecurity" },
              { name: "Artificial Intelligence", path: "/service/ai" },
              { name: "Internet Of Things (IoT)", path: "/service/iot" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-[#00f0ff] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-lg text-white font-heading font-medium">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Our Methodology", path: "/methodology" },
              { name: "Clients", path: "/clients" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="hover:text-[#00f0ff] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="max-w-80">
          <h3 className="text-lg text-white font-heading mb-2 font-medium">
            Contact Us
          </h3>
          <p className="text-sm text-[#94a3b8] mb-4">
            Reach out to us for collaboration or queries.
          </p>

          <div className="space-y-4 text-sm text-[#94a3b8]">
            <div className="flex items-start gap-3">
              <FaMagnifyingGlassLocation className="text-[#00f0ff] text-xl mt-1" />
              <p>Peshawar, Pakistan</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white/10 mt-8 relative z-10" />

      {/* Bottom Row */}
      <div className="relative z-10 flex flex-col md:flex-row gap-2 items-center justify-between py-5 text-xs">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-rembg1.png"
            alt="Aptura"
            width={20}
            height={20}
            className="object-contain opacity-60"
          />
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:text-[#00f0ff]">
              Aptura Tech Solutions
            </Link>
            . All rights reserved.
          </p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/about" className="hover:text-[#00f0ff]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#00f0ff]">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
