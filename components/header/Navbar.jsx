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
  "Our Expertise": [
    {
      label: "Web Development",
      description:
        "Our experts work on various tech stacks, including MERN and Laravel",
      icon: <FaCode />,
    },
    {
      label: "App Development",
      description: "React Native, Swift, Kotlin, Express",
      icon: <FaMobileAlt />,
    },
    {
      label: "Artificial Intelligence",
      description: "Mathematical Model, NLP, Advanced Python",
      icon: <FaBrain />,
    },
    {
      label: "CyberSecurity",
      description: "Vulnerability Assessment, Pentesting, Security",
      icon: <FaShieldAlt />,
    },
    {
      label: "UI/UX Design",
      description: "Figma, Wireframe, Complete Web and App designs",
      icon: <FaPencilRuler />,
    },
    {
      label: "IOT",
      description: "Our Experts also work on IOT technologies",
      icon: <FaMicrochip />,
    },
  ],
  "How We Work": [
    {
      label: "Our Methodology",
      description: "Our company uses Agile and Scrum methodologies",
      icon: <FaProjectDiagram />,
    },
    {
      label: "Development Approach",
      description:
        "We follow a structured process focused on planning, collaboration, and continuous improvement.",
      icon: <FaCogs />,
    },
    {
      label: "Idea to Launch",
      description: "From concept to deployment",
      icon: <FaRocket />,
    },
  ],
  "Who We Are": [
    {
      label: "About Us",
      description: "Our people and values.",
      icon: <FaBuilding />,
    },
    {
      label: "Our Team",
      description: "Our problem-solvers and tech minds.",
      icon: <FaUsers />,
    },
    {
      label: "Careers",
      description: "Our job opportunities, benefits, and company culture.",
      icon: <FaBriefcase />,
    },
    {
      label: "News",
      description: "Our latest updates.",
      icon: <FaBriefcase />,
    },
  ],
  "Case Studies": [],
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
    case "case studies":
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
    if (label === "Case Studies") return;
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
    isHome && !(activeMenu || isHovered || isScrolled || !showHeader)
      ? "bg-transparent text-white"
      : "bg-white text-black";

  const buttonClass =
    isHovered || showHeader
      ? "bg-blue-600 hover:bg-blue-800 text-white"
      : "bg-white/10 hover:bg-blue-600 text-white border border-white";

  return (
    <header
      className={`w-full fixed top-0 z-40 lg:px-20 sm:px-6 py-4 transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${bgClass}`}
    >
      <div className="max-w-[1300px] mx-auto flex items-center justify-between h-16 sm:h-[70px]">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Logo placeholder — replace with your Aptura logo */}
          <Image
            src="/logo.png"
            alt="Aptura Tech Solutions Logo"
            width={88}
            height={88}
            className="rounded-full object-cover"
          />
          <span className="text-xl lg:block sm:block sm:text-2xl md:hidden font-bold">
            Aptura
          </span>
        </div>

        <nav className="hidden md:block z-50 relative">
          <ul className="flex items-center gap-8 text-base font-medium">
            {Object.entries(menuData).map(([label, submenu]) => (
              <li
                key={label}
                className="relative"
                onMouseEnter={() => handleMenuEnter(label)}
                onMouseLeave={handleMenuLeave}
              >
                {label === "Case Studies" ? (
                  <Link
                    href={getPath(label)}
                    className="flex items-center cursor-pointer hover:text-blue-600 transition-all"
                  >
                    {label}
                  </Link>
                ) : (
                  <div className="flex items-center cursor-pointer hover:text-blue-600 transition-all">
                    {label}
                    <MdArrowDropDown />
                  </div>
                )}

                {activeMenu === label && label !== "Case Studies" && (
                  <div
                    className="fixed left-0 top-full w-full bg-white shadow-lg border-t border-gray-400 z-40"
                    onMouseEnter={() => handleMenuEnter(label)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-4 gap-8">
                      <div className="col-span-3 grid grid-cols-3 gap-6">
                        {submenu.map((section, idx) => (
                          <div key={idx} className="space-y-2">
                            <div className="flex items-center gap-2 text-blue-600">
                              {section.icon}
                              <Link
                                href={getPath(section.label)}
                                className="text-gray-900 font-medium hover:text-blue-600"
                              >
                                {section.label}
                              </Link>
                            </div>
                            <p className="text-gray-500 text-sm">
                              {section.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${buttonClass} cursor-pointer px-8 py-4 text-sm hidden md:block`}
          >
            Send request
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl ml-2 focus:outline-none"
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white text-black px-4 py-6 shadow-lg border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {Object.entries(menuData).map(([label, submenu]) => (
              <li key={label} className="border-b border-gray-200 pb-3">
                {label === "Case Studies" ? (
                  <Link
                    href={getPath(label)}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                ) : (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                      onClick={() => toggleMobileMenu(label)}
                    >
                      {label}
                      <MdArrowDropDown className="text-xl" />
                    </div>

                    {activeMenu === label && (
                      <ul className="mt-3 pl-4 flex flex-col gap-2">
                        {submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={getPath(item.label)}
                              onClick={() => setMobileOpen(false)}
                              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            >
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

          <div className="mt-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 block text-center transition-colors"
            >
              Send Request
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
