"use client";

import React, { FC } from "react";
import {
  FaTruck,
  FaBox,
  FaSearch,
  FaMapMarkerAlt,
  FaWarehouse,
  FaDolly,
  FaFirstAid,
  FaVirus,
  FaGlobe,
} from "react-icons/fa";
import { FaVials, FaClipboardList } from "react-icons/fa6"; // newer Font Awesome 6 icons
import { GiDeliveryDrone } from "react-icons/gi";

interface SupplyItem {
  icon: React.ReactElement;
  label: string;
}

const MedicalSupplyChain: FC = () => {
  const items: SupplyItem[] = [
    { icon: <GiDeliveryDrone size={28} />, label: "Drone Delivery" },
    { icon: <FaFirstAid size={28} />, label: "First Aid" },
    { icon: <FaVirus size={28} />, label: "Virus Research" },
    { icon: <FaVirus size={28} />, label: "Virus Research" },
    { icon: <FaGlobe size={28} />, label: "Global Access" },
    { icon: <FaClipboardList size={28} />, label: "Inventory" },
    { icon: <FaBox size={28} />, label: "Packaging" },
    { icon: <FaWarehouse size={28} />, label: "Storage" },
    { icon: <FaTruck size={28} />, label: "Transport" },
    { icon: <FaDolly size={28} />, label: "Forklift" },
    { icon: <FaMapMarkerAlt size={28} />, label: "Tracking" },
    { icon: <FaSearch size={28} />, label: "Inspection" },
    { icon: <FaVials size={28} />, label: "Lab Testing" },
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-[#e6e8fa]">
      {/* Circle Layout */}
      <div className="absolute w-[500px] h-[500px] rounded-full flex items-center justify-center">
        {items.map((item, index) => {
          const angle = (index / items.length) * 2 * Math.PI;
          const x = Math.cos(angle) * 200;
          const y = Math.sin(angle) * 200;

          return (
            <div
              key={index}
              className="absolute flex flex-col items-center text-center"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Center Text */}
      <div className="absolute text-center">
        <h2 className="text-lg font-bold text-gray-800">Medical</h2>
        <h2 className="text-lg font-bold text-gray-800">Supply</h2>
        <h2 className="text-lg font-bold text-gray-800">Chain</h2>
      </div>
    </div>
  );
};

export default MedicalSupplyChain;
