"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Calendar, Bell, User, Store } from "lucide-react";

export default function IliosDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-white text-gray-900 font-sfpro">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 bg-blue-50 border-r border-blue-200 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <Menu
            className="cursor-pointer w-6 h-6 text-blue-600"
            onClick={toggleSidebar}
          />
        </div>

        <nav className="flex-1 flex flex-col mt-6 gap-4">
          <NavItem icon={<Calendar />} label="Calendar" open={isSidebarOpen} />
          <NavItem icon={<Store />} label="Marketplace" open={isSidebarOpen} />
          <NavItem icon={<Bell />} label="Orders" open={isSidebarOpen} />
          <NavItem icon={<User />} label="Profile" open={isSidebarOpen} />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-600"
        >
          Welcome Back, User
        </motion.h1>

        {/* Dashboard Panels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Panel title="Upcoming Events" gradient="from-blue-100 to-blue-200">
            <p>You have 3 upcoming events.</p>
          </Panel>

          <Panel title="Markeplace" gradient="from-blue-100 to-blue-200">
            <p>Best Sellers.</p>
          </Panel>

          <Panel title="Alerts" gradient="from-blue-100 to-blue-200">
            <p>2 new alerts pending.</p>
          </Panel>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, open }: any) {
  return (
    <div
      className="flex items-center gap-3 p-3 hover:bg-blue-100 cursor-pointer rounded-lg transition-all"
      title={label}
    >
      {icon}
      {open && <span className="text-blue-600">{label}</span>}
    </div>
  );
}

function Panel({ title, gradient, children }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-blue-200 shadow-md`}
    >
      <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </motion.div>
  );
}
