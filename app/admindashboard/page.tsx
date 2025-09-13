"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Users, Store, BarChart2, Settings, Bell } from "lucide-react";

export default function AdminDashboard() {
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
          {isSidebarOpen && (
            <span className="text-xl font-bold text-blue-600">Admin</span>
          )}
        </div>

        <nav className="flex-1 flex flex-col mt-6 gap-4">
          <NavItem icon={<BarChart2 />} label="Dashboard" open={isSidebarOpen} />
          <NavItem icon={<Users />} label="Users" open={isSidebarOpen} />
          <NavItem icon={<Store />} label="Marketplace" open={isSidebarOpen} />
          <NavItem icon={<Bell />} label="Orders" open={isSidebarOpen} />
          <NavItem icon={<Settings />} label="Settings" open={isSidebarOpen} />
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
          Admin Dashboard
        </motion.h1>

        {/* Admin Panels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Panel title="Total Users" gradient="from-blue-100 to-blue-200">
            <p className="text-gray-700 font-semibold">1,245 Users</p>
          </Panel>

          <Panel title="Marketplace Items" gradient="from-blue-100 to-blue-200">
            <p className="text-gray-700 font-semibold">320 Products</p>
          </Panel>

          <Panel title="Pending Orders" gradient="from-blue-100 to-blue-200">
            <p className="text-gray-700 font-semibold">18 Orders</p>
          </Panel>

          <Panel title="Revenue Today" gradient="from-blue-100 to-blue-200">
            <p className="text-gray-700 font-semibold">₦1,250,000</p>
          </Panel>

          <Panel title="Alerts" gradient="from-blue-100 to-blue-200">
            <p className="text-gray-700 font-semibold">2 new notifications</p>
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
      <div>{children}</div>
    </motion.div>
  );
}
