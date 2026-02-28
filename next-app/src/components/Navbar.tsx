"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, ChevronDown, Activity, Scissors, Bone, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";

const categories = [
    {
        name: "Dog",
        links: [
            { name: "Dog Food", href: "/food?pet=dog", icon: <Bone size={18} /> },
            { name: "Dog Grooming", href: "/shop?category=grooming&pet=dog", icon: <Scissors size={18} /> },
            { name: "Dog Accessories", href: "/shop?category=accessories&pet=dog", icon: <Activity size={18} /> },
        ],
    },
    {
        name: "Cat",
        links: [
            { name: "Cat Food", href: "/food?pet=cat", icon: <Bone size={18} /> },
            { name: "Cat Grooming", href: "/shop?category=grooming&pet=cat", icon: <Scissors size={18} /> },
            { name: "Cat Accessories", href: "/shop?category=accessories&pet=cat", icon: <Activity size={18} /> },
        ],
    },
    {
        name: "Bird",
        links: [
            { name: "Bird Food", href: "/food?pet=bird", icon: <Bone size={18} /> },
            { name: "Bird Cages", href: "/shop?category=cages&pet=bird", icon: <Activity size={18} /> },
            { name: "Bird Accessories", href: "/shop?category=accessories&pet=bird", icon: <Scissors size={18} /> },
        ],
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const { itemCount } = useCart();
    const { user } = useAuth();
    const pathname = usePathname();

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3" : "bg-white py-5 border-b border-gray-100"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                                P
                            </div>
                            <span className="font-outfit font-black text-2xl tracking-tight text-slate-800">
                                Peddy
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            <Link
                                href="/"
                                className={`px-4 py-2 font-bold rounded-lg transition-colors ${pathname === "/" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-gray-50"}`}
                            >
                                Home
                            </Link>

                            {categories.map((category) => (
                                <div key={category.name} className="relative group/nav px-2 py-2">
                                    <button className="flex items-center gap-1 font-bold text-slate-600 hover:text-primary transition-colors">
                                        {category.name}
                                        <ChevronDown size={16} className="transition-transform group-hover/nav:-rotate-180" />
                                    </button>

                                    {/* Desktop Mega Menu Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 z-50">
                                        <div className="bg-white rounded-2xl p-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 w-[240px]">
                                            <div className="flex flex-col gap-1">
                                                {category.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-medium ${pathname.includes(link.href.split('?')[0])
                                                            ? "bg-primary/5 text-primary"
                                                            : "text-slate-600 hover:bg-gray-50 hover:text-primary"
                                                            }`}
                                                    >
                                                        <span className="text-gray-400 group-hover:text-primary">{link.icon}</span>
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <Link
                                href="/shop"
                                className={`px-4 py-2 font-bold rounded-lg transition-colors ${pathname === "/shop" ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary hover:bg-gray-50"}`}
                            >
                                All Shops
                            </Link>
                        </nav>

                        {/* Icons (Desktop & Mobile) */}
                        <div className="flex items-center gap-2 sm:gap-4">

                            {/* Auth Status */}
                            {user ? (
                                <Link href="/dashboard" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/30 transition-all group">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                        {user.name.charAt(0)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">
                                        {user.name.split(' ')[0]}
                                    </span>
                                </Link>
                            ) : (
                                <Link href="/login" className="hidden sm:flex items-center gap-2 px-4 py-2 font-bold text-primary bg-primary/5 hover:bg-primary hover:text-white rounded-xl transition-all">
                                    <User size={18} /> Sign In
                                </Link>
                            )}

                            {/* Cart Icon */}
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-slate-600 hover:text-primary transition-colors group"
                            >
                                <ShoppingCart size={24} className="group-hover:scale-110 transition-transform" />
                                <AnimatePresence>
                                    {itemCount > 0 && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                                        >
                                            {itemCount}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>

                            {/* Hamburger Toggle (Mobile Only) */}
                            <button
                                className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors bg-gray-50 rounded-lg"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Slide-in Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[85vw] max-w-[400px] bg-white z-50 flex flex-col shadow-2xl lg:hidden border-l border-gray-100 overflow-y-auto"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                                <span className="font-outfit font-black text-xl text-slate-800">
                                    Peddy Menu
                                </span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-gray-100 rounded-full text-slate-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-4 flex flex-col gap-2">
                                <Link
                                    href="/"
                                    className={`px-4 py-4 rounded-xl font-bold transition-colors ${pathname === "/" ? "bg-primary/10 text-primary" : "text-slate-700 bg-gray-50"
                                        }`}
                                >
                                    Home
                                </Link>

                                {categories.map((category) => (
                                    <div key={category.name} className="flex flex-col bg-gray-50 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === category.name ? null : category.name)}
                                            className="flex items-center justify-between px-4 py-4 font-bold text-slate-700 w-full text-left"
                                        >
                                            {category.name}
                                            <motion.div
                                                animate={{ rotate: activeAccordion === category.name ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown size={20} className="text-gray-400" />
                                            </motion.div>
                                        </button>

                                        <AnimatePresence>
                                            {activeAccordion === category.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-white/50 border-t border-gray-100 border-dashed"
                                                >
                                                    <div className="p-2 flex flex-col gap-1">
                                                        {category.links.map((link) => (
                                                            <Link
                                                                key={link.name}
                                                                href={link.href}
                                                                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 hover:bg-gray-100 hover:text-primary font-medium"
                                                            >
                                                                {link.icon}
                                                                {link.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}

                                <Link
                                    href="/shop"
                                    className={`px-4 py-4 rounded-xl font-bold transition-colors ${pathname === "/shop" ? "bg-primary/10 text-primary" : "text-slate-700 bg-gray-50"
                                        }`}
                                >
                                    All Shops
                                </Link>

                                <Link
                                    href="/food"
                                    className={`px-4 py-4 rounded-xl font-bold transition-colors ${pathname === "/food" ? "bg-primary/10 text-primary" : "text-slate-700 bg-gray-50"
                                        }`}
                                >
                                    All Pet Foods
                                </Link>

                            </div>

                            <div className="mt-auto p-6 border-t border-gray-100 bg-gray-50">
                                <button
                                    onClick={() => setIsCartOpen(true)}
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-md transition-transform hover:-translate-y-1"
                                >
                                    View Shopping Cart ({itemCount})
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
