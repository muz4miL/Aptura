import LaunchPage from "@/components/pages/LaunchPage";

export const metadata = {
  title: "Idea to Launch — From Concept to Deployment",
  description:
    "From initial concept to production deployment — learn how Aptura Tech Solutions turns your ideas into fully launched digital products with speed and precision.",
  keywords: ["idea to launch", "product development", "MVP development", "startup development"],
  alternates: {
    canonical: "https://aptura.tech/launch",
  },
  openGraph: {
    title: "Idea to Launch — Aptura Tech Solutions",
    description: "We turn your ideas into reality, from concept to deployment.",
    url: "https://aptura.tech/launch",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Launch() {
  return <LaunchPage />;
}
