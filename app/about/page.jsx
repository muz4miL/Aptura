import AboutUsPage from "@/components/pages/AboutUsPage";

export const metadata = {
  title: "About Us — Our Mission, Vision & Story",
  description:
    "Learn about Aptura Tech Solutions — a Peshawar-based software company on a mission to engineer intelligent digital solutions. Discover our story, values, core services, and the team driving innovation.",
  keywords: ["about Aptura Tech", "software company Pakistan", "tech startup Peshawar", "our mission"],
  alternates: {
    canonical: "https://aptura.tech/about",
  },
  openGraph: {
    title: "About Aptura Tech Solutions",
    description: "Our mission, values, and the team driving digital innovation.",
    url: "https://aptura.tech/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function About() {
  return (
    <div>
      <AboutUsPage />
    </div>
  );
}
