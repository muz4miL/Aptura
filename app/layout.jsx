import "./globals.css";
import Navbar from "@/components/header/Navbar";
import FooterMain from "@/components/footer/FooterMain";
import CursorDot from "@/components/CursorDot";
import ScrollToTop from "@/components/ScrollToTop";
import AuroraBackground from "@/components/AuroraBackground";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: {
    default: "Aptura Tech Solutions | Digital Innovation Partner",
    template: "%s | Aptura Tech Solutions",
  },
  description:
    "Aptura Tech Solutions is a technology-driven company providing innovative solutions in Web Development, AI, Graphics, and IT Consulting. We empower businesses through cutting-edge technology and expert services.",
  keywords: [
    "Aptura Tech Solutions",
    "software development",
    "web development",
    "AI solutions",
    "IT consulting",
    "UI/UX design",
    "app development",
    "cybersecurity",
    "IoT",
    "digital innovation",
    "Peshawar",
    "Pakistan",
  ],
  authors: [{ name: "Aptura Tech Solutions" }],
  creator: "Aptura Tech Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aptura.tech",
    siteName: "Aptura Tech Solutions",
    title: "Aptura Tech Solutions | Digital Innovation Partner",
    description:
      "Innovative solutions in Web Development, AI, and IT Consulting. We empower businesses through cutting-edge technology.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptura Tech Solutions",
    description: "Digital Innovation Partner | Software, AI & Web Solutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased bg-bg-deep text-text-main noise-overlay">
        <AuroraBackground />
        <div className="relative z-[2] flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1 font-body">{children}</main>
          <FooterMain />
          <CursorDot />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
