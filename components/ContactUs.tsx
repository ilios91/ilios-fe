"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Hook this up to backend or email service
  };

  const formFields = [
    { id: "name", type: "text", label: "Full Name" },
    { id: "email", type: "email", label: "Email Address" },
    { id: "subject", type: "text", label: "Subject" },
  ];

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Contact Us
        </motion.h2>
        <p className="text-gray-600 mt-3 text-lg">
          Have questions or need help? Our team is ready to assist you.
        </p>
      </div>

      {/* Grid: Form + Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 md:p-10 space-y-6 border border-gray-100"
        >
          {formFields.map((field) => (
            <div key={field.id} className="relative">
              <input
                type={field.type}
                name={field.id}
                value={formData[field.id as keyof typeof formData]}
                onChange={handleChange}
                required
                className="peer w-full rounded-xl border border-gray-300 bg-transparent px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder={field.label}
              />
              <label
                htmlFor={field.id}
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
              >
                {field.label}
              </label>
            </div>
          ))}

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="peer w-full rounded-xl border border-gray-300 bg-transparent px-4 pt-5 pb-2 text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Your Message
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Send Message
          </Button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {[
            {
              icon: <Phone size={24} />,
              title: "Call Us",
              text: "+234 (0) 800 123 4567",
            },
            {
              icon: <Mail size={24} />,
              title: "Email Us",
              text: "support@ilios.com",
            },
            {
              icon: <MapPin size={24} />,
              title: "Visit Us",
              text: "Victoria Island, Lagos, Nigeria",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Google Map */}
      <div className="max-w-6xl mx-auto mt-16 rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.396406890252!2d3.421481875929223!3d6.428055624077048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cb9ef6a7b5%3A0x31b6c6d7f5c7f5cf!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000"
          width="100%"
          height="350"
          loading="lazy"
          className="border-0 w-full"
        ></iframe>
      </div>
    </section>
  );
}
