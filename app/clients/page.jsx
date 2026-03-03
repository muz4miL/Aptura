import ClientsPage from "@/components/pages/ClientsPage";

export const metadata = {
  title: "Our Clients — Trusted by Businesses Worldwide",
  description:
    "Discover the businesses and organizations that trust Aptura Tech Solutions to deliver intelligent software, AI systems, and digital products.",
  keywords: ["Aptura clients", "software development portfolio", "trusted tech partner"],
  alternates: {
    canonical: "https://aptura.tech/clients",
  },
  openGraph: {
    title: "Clients — Aptura Tech Solutions",
    description: "Trusted by businesses to deliver high-quality digital solutions.",
    url: "https://aptura.tech/clients",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Clients() {
  return <ClientsPage />;
}
