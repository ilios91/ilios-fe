"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, useCart } from "@/context/CartContext";

const baseProducts: Product[] = [
  {
    id: 1,
    name: "Surgical Masks (50pcs)",
    supplier: "MedSupply Co.",
    price: 25000,
    image: "/mask.png",
    category: "PPE",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    supplier: "HealthEquip",
    price: 15500,
    image: "/thermo.jpg",
    category: "Equipment",
  },
  {
    id: 3,
    name: "Gloves (100pcs)",
    supplier: "SafeHands Ltd.",
    price: 30000,
    image: "/gloves.png",
    category: "PPE",
  },
  {
    id: 4,
    name: "Stethoscope",
    supplier: "Meditech",
    price: 45000,
    image: "/steth.png",
    category: "Equipment",
  },
  {
    id: 5,
    name: "IV Drip Set",
    supplier: "CarePlus",
    price: 20000,
    image: "/ivset.png",
    category: "Consumables",
  },
];

const mockProducts: Product[] = [
  ...baseProducts,
  ...baseProducts.map((p) => ({
    ...p,
    id: p.id + baseProducts.length,
    name: `${p.name} (Alt)`,
    supplier: `${p.supplier} Intl.`,
  })),
];

const categories = ["All", "PPE", "Equipment", "Consumables"];

export default function Page() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = mockProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.supplier.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <section
      className="relative w-full min-h-screen bg-gray-50 py-16 px-6 md:px-12"
      style={{ fontFamily: "var(--font-sfpro)" }}
    >
      {/* 🔔 Advert Banner */}
       <div className="overflow-hidden bg-blue-600 text-white py-6 mb-8">
         <motion.div
           className="flex whitespace-nowrap text-3xl md:text-3xl font-extrabold tracking-wide"
           animate={{ x: ["100%", "-100%"] }}
           transition={{
             repeat: Infinity,
             duration: 40, // ⏳ slower speed (was 12)
             ease: "linear",
           }}
         >
           <span className="px-16">🚀 WATCH OUT FOR OUR LATEST ADVERTS 🚀</span>
           <span className="px-16">🚀 WATCH OUT FOR OUR LATEST ADVERTS 🚀</span>
           <span className="px-16">🚀 WATCH OUT FOR OUR LATEST ADVERTS 🚀</span>
           <span className="px-16">🚀 WATCH OUT FOR OUR LATEST ADVERTS 🚀</span>
         </motion.div>
       </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div className="text-center w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Marketplace
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Browse and connect with verified suppliers for your healthcare needs.
          </p>
        </div>
      </div>

      {/* Search + Categories */}
      <div className="max-w-5xl mx-auto flex flex-col gap-4 mb-12">
        <div className="flex items-center w-full bg-white shadow-md rounded-full px-4 py-2">
          <Search className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products or suppliers..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-3 py-2 text-gray-700 focus:outline-none rounded-full"
          />
        </div>

        <div className="flex overflow-x-auto gap-3 scrollbar-hide pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
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

        <Button
          variant="outline"
          className="flex items-center gap-2 rounded-full w-fit self-end"
        >
          <Filter className="w-4 h-4" />
          More Filters
        </Button>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-48">
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
                  ₦{product.price.toLocaleString()}
                </p>
                <Button
                  onClick={() => addToCart(product)}
                  className="w-full mt-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </section>
  );
}
