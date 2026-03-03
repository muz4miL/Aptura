import VisionPage from "@/components/pages/VisionPage";

export const metadata = {
  title: "Our Vision — Shaping the Future of Technology",
  description:
    "Aptura Tech Solutions envisions a future where intelligent software empowers every business. Discover our long-term vision for technology and digital innovation.",
  keywords: ["tech vision", "future of software", "digital innovation", "AI future"],
  alternates: {
    canonical: "https://aptura.tech/vision",
  },
  openGraph: {
    title: "Our Vision — Aptura Tech Solutions",
    description: "Shaping the future of technology and digital innovation.",
    url: "https://aptura.tech/vision",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Vision() {
  return <VisionPage />;
}
