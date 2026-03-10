import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(0,168,45,0.12)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-[#00A82D] uppercase tracking-wider mb-4 text-[16px]"
              style={{ fontWeight: 500 }}
            >
              Contact
            </p>
            <h1
              className="text-[40px] md:text-[56px] tracking-[-0.04em] text-white leading-[1.1] mb-5"
              style={{ fontWeight: 600 }}
            >
              Let's start a
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A82D] to-[#14CC60]">
                conversation
              </span>
            </h1>
            <p className="text-[#8a8f98] max-w-xl mx-auto leading-relaxed text-[16px]">
              Have a project in mind? We'd love to hear about it. Reach out and let's discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2
                className="text-[22px] text-white mb-2 tracking-[-0.01em]"
                style={{ fontWeight: 600 }}
              >
                Get in touch
              </h2>
              <p className="text-[#6b6f76] mb-10 leading-relaxed text-[16px]">
                Our team typically responds within 24 hours. We're here to help you build something great.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    primary: "root@troismousquetaire.tech",
                    secondary: "support@troismousquetaire.tech",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    primary: "+1 (555) 123-4567",
                    secondary: "+1 (555) 987-6543",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    primary: "123 Tech Avenue",
                    secondary: "Innovation City, IC 94043",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[#00A82D]/10 group-hover:bg-[#00A82D]/20 transition-colors"
                    >
                      <item.icon size={18} className="text-[#00A82D]" />
                    </div>
                    <div>
                      <p
                        className="text-[#6b6f76] mb-1 text-[16px]"
                        style={{ fontWeight: 500 }}
                      >
                        {item.label}
                      </p>
                      <p className="text-[14px] text-white">{item.primary}</p>
                      <p className="text-[14px] text-[#8a8f98]">{item.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 h-48 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A82D]/5 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-[#6b6f76] text-[16px]" style={{ fontWeight: 500 }}>
                    <MapPin size={16} className="text-[#00A82D]" />
                    Innovation City, IC 94043
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                <h2
                  className="text-[20px] text-white mb-1 tracking-[-0.01em]"
                  style={{ fontWeight: 600 }}
                >
                  Send us a message
                </h2>
                <p className="text-[#6b6f76] mb-8 text-[16px]">
                  Fill out the form and we'll get back to you shortly.
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-[#8a8f98] mb-2 uppercase tracking-wider text-[14px]"
                        style={{ fontWeight: 500 }}
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white placeholder-[#3a3a4a] focus:border-[#00A82D]/50 focus:ring-1 focus:ring-[#00A82D]/30 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-[#8a8f98] mb-2 uppercase tracking-wider text-[14px]"
                        style={{ fontWeight: 500 }}
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white placeholder-[#3a3a4a] focus:border-[#00A82D]/50 focus:ring-1 focus:ring-[#00A82D]/30 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#8a8f98] mb-2 uppercase tracking-wider text-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white placeholder-[#3a3a4a] focus:border-[#00A82D]/50 focus:ring-1 focus:ring-[#00A82D]/30 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[#8a8f98] mb-2 uppercase tracking-wider text-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      What can we help with?
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white focus:border-[#00A82D]/50 focus:ring-1 focus:ring-[#00A82D]/30 outline-none transition-all appearance-none"
                    >
                      <option value="" className="bg-[#111015]">
                        Select a topic
                      </option>
                      <option value="web-dev" className="bg-[#111015]">
                        Web Development
                      </option>
                      <option value="mobile-app" className="bg-[#111015]">
                        Mobile App
                      </option>
                      <option value="cloud" className="bg-[#111015]">
                        Cloud Solutions
                      </option>
                      <option value="consulting" className="bg-[#111015]">
                        IT Consulting
                      </option>
                      <option value="other" className="bg-[#111015]">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#8a8f98] mb-2 uppercase tracking-wider text-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white placeholder-[#3a3a4a] focus:border-[#00A82D]/50 focus:ring-1 focus:ring-[#00A82D]/30 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#00A82D] text-white text-[15px] rounded-lg hover:bg-[#00C234] transition-all"
                    style={{ fontWeight: 500 }}
                  >
                    Send message
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}