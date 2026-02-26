"use client";

import ServicesComponent from "./ServicesComponent";

const services = [
  {
    title: "Artificial Intelligence and ML",
    icon: "/images/services/ai_service.webp",
    link: "/service/ai",
  },
  {
    title: "App Development",
    icon: "/images/services/mobileDevService.webp",
    link: "/service/mobile-apps",
  },
  {
    title: "Web Development",
    icon: "/images/services/webDevService.webp",
    link: "/service/web-development",
  },
  {
    title: "Cyber Security",
    icon: "/images/services/it_consulting.webp",
    link: "/service/cybersecurity",
  },
  {
    title: "UI/UX Design",
    icon: "/images/services/software_development.webp",
    link: "/service/ui-ux",
  },
  {
    title: "IoT Solutions",
    icon: "/images/services/ioT.webp",
    link: "/service/iot",
  },
];

const AllServices = () => {
  return (
    <section className="bg-[#f9f9f9] py-20 px-4 cursor-pointer">
      <h1 align="center" className="mb-20 text-5xl font-bold text-gray-700">
        Fuel Your Growth with Our Services
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServicesComponent
            key={index}
            link={service.link}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
