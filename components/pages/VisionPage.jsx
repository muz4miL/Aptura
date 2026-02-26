"use client";

import Image from "next/image";

export default function VisionPage() {
  return (
    <section className="bg-white py-20 px-6 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-4">
            At Aptura Tech Solutions, we envision a future where technology
            empowers every business to reach its full potential. We are
            committed to delivering innovative, scalable digital solutions that
            transform ideas into impactful realities.
          </p>
          <p className="text-gray-600">
            Our vision is to be a leading technology partner that bridges the
            gap between complex challenges and elegant solutions, helping
            businesses thrive in the digital age through AI, web development,
            and cutting-edge IT consulting.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="w-full h-[400px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
            <span className="text-6xl">💡</span>
          </div>
        </div>
      </div>
    </section>
  );
}
