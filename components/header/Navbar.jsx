"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaShieldAlt,
  FaPencilRuler,
  FaMicrochip,
  FaProjectDiagram,
  FaCogs,
  FaRocket,
  FaUsers,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const menuData = {
  Solutions: [
    {
      label: "Web Development",
      description: "Full-stack apps with MERN, Next.js & Laravel",
      icon: <FaCode />,
    },
    {
      label: "App Development",
      description: "Native & cross-platform mobile experiences",
      icon: <FaMobileAlt />,
    },
    {
      label: "Artificial Intelligence",
      description: "LLMs, NLP, computer vision & predictive AI",
      icon: <FaBrain />,
    },
    {
      label: "CyberSecurity",
      description: "Pentesting, audits & zero-trust architecture",
      icon: <FaShieldAlt />,
    },
    {
      label: "UI/UX Design",
      description: "Research-driven interfaces that convert",
      icon: <FaPencilRuler />,
    },
    {
      label: "IOT",
      description: "Connected devices & real-time data pipelines",
      icon: <FaMicrochip />,
    },
  ],
  Process: [
    {
      label: "Our Methodology",
      description: "Agile sprints, transparent delivery",
      icon: <FaProjectDiagram />,
    },
    {
      label: "Development Approach",
      description: "Plan → Build → Ship → Iterate",
      icon: <FaCogs />,
    },
    {
      label: "Idea to Launch",
      description: "From napkin sketch to production",
      icon: <FaRocket />,
    },
  ],
  Company: [
    {
      label: "About Us",
      description: "Our mission, values & story.",
      icon: <FaBuilding />,
    },
    {
      label: "Our Team",
      description: "Engineers, designers & strategists.",
      icon: <FaUsers />,
    },
    {
      label: "Careers",
      description: "Join the team — open roles.",
      icon: <FaBriefcase />,
    },
    {
      label: "News",
      description: "Latest from Aptura.",
      icon: <FaBriefcase />,
    },
  ],
  Work: [],
};

const getPath = (item) => {
  switch (item.toLowerCase()) {
    case "web development":
      return "/service/web-development";
    case "app development":
      return "/service/mobile-apps";
    case "artificial intelligence":
      return "/service/ai";
    case "cybersecurity":
      return "/service/cybersecurity";
    case "ui/ux design":
      return "/service/ui-ux";
    case "iot":
      return "/service/iot";
    case "our methodology":
      return "/methodology";
    case "development approach":
      return "/development";
    case "idea to launch":
      return "/launch";
    case "about us":
      return "/about";
    case "our team":
      return "/team";
    case "careers":
      return "/careers";
    case "work":
      return "/case-studies";
    case "news":
      return "/news";
    default:
      return "#";
  }
};

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);
  const prevScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setActiveMenu(null);
    setIsHovered(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(
        currentScrollY < prevScrollY.current || currentScrollY < 50,
      );
      setIsScrolled(currentScrollY > 10);
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  const handleMenuEnter = (label) => {
    if (label === "Work") return;
    handleMouseEnter();
    clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMenuLeave = () => {
    handleMouseLeave();
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const toggleMobileMenu = (label) => {
    const isSame = activeMenu === label;
    setActiveMenu(isSame ? null : label);
  };

  const bgClass =
    activeMenu || isHovered || isScrolled ? "glass-card" : "bg-transparent";

  const buttonClass =
    "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#050507] font-semibold glow-btn";

  return (
    <header
      className={`w-full fixed top-0 z-40 lg:px-20 sm:px-6 py-3 transition-all duration-500 text-white ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${bgClass}`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 sm:h-[70px]">
        {/* Logo */}
        <div
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => router.push("/")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/logo-rembg.png"
            alt="Aptura Tech Solutions Logo"
            width={40}
            height={40}
            className="object-contain logo-glow"
          />
          <span className="text-xl lg:block sm:block sm:text-2xl md:hidden font-heading font-bold gradient-text">
            Aptura
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block z-50 relative">
          <ul className="flex items-center gap-8 text-[15px] font-medium tracking-wide">
            {Object.entries(menuData).map(([label, submenu]) => (
              <li
                key={label}
                className="relative"
                onMouseEnter={() => handleMenuEnter(label)}
                onMouseLeave={handleMenuLeave}
              >
                {label === "Work" ? (
                  <Link
                    href={getPath(label)}
                    className="flex items-center cursor-pointer text-white/80 hover:text-[#00f0ff] transition-all duration-200"
                  >
                    {label}
                  </Link>
                ) : (
                  <div className="flex items-center cursor-pointer text-white/80 hover:text-[#00f0ff] transition-all duration-200">
                    {label}
                    <MdArrowDropDown className="ml-0.5 opacity-50" />
                  </div>
                )}

                {/* Mega dropdown */}
                {activeMenu === label && label !== "Work" && (
                  <div
                    className="fixed left-0 top-full w-full z-40 animate-fade-in-down"
                    onMouseEnter={() => handleMenuEnter(label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="glass-card border-t border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                      <div className="max-w-6xl mx-auto px-8 py-8">
                        <p className="text-[#00f0ff]/60 text-xs font-heading uppercase tracking-[0.25em] mb-6">
                          {label}
                        </p>
                        <div
                          className={`grid gap-4 ${submenu.length > 3 ? "grid-cols-3" : "grid-cols-3"}`}
                        >
                          {submenu.map((section, idx) => (
                            <Link
                              key={idx}
                              href={getPath(section.label)}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.04] transition-all duration-200"
                            >
                              <div className="mt-0.5 text-[#00f0ff]/70 group-hover:text-[#00f0ff] transition-colors text-lg">
                                {section.icon}
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm group-hover:text-[#00f0ff] transition-colors">
                                  {section.label}
                                </p>
                                <p className="text-[#94a3b8]/80 text-xs mt-0.5 leading-relaxed">
                                  {section.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass} cursor-pointer px-6 py-2.5 text-sm rounded-lg hidden md:block`}
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl ml-2 focus:outline-none text-white/80"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card text-white px-5 py-6 shadow-2xl border-t border-white/5 mt-2 rounded-xl mx-2">
          <ul className="flex flex-col gap-3">
            {Object.entries(menuData).map(([label, submenu]) => (
              <li key={label} className="border-b border-white/5 pb-3">
                {label === "Work" ? (
                  <Link
                    href={getPath(label)}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-base font-medium text-white hover:text-[#00f0ff] transition-colors"
                  >
                    {label}
                  </Link>
                ) : (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer text-base font-medium text-white hover:text-[#00f0ff] transition-colors"
                      onClick={() => toggleMobileMenu(label)}
                    >
                      {label}
                      <MdArrowDropDown
                        className={`text-xl transition-transform duration-200 ${
                          activeMenu === label ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {activeMenu === label && (
                      <ul className="mt-3 pl-2 flex flex-col gap-1">
                        {submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={getPath(item.label)}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 py-1.5 text-sm text-[#94a3b8] hover:text-[#00f0ff] transition-colors"
                            >
                              <span className="text-[#00f0ff]/50 text-xs">
                                {item.icon}
                              </span>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#050507] font-semibold rounded-lg px-6 py-3 block text-center glow-btn transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
