import ContactMain from "@/components/contact/ContactMain";

export const metadata = {
  title: "Contact Us — Get a Free Project Consultation",
  description:
    "Ready to build something extraordinary? Contact Aptura Tech Solutions for a free consultation. Reach us in Peshawar & Islamabad, Pakistan or chat on WhatsApp.",
  keywords: ["contact Aptura", "hire software developers Pakistan", "free consultation", "Peshawar developer"],
  alternates: {
    canonical: "https://aptura.tech/contact",
  },
  openGraph: {
    title: "Contact Aptura Tech Solutions",
    description: "Let's discuss your project. Get a free consultation today.",
    url: "https://aptura.tech/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Contact() {
  return (
    <div>
      <ContactMain />
    </div>
  );
}
