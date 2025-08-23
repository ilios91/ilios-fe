"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Store, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Create Request",
    description:
      "Easily submit your procurement request by selecting the items you need from verified categories.",
  },
  {
    id: 2,
    icon: Store,
    title: "Get Supplier Quotes",
    description:
      "Receive competitive offers from trusted suppliers and compare them side by side.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Receive Delivery",
    description:
      "Choose the best supplier, confirm your order, and get fast, reliable delivery to your facility.",
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animate progress line fill
  const lineScaleX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="how-it-works"
      className="relative w-full bg-white py-20 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Simplify your procurement in three easy steps. From request to
          delivery, ILIOS makes it seamless.
        </p>
      </div>

      {/* Steps wrapper */}
      <div className="relative max-w-6xl mx-auto">
        {/* Horizontal connector for desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0">
          <motion.div
            className="h-1 bg-blue-600 origin-left"
            style={{ width: lineScaleX }}
          />
        </div>

        {/* Vertical connector for mobile */}
        <div className="md:hidden absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 z-0">
          <motion.div
            className="w-1 bg-blue-600 origin-top"
            style={{ height: lineScaleY }}
          />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-2xl shadow-md hover:shadow-lg p-8 text-center flex flex-col items-center"
            >
              {/* Step circle with number + icon */}
              <div className="w-20 h-20 flex flex-col items-center justify-center rounded-full bg-blue-600 text-white mb-6 relative z-10 shadow-md">
                <span className="text-sm font-bold absolute top-1 left-1 bg-white text-blue-600 w-6 h-6 rounded-full flex items-center justify-center shadow">
                  {step.id}
                </span>
                <step.icon className="w-8 h-8" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
