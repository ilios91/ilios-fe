"use client";

import { motion } from "framer-motion";
import {
  Users2,
  ShoppingCart,
  Building2,
  Landmark,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type RoleSectionProps = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const RoleSection = ({ icon: Icon, title, desc }: RoleSectionProps) => (
  <motion.div variants={fadeIn} className="flex gap-4 items-start">
    <div className="shrink-0 rounded-xl p-3 shadow-sm border bg-blue-600">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <h4 className="font-semibold text-lg text-gray-800">{title}</h4>
      <p className="text-muted-foreground text-sm mt-1">{desc}</p>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-gradient-to-b from-white to-muted/30 py-16"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" variants={fadeIn}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            About Us
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg max-w-2xl mx-auto">
            <strong className="text-blue-600">Ilios</strong> connects{" "}
            <span className="font-semibold text-foreground text-gray-900">
              Buyers
            </span>{" "}
            and{" "}
            <span className="font-semibold text-foreground">Suppliers</span> in
            a trusted healthcare marketplace—ensuring access to essential
            products while maintaining compliance and transparency.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <RoleSection
            icon={Building2}
            title="For Buyers (Healthcare Facilities)"
            desc="Buyers can quickly discover and purchase medical supplies with guest checkout or full access after verification. Restricted products require a valid prescription or account creation to ensure compliance with healthcare regulations."
          />

          <RoleSection
            icon={Landmark}
            title="For Suppliers (Healthcare Businesses)"
            desc="Suppliers can create accounts, list products, and reach verified buyers directly. Our onboarding and verification process ensures only trusted businesses can sell, protecting both facilities and individuals."
          />
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <RoleSection
            icon={ShoppingCart}
            title="Guest Shopping"
            desc="Individuals can shop eligible items without registering, experiencing fast, secure checkout. For restricted items, we guide them to upload prescriptions or create accounts."
          />

          <RoleSection
            icon={Users2}
            title="Role-Based Experience"
            desc="Once logged in, buyers and suppliers are redirected to their dedicated dashboards, where they access full inventory or supplier tools tailored to their role."
          />
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <p>
              We exist to simplify healthcare procurement while keeping
              compliance and trust at the core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
