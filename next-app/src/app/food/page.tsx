"use client";

import { useState } from "react";
import FoodCard from "../../components/FoodCard";
import { Search, Filter as FilterIcon } from "lucide-react";

export default function FoodPage() {
    const [activeFilter, setActiveFilter] = useState<"all" | "dog" | "cat" | "bird">("all");
    const [search, setSearch] = useState("");

    const allFoodData = [
        { id: "1", name: "Premium Sensitive Skin & Stomach Salmon Adult", brand: "Purina Pro Plan", petType: "dog" as const, price: 42.98, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400", weight: "15 lbs" },
        { id: "2", name: "Life Protection Formula Adult Chicken R...", brand: "Blue Buffalo", petType: "dog" as const, price: 60.98, image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400", weight: "30 lbs" },
        { id: "3", name: "Indoor Advantage Dry Cat Food", brand: "Iams", petType: "cat" as const, price: 34.99, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400", weight: "7 lbs" },
        { id: "4", name: "Complete Nutrition Adult Dry Dog Food", brand: "Pedigree", petType: "dog" as const, price: 29.98, image: "https://images.unsplash.com/photo-1548802673-38020fb23f14?auto=format&fit=crop&q=80&w=400", weight: "40 lbs" },
        { id: "5", name: "Gourmet Ocean Fish Formula", brand: "Fancy Feast", petType: "cat" as const, price: 18.48, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400", weight: "5 lbs" },
        { id: "6", name: "High Prairie Canine with Roast Bison", brand: "Taste of the Wild", petType: "dog" as const, price: 54.99, image: "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&q=80&w=400", weight: "28 lbs" },
        { id: "7", name: "Daily Nutrition Bird Seed Blend", brand: "Kaytee", petType: "bird" as const, price: 14.98, image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=400", weight: "10 lbs" },
        { id: "8", name: "Healthy Weight Advantage Small Bites", brand: "Hill's Science Diet", petType: "dog" as const, price: 44.99, image: "https://images.unsplash.com/photo-1583337260546-28b6bf66d004?auto=format&fit=crop&q=80&w=400", weight: "15 lbs" },
    ];

    // Filtering Logic
    const filteredData = allFoodData.filter(item => {
        const matchesCategory = activeFilter === "all" || item.petType === activeFilter;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50 min-h-screen pb-24">

            {/* Page Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 md:py-16 text-center">
                    <h1 className="text-4xl lg:text-5xl font-outfit font-black text-slate-800 mb-6 tracking-tight">
                        Premium <span className="text-primary">Pet Food</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Top-rated, highly-nutritious meals sourced from the best ingredients to keep your furry and feathered friends healthy.
                    </p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 mt-12 flex flex-col lg:flex-row gap-8">

                {/* Left Sidebar Filters */}
                <aside className="lg:w-1/4 xl:w-1/5 shrink-0 space-y-6">
                    <div className="flex items-center gap-2 font-bold mb-2 text-xl text-slate-800 hidden lg:flex">
                        <FilterIcon size={20} className="text-primary" /> Products Filter
                    </div>

                    {/* Search Input Filter */}
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search food & brands..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>

                    {/* Pet Type Filters */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg mb-4 text-slate-800">Pet Type</h3>
                        <div className="flex flex-col gap-2">
                            {(["all", "dog", "cat", "bird"] as const).map(type => (
                                <button
                                    key={type}
                                    onClick={() => setActiveFilter(type)}
                                    className={`text-left px-4 py-3 rounded-xl font-medium capitalize transition-all ${activeFilter === type
                                            ? "bg-primary text-white shadow-md border border-transparent"
                                            : "bg-gray-50 text-slate-600 hover:bg-gray-100 border border-gray-100"
                                        }`}
                                >
                                    {type === "all" ? "All Products" : `${type} Food`}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range Filter Visual Mockup */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hidden sm:block">
                        <h3 className="font-bold text-lg mb-4 text-slate-800">Price Range</h3>
                        <div className="space-y-4">
                            <input type="range" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                            <div className="flex items-center justify-between text-sm text-gray-500 font-bold">
                                <span>$0</span>
                                <span>$100+</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid Area */}
                <div className="lg:w-3/4 xl:w-4/5 pt-2">
                    <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="text-gray-500 font-medium">Showing <span className="font-bold text-slate-800">{filteredData.length}</span> Results</p>
                        <select className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-sm">
                            <option>Relevance</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Top Rated</option>
                        </select>
                    </div>

                    {/* Conditional Rendering for Empty Resulst */}
                    {filteredData.length === 0 ? (
                        <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-800 mb-2">No products found</h3>
                            <p className="text-gray-500">Try adjusting your search criteria or category filter.</p>
                            <button onClick={() => { setSearch(""); setActiveFilter("all"); }} className="mt-6 text-primary font-bold hover:underline">
                                Clear all filters
                            </button>
                        </div>
                    ) : (
                        /* Actual Layout Grid */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredData.map(item => (
                                <FoodCard key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
