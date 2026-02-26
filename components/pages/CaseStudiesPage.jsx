"use client";

import OurProjects from "@/components/casestudies/OurProjects";
import UnlockComponent from "@/components/UnlockComponent";

export default function CaseStudiesPage() {
  return (
    <div className="mt-24 bg-white text-gray-900">
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
            Featured <span className="text-blue-600">Projects</span>
          </h1>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-yellow-400 to-black rounded-full mx-auto my-6" />
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real solutions for real problems. Here&apos;s what we&apos;ve built
            with clarity and intent.
          </p>
        </div>
        <OurProjects />
      </section>
      <UnlockComponent />
    </div>
  );
}
