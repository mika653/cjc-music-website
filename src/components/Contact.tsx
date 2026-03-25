"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { FacebookIcon } from "./icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, connect to an API route or form handler
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display text-white">
            Ready to Level Up Your Sound?
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Send us a message or reach out directly. We respond within 24 hours
            on business days.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a
              href="tel:09224457975"
              className="flex items-start gap-4 p-5 bg-charcoal/30 border border-white/5 rounded-xl hover:border-gold/20 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                  Call or Text
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">0922-4457975</p>
              </div>
            </a>

            <a
              href="https://m.me/cjcmusicph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-charcoal/30 border border-white/5 rounded-xl hover:border-gold/20 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                  Messenger
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  Message us on Facebook
                </p>
              </div>
            </a>

            <a
              href="https://facebook.com/cjcmusicph"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-charcoal/30 border border-white/5 rounded-xl hover:border-gold/20 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <FacebookIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                  Facebook Page
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">@cjcmusicph</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 bg-charcoal/30 border border-white/5 rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Location</h3>
                <p className="text-sm text-gray-400 mt-0.5">Philippines</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-charcoal/30 border border-white/5 rounded-xl">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold/10 text-gold flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Business Hours
                </h3>
                <p className="text-sm text-gray-400 mt-0.5">
                  Mon–Sat: 9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-charcoal/30 border border-white/5 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gold/10 text-gold mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 max-w-sm">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-gold hover:text-gold-light font-medium transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-lg font-semibold text-white mb-1">
                  Send Us a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="09XX XXX XXXX"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    I&apos;m Interested In
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="audio">Professional Audio Systems</option>
                    <option value="instruments">Musical Instruments</option>
                    <option value="lighting">Event Lighting Systems</option>
                    <option value="studio">Studio Recording Gear</option>
                    <option value="ledwall">LED Wall & AV Equipment</option>
                    <option value="dj">DJ Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us what you're looking for, and we'll get back to you with the best options and pricing..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto sm:self-end inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
