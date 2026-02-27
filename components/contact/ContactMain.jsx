"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We review your goals and define the project scope together.",
  },
  {
    step: "02",
    title: "NDA & Proposal",
    description: "If needed, we sign an NDA. Then deliver a detailed proposal.",
  },
  {
    step: "03",
    title: "Kickoff",
    description: "Once aligned, our team begins engineering your solution.",
  },
];

const ContactMain = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_7syzf8p",
        "template_siau848",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "Noohsiddique514@gmail.com",
          reply_to: formData.email,
        },
        "Cpn322BDQ9EFLPqiq",
      );

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToMap = () => {
    document
      .getElementById("office-map")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-5 py-3.5 text-white text-[14px] font-body focus:outline-none focus:border-[#00f0ff]/30 focus:bg-white/[0.05] transition-all duration-300 placeholder-white/15";

  return (
    <div className="bg-[#050507] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div
          className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.5) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.03] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,102,255,0.5) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f0ff]/50" />
              <span className="text-[#00f0ff] font-mono text-xs tracking-[0.3em] uppercase">
                Contact
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00f0ff]/50" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-8">
              Let&apos;s start your
              <br />
              <span className="gradient-text">next project</span>
            </h1>

            <p className="text-[#94a3b8] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have an idea, a challenge, or a vision? Tell us about it. Our
              engineering team is ready to turn it into production-grade reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form Column (3/5) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-heading font-bold text-white mb-2">
                    Send a message
                  </h2>
                  <p className="text-[#94a3b8]/60 text-sm">
                    Fill in the details and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>

                {/* Status */}
                {status === "success" && (
                  <div className="mb-6 p-4 bg-[#00f0ff]/[0.06] border border-[#00f0ff]/15 text-[#00f0ff] rounded-xl text-sm font-medium">
                    Message sent successfully. We&apos;ll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="mb-6 p-4 bg-red-500/[0.06] border border-red-500/15 text-red-400 rounded-xl text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Project inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/50 text-xs font-mono tracking-wider uppercase mb-2.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#050507] font-heading font-bold text-[15px] py-4 rounded-xl glow-btn transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Column (2/5) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex flex-col gap-6">
                {/* What Happens Next */}
                <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-8">
                  <h3 className="text-lg font-heading font-bold text-white mb-6">
                    What happens next?
                  </h3>
                  <div className="flex flex-col gap-5">
                    {steps.map((s, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] border border-[#00f0ff]/10 flex-shrink-0">
                          <span className="text-[#00f0ff]/70 text-[11px] font-mono font-bold">
                            {s.step}
                          </span>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium mb-0.5">
                            {s.title}
                          </p>
                          <p className="text-[#94a3b8]/60 text-xs leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Details Card */}
                <div className="bg-[#0a0d14] border border-white/[0.06] rounded-2xl p-8 sticky top-28">
                  <h3 className="text-lg font-heading font-bold text-white mb-6">
                    Contact details
                  </h3>

                  <div className="flex flex-col gap-5">
                    {/* Offices */}
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] flex-shrink-0">
                        <FaBuilding className="text-[#00f0ff]/70 text-xs" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          Islamabad HQ
                        </p>
                        <button
                          onClick={scrollToMap}
                          className="text-[#94a3b8]/60 text-xs mt-0.5 leading-relaxed hover:text-[#00f0ff] transition-colors text-left"
                        >
                          Office 30, 2nd Floor, Aslam Business Square, E-11/2
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] flex-shrink-0">
                        <FaBuilding className="text-[#00f0ff]/70 text-xs" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          Peshawar Office
                        </p>
                        <p className="text-[#94a3b8]/60 text-xs mt-0.5 leading-relaxed">
                          3rd Floor, Uhad Tower, Phase 3 Chowk
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-white/[0.04]" />

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] flex-shrink-0">
                        <FaPhoneAlt className="text-[#00f0ff]/70 text-xs" />
                      </div>
                      <div className="text-[#94a3b8]/70 text-sm">
                        <span>0334-514-8335</span>
                        <span className="mx-2 text-white/10">|</span>
                        <span>0301-0505015</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] flex-shrink-0">
                        <FaEnvelope className="text-[#00f0ff]/70 text-xs" />
                      </div>
                      <p className="text-[#94a3b8]/70 text-sm">
                        Noohsiddique514@gmail.com
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#00f0ff]/[0.06] flex-shrink-0">
                        <FaClock className="text-[#00f0ff]/70 text-xs" />
                      </div>
                      <p className="text-[#94a3b8]/70 text-sm">
                        Mon — Fri, 10:00 AM — 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="office-map" className="pb-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.552391328333!2d73.03121527533824!3d33.68444037331807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfb2bfc1dafd%3A0x5a1b583b641e6f1e!2sE-11%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1698765432107!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aptura Head Office - Islamabad"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMain;
