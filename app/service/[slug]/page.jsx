import ServicePage from "@/components/pages/ServicePage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const titles = {
    "web-development": "Web Development",
    "mobile-apps": "App Development",
    ai: "Artificial Intelligence",
    cybersecurity: "Cybersecurity",
    "ui-ux": "UI/UX Design",
    iot: "Internet of Things",
  };
  const title = titles[slug] || "Our Services";
  return {
    title: `${title} Services`,
    description: `Professional ${title} services by Aptura Tech Solutions — innovative, scalable, and tailored to your business needs.`,
  };
}

export default function Service({ params }) {
  return <ServicePage params={params} />;
}
