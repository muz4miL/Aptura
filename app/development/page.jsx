import DevelopmentPage from "@/components/pages/DevelopmentPage";

export const metadata = {
  title: "Development Approach — How We Build Software",
  description:
    "Our development approach combines clean architecture, test-driven development, and CI/CD pipelines to deliver scalable, maintainable software solutions.",
  keywords: ["software development approach", "clean architecture", "CI/CD", "test-driven development"],
  alternates: {
    canonical: "https://aptura.tech/development",
  },
  openGraph: {
    title: "Development Approach — Aptura Tech Solutions",
    description: "Structured, collaborative, and focused on continuous improvement.",
    url: "https://aptura.tech/development",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Development() {
  return <DevelopmentPage />;
}
