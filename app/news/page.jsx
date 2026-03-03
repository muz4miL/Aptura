import NewsPageContent from "@/components/pages/NewsPageContent";

export const metadata = {
  title: "News & Updates — Latest from Aptura Tech",
  description:
    "Stay updated with the latest news, tech insights, project launches, and announcements from Aptura Tech Solutions.",
  keywords: ["Aptura news", "tech updates", "software company news", "project launches"],
  alternates: {
    canonical: "https://aptura.tech/news",
  },
  openGraph: {
    title: "News & Updates — Aptura Tech Solutions",
    description: "Latest news, events, and announcements.",
    url: "https://aptura.tech/news",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function News() {
  return <NewsPageContent />;
}
