import DropdownArea from "./DropdownArea";
import { Search, MapPin, User, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white relative z-40 border-b border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                {/* Top Navbar */}
                <div className="flex items-center justify-between py-4 px-6 md:px-10">

                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                                S
                            </div>
                            <span className="font-outfit font-black text-2xl tracking-tighter text-text-main">
                                Smart<span className="text-primary">Pet</span>
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-1 text-sm text-text-muted font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200 cursor-pointer hover:border-gray-300 transition-colors">
                            <MapPin size={16} className="text-secondary" />
                            <span>Deliver to <strong>New York, 10001</strong></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>

                    <div className="flex-1 max-w-xl mx-8 hidden md:block">
                        <div className="relative flex items-center w-full">
                            <div className="absolute left-4 text-gray-400">
                                <Search size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search products, brands and more..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                            <button className="absolute right-2 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-primary-dark transition-colors">
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex items-center gap-2 font-bold px-4 hover:text-primary transition-colors text-text-main">
                            <User size={22} className="text-gray-600" />
                            <span>Log In</span>
                        </button>
                        <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                        <button className="relative p-2 text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                            <ShoppingCart size={24} />
                            <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                                3
                            </div>
                            <span className="font-bold ml-1 hidden lg:block">$45.00</span>
                        </button>
                    </div>

                </div>

                {/* Bottom Categories Nav */}
                <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-8 px-6 md:px-10 overflow-x-auto hide-scrollbar border-t border-gray-50">
                    <DropdownArea
                        label="Cat Food & Accessories"
                        items={["Cat Food", "Cat Care & Health", "Cat Litter", "Cat Accessories", "Clothing, Beds & Carrier"]}
                        highlight={true}
                    />
                    <DropdownArea
                        label="Winter Products"
                        items={["Cat Dress", "Cat House", "Cat Bed"]}
                        highlight={true}
                    />
                    <DropdownArea
                        label="Dog"
                        items={["Dog Care & Health", "Dog Accessories", "Dog Food", "Dog Care & Accessories"]}
                        highlight={true}
                    />
                    <DropdownArea
                        label="Bird"
                        items={["Bird Seed", "Cages & Toys", "Bird Health"]}
                    />
                    <DropdownArea
                        label="Small Pet"
                        items={["Rabbit Food", "Hamster Cages", "Small Toys"]}
                    />
                    <a href="/shop" className="font-bold py-6 px-3 whitespace-nowrap text-text-main hover:text-primary transition-colors">
                        All Products
                    </a>
                </div>
            </div>
        </header>
    );
}
