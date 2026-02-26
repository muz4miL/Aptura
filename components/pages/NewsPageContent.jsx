"use client";

import { useState } from "react";
import Image from "next/image";

const newsData = [
  {
    title: "Aptura Tech Solutions Launches",
    summary:
      "Aptura Tech Solutions is officially live — a digital innovation partner specializing in Software, AI, and Web Solutions. Based in Peshawar, our team is focused on helping startups and businesses transform their ideas into scalable, high-impact digital products.",
    image: "/images/news/launch.jpg",
    date: "2025",
  },
  {
    title: "Building the Future with AI & Automation",
    summary:
      "At Aptura, we're investing in cutting-edge AI and automation solutions to empower businesses with smarter workflows, predictive analytics, and intelligent software systems that drive real results.",
    image: "/images/news/ai.jpg",
    date: "2025",
  },
  {
    title: "Our Vision for Digital Transformation",
    summary:
      "We believe every business deserves access to world-class technology. Aptura Tech Solutions is on a mission to bridge the gap between innovative ideas and scalable digital solutions, one project at a time.",
    image: "/images/news/vision.jpg",
    date: "2025",
  },
];

export default function NewsPageContent() {
  const [expanded, setExpanded] = useState({});
  const [modalImage, setModalImage] = useState(null);

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20 mt-24 mb-10">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
        Latest <span className="text-blue-600">News & Insights</span>
      </h1>
      <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-black rounded-full mx-auto mt-4 mb-10"></div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsData.map((news, index) => {
          const isExpanded = expanded[index];
          const displayedText = isExpanded
            ? news.summary
            : news.summary.length > 120
              ? news.summary.slice(0, 120) + "..."
              : news.summary;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md max-h-fit overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setModalImage(news.image)}
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{news.date}</p>
                <p className="text-gray-700">{displayedText}</p>

                {news.summary.length > 120 && (
                  <button
                    className="mt-3 text-blue-600 font-semibold hover:underline"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Read Less" : "Read More →"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <Image
            src={modalImage}
            alt="Full"
            width={900}
            height={600}
            className="max-w-3xl max-h-[90vh] rounded-lg shadow-lg object-contain"
          />
        </div>
      )}
    </div>
  );
}
