"use client";

import Link from "next/link";
import Image from "next/image";

const ServicesComponent = ({ icon, title, desc, link }) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center text-center px-6 py-10 rounded-xl transition-all duration-300 bg-[#001c3d] hover:bg-blue-400 hover:shadow-md group"
    >
      <div className="w-20 h-20 flex items-center justify-center mb-6">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition duration-300"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-300 group-hover:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-400 group-hover:text-gray-200 text-sm leading-relaxed tracking-wide">
        {desc}
      </p>
    </Link>
  );
};

export default ServicesComponent;
