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
  <motion.div
    variants={fadeIn}
    className="flex items-center sm:items-start gap-4"
  >
    <div className="flex-shrink-0 rounded-xl p-3 shadow-sm border bg-blue-600 flex items-center justify-center">
      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-gray-800">
        {title}
      </h4>
      <p className="text-gray-600 text-[13px] md:text-[15px] lg:text-[16px] mt-1 leading-relaxed">
        {desc}
      </p>
    </div>
  </motion.div>
);

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="show" variants={fadeIn}>
          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold text-center text-gray-900">
            About Us
          </h2>
          <p className="mt-4 text-center text-gray-600 text-[14px] md:text-[16px] lg:text-[18px] max-w-2xl mx-auto leading-relaxed">
            <strong className="text-blue-600">Ilios</strong> connects{" "}
            <span className="font-semibold text-gray-900">Buyers</span> and{" "}
            <span className="font-semibold">Suppliers</span> in a trusted
            healthcare marketplace—ensuring access to essential products while
            maintaining compliance and transparency.
          </p>
        </motion.div>

        {/* Role Sections */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
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

        <div className="mt-12 grid sm:grid-cols-2 gap-8 lg:gap-12">
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

        {/* Footer Note */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 className="h-5 w-5 text-blue-600" />
            <p className="text-center max-w-md">
              We exist to simplify healthcare procurement while keeping
              compliance and trust at the core.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
