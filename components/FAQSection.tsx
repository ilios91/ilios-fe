"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Ilios?",
    answer:
      "Ilios is a digital healthcare marketplace that connects suppliers with healthcare providers. Our platform makes procurement faster, easier, and more transparent.",
  },
  {
    question: "How do I sign up as a supplier?",
    answer:
      "Click on the 'Sign Up' button, choose the supplier role, and fill out the registration form. Once verified, you can start listing your products immediately.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes, our dedicated support team is available via phone, email, and live chat to help you with onboarding, orders, and technical issues.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We prioritize data privacy and security, implementing industry-standard encryption and compliance best practices.",
  },
];

const testimonials = [
  {
    name: "Dr. Ada Okeke",
    role: "Hospital Administrator",
    feedback:
      "Ilios has transformed how we purchase medical supplies. The process is seamless and transparent.",
  },
  {
    name: "Chinedu Eze",
    role: "Pharmacy Owner",
    feedback:
      "The platform connects us to reliable suppliers at competitive prices. Highly recommended!",
  },
  {
    name: "Fatima Sule",
    role: "Clinic Manager",
    feedback:
      "Customer support is excellent — they guided us step by step during onboarding.",
  },
  {
    name: "James Ojo",
    role: "Medical Supplier",
    feedback:
      "Ilios has expanded my reach to more healthcare providers than ever before.",
  },
  {
    name: "Ngozi Balogun",
    role: "Procurement Officer",
    feedback:
      "We now save both time and costs in procurement. Ilios is a game changer!",
  },
  {
    name: "Dr. Yusuf Ibrahim",
    role: "Surgeon",
    feedback:
      "Trustworthy and efficient platform — exactly what healthcare needs today.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-gray-50 py-20 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* Testimonials - Continuous Roll */}
      <div className="max-w-7xl mx-auto mt-20 overflow-hidden mb-24">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">
          What Our Users Say
        </h3>
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-sm bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  “{t.feedback}”
                </p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-gray-600 mt-3 text-lg">
          Find quick answers to common questions about Ilios.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
            >
              <span className="font-semibold text-gray-900 text-lg">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-5 pb-5 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
