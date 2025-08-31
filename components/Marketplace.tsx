"use client";

import Link from "next/link";
import { Store, ShieldCheck, Users, PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

// Fade-in variant
const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {
    icon: <PackageSearch className="h-8 w-8 text-blue-600" />,
    title: "For Buyers",
    desc: "Access a wide range of vetted medical supplies from trusted suppliers. Compare, order, and restock seamlessly.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "For Suppliers",
    desc: "Showcase your products to healthcare facilities across regions while ensuring regulatory compliance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
    title: "Trusted & Compliant",
    desc: "Every transaction is secure, transparent, and backed by strict healthcare regulations.",
  },
];

export function Marketplace() {
  return (
    <section 
    id="marketplace"
    className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="flex justify-center mb-6">
            <div className="rounded-full p-4 bg-blue-600">
              <Store className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            The Ilios Marketplace
          </h2>

          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our marketplace is the meeting point between healthcare facilities
            and verified suppliers. Whether you’re a buyer sourcing critical
            medical products or a supplier looking to expand your reach, Ilios
            ensures a safe, efficient, and compliant ecosystem.
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl shadow-md bg-white border hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Link href="/market" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Explore Marketplace
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
