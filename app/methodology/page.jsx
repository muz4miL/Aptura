import MethodologyPage from "@/components/pages/MethodologyPage";

export const metadata = {
  title: "Our Methodology — Agile, Transparent & Results-Driven",
  description:
    "Aptura Tech Solutions follows Agile and Scrum methodologies with structured sprints, continuous integration, and client-first collaboration for every project.",
  keywords: ["agile development", "scrum methodology", "software development process", "project management"],
  alternates: {
    canonical: "https://apturatechsolutions.tech/methodology",
  },
  openGraph: {
    title: "Our Development Methodology — Aptura Tech Solutions",
    description: "Agile, Scrum, and structured approach to software development.",
    url: "https://apturatechsolutions.tech/methodology",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Methodology() {
  return <MethodologyPage />;
}
