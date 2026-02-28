"use client";

import { useCart } from "../context/CartContext";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { cart, removeFromCart, updateQuantity, cartTotal, itemCount } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Dark Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Slide-out Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[90vw] max-w-[450px] bg-white z-[70] flex flex-col shadow-2xl border-l border-gray-100"
                    >
                        {/* Header */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-100 bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-primary" size={24} />
                                <h2 className="font-outfit font-black text-2xl text-slate-800 tracking-tight">
                                    Your Cart <span className="text-primary">({itemCount})</span>
                                </h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full text-slate-600 transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
                                    <ShoppingBag size={64} className="text-gray-200" />
                                    <p className="text-lg font-medium text-slate-600">Your cart is completely empty.</p>
                                    <button onClick={onClose} className="text-primary font-bold hover:underline">
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-2xl shadow-sm relative group">
                                        {/* Delete Button */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="absolute -top-2 -right-2 bg-white border border-rose-100 text-rose-500 hover:text-white hover:bg-rose-500 w-8 h-8 rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 size={14} />
                                        </button>

                                        {/* Item Image */}
                                        <div className="w-20 h-20 bg-gray-50 rounded-xl relative overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image || "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-bold text-slate-800 line-clamp-2 text-sm leading-tight mb-1">{item.name}</h4>
                                                <p className="text-primary font-black">${item.price.toFixed(2)}</p>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-2">
                                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-200 hover:text-slate-800 transition-colors"
                                                    >-</button>
                                                    <span className="px-3 py-1 font-bold text-sm bg-white border-x border-gray-200">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2.5 py-1 text-gray-500 hover:bg-gray-200 hover:text-slate-800 transition-colors"
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {cart.length > 0 && (
                            <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
                                <div className="space-y-2 mb-4">
                                    <div className="flex justify-between text-gray-500 text-sm font-medium">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500 text-sm font-medium">
                                        <span>Taxes & Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between text-slate-800 font-black text-xl pt-4 border-t border-gray-200">
                                        <span>Total</span>
                                        <span className="text-primary">${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={onClose} className="w-full bg-white border border-gray-200 hover:border-gray-300 text-slate-700 font-bold py-4 rounded-xl transition-all shadow-sm">
                                        Keep Shopping
                                    </button>
                                    <button onClick={() => { alert(`Purchase Successful! Total: $${cartTotal.toFixed(2)}`); onClose(); }} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-[0_8px_30px_rgb(244,63,94,0.3)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                                        Checkout <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
