"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate overall total
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-6 md:px-12"
    style={{ fontFamily: "var(--font-SFPro)" }}
    >
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-lg">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* LEFT: Cart Items */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-xl p-4 hover:shadow-md transition"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.supplier}</p>
                      <p className="text-blue-600 font-bold">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Subtotal:{" "}
                        <span className="font-semibold text-gray-800">
                          ₦
                          {(item.price * (item.quantity || 1)).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Actions */}
                  <div className="flex items-center gap-3">
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) - 1)
                      }
                      disabled={(item.quantity || 1) <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold text-gray-900 w-6 text-center">
                      {item.quantity || 1}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="rounded-full"
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity || 1) + 1)
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      className="rounded-full"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Summary */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow-lg flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-gray-900">Summary</h2>
              <div className="flex justify-between text-lg font-medium">
                <span>Subtotal</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <span>Shipping</span>
                <span className="text-gray-500">Free</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-blue-600">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>
              <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 h-12 text-lg">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
