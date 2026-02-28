import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                {/* Responsive Grid: Mobile stacked (1), Tablet (2), Desktop (4) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & Newsletter */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-outfit font-black text-3xl tracking-tight text-slate-800">
                                Peddy
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your one-stop premium destination for the best pet food, accessories, and grooming services. Spoil your furry friend today.
                        </p>
                        <div className="space-y-3">
                            <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Subscribe to Newsletter</h4>
                            <form className="relative flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                                <button type="submit" className="absolute right-2 p-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors">
                                    <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-6 font-outfit">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-gray-500 hover:text-primary transition-colors font-medium">Home</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors font-medium">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors font-medium">Contact Us</Link></li>
                            <li><Link href="/login" className="text-gray-500 hover:text-primary transition-colors font-medium">My Account</Link></li>
                            <li><Link href="/dashboard" className="text-gray-500 hover:text-primary transition-colors font-medium">Order History</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Shop Links */}
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-6 font-outfit">Shop Categories</h4>
                        <ul className="space-y-4">
                            <li><Link href="/food?pet=dog" className="text-gray-500 hover:text-primary transition-colors font-medium">Dog Food & Toys</Link></li>
                            <li><Link href="/food?pet=cat" className="text-gray-500 hover:text-primary transition-colors font-medium">Cat Accessories</Link></li>
                            <li><Link href="/food?pet=bird" className="text-gray-500 hover:text-primary transition-colors font-medium">Bird Supplies</Link></li>
                            <li><Link href="/shop?category=grooming" className="text-gray-500 hover:text-primary transition-colors font-medium">Grooming Services</Link></li>
                            <li><Link href="/shop" className="text-gray-500 hover:text-primary transition-colors font-medium">Local Partner Shops</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info & Socials */}
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-6 font-outfit">Contact Info</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-gray-500 text-sm">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span>123 Pet Avenue<br />New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>1-800-PEDDY-PET</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-sm">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>support@peddy.com</span>
                            </li>
                        </ul>

                        <h4 className="font-bold text-slate-800 text-sm mb-4 uppercase tracking-wide">Follow Us</h4>
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-10 h-10 bg-gray-50 text-slate-600 hover:bg-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-50 text-slate-600 hover:bg-sky-500 hover:text-white rounded-full flex items-center justify-center transition-all"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-50 text-slate-600 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center transition-all"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-gray-50 text-slate-600 hover:bg-red-600 hover:text-white rounded-full flex items-center justify-center transition-all"><Youtube size={18} /></a>
                        </div>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 font-medium">
                        &copy; {new Date().getFullYear()} Peddy Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
