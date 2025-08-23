"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  supplier: string;
  price: string;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Surgical Masks (50pcs)",
    supplier: "MedSupply Co.",
    price: "₦25,000",
    image: "/mask.png",
    category: "PPE",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    supplier: "HealthEquip",
    price: "₦15,500",
    image: "/thermo.jpg",
    category: "Equipment",
  },
  {
    id: 3,
    name: "Gloves (100pcs)",
    supplier: "SafeHands Ltd.",
    price: "₦30,000",
    image: "/gloves.png",
    category: "PPE",
  },
  {
    id: 4,
    name: "Stethoscope",
    supplier: "Meditech",
    price: "₦45,000",
    image: "/steth.png",
    category: "Equipment",
  },
  {
    id: 5,
    name: "IV Drip Set",
    supplier: "CarePlus",
    price: "₦20,000",
    image: "/ivset.png",
    category: "Consumables",
  },
];

const categories = ["All", "PPE", "Equipment", "Consumables"];

export default function Marketplace() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.supplier.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section
      id="marketplace"
      className="relative w-full min-h-screen bg-gray-50 py-16 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Marketplace
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Browse and connect with verified suppliers for your healthcare needs.
        </p>
      </div>

      {/* Search + Category Pills */}
      <div className="max-w-5xl mx-auto flex flex-col gap-4 mb-12">
        {/* Search Bar */}
        <div className="flex items-center w-full bg-white shadow-md rounded-full px-4 py-2">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products or suppliers..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 focus:outline-none rounded-full"
          />
        </div>

        {/* Scrollable Category Pills */}
        <div className="flex overflow-x-auto gap-3 scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters Button */}
        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-full w-fit self-end"
        >
          <Filter className="w-4 h-4" />
          More Filters
        </Button>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.supplier}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">
                  {product.price}
                </p>
                <Button className="w-full mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                  Request Quote
                </Button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
