"use client";

import Image from "next/image";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface FoodItem {
    id: string;
    name: string;
    brand: string;
    petType: "dog" | "cat" | "bird";
    price: number;
    image: string;
    weight: string;
}

export default function FoodCard({ item }: { item: FoodItem }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-white rounded-3xl p-5 border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full relative cursor-pointer">

            {/* Product Image */}
            <div className="relative h-56 w-full mb-5 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-4">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute top-3 left-3 bg-secondary/10 text-secondary font-bold text-xs px-2.5 py-1 rounded-md capitalize">
                    {item.petType}
                </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-1 px-1">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{item.brand}</p>
                <h3 className="font-outfit font-bold text-text-main text-xl mb-1 leading-tight group-hover:text-primary transition-colors flex-1 line-clamp-2">
                    {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.weight}</p>

                {/* Pricing & CTA */}
                <div className="mt-auto flex items-center justify-between gap-4">
                    <span className="font-black text-2xl text-slate-800 tracking-tight">
                        ${item.price.toFixed(2)}
                    </span>

                    <button
                        onClick={handleAddToCart}
                        disabled={added}
                        className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${added
                                ? "bg-green-500 text-white shadow-[0_4px_15px_rgba(34,197,94,0.4)]"
                                : "bg-primary text-white shadow-[0_4px_15px_rgba(244,63,94,0.3)] hover:scale-110 hover:bg-primary-dark"
                            }`}
                        aria-label="Add to cart"
                    >
                        {added ? <CheckCircle2 size={22} className="animate-in zoom-in" /> : <ShoppingCart size={22} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
