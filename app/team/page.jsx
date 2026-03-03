import TeamPage from "@/components/pages/TeamPage";

export const metadata = {
  title: "Our Team — Engineers, Designers & Innovators",
  description:
    "Meet the talented team behind Aptura Tech Solutions — experienced engineers, designers, and AI specialists driving digital transformation from Pakistan.",
  keywords: ["Aptura team", "software engineers Pakistan", "tech team Peshawar"],
  alternates: {
    canonical: "https://aptura.tech/team",
  },
  openGraph: {
    title: "Meet Our Team — Aptura Tech Solutions",
    description: "Innovative minds driving digital transformation.",
    url: "https://aptura.tech/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function OurTeam() {
  return <TeamPage />;
}
