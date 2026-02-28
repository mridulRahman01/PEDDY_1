import ShopCard from "../../components/ShopCard";
import { Store, Map } from "lucide-react";

export default function ShopPage() {

    const shops = [
        {
            name: "Paws & Play Pet Store",
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600",
            address: "123 Bark Avenue, NY 10001",
            contact: "(212) 555-0198",
            description: "Premium independent pet supply store offering natural foods, high-quality accessories, and in-house grooming services."
        },
        {
            name: "The Happy Hound",
            image: "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&q=80&w=600",
            address: "456 Wag Street, CA 90028",
            contact: "(323) 555-0145",
            description: "A specialty boutique dedicated to dogs. Featuring designer collars, organic treats, and interactive behavioral toys."
        },
        {
            name: "Feline Friends Boutique",
            image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600",
            address: "789 Meow Lane, TX 78701",
            contact: "(512) 555-0112",
            description: "Everything your cat desires under one roof. We stock artisan climbing trees, healthy litter choices, and gourmet wet food."
        },
        {
            name: "Feather & Fin Goods",
            image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=600",
            address: "321 Avian Blvd, FL 33101",
            contact: "(305) 555-0188",
            description: "Your local expert for exotic birds and aquatic life. Custom cage building, premium seed blends, and aquarium maintenance."
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Banner Area */}
            <div className="bg-white border-b border-gray-100 mb-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 lg:py-20">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-secondary px-4 py-2 rounded-full font-bold text-sm mb-6">
                                <Store size={16} /> Partner Locations
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-outfit font-black text-slate-800 mb-6 leading-tight">
                                Find A Local <span className="text-primary">Pet Shop</span> Near You
                            </h1>
                            <p className="text-lg text-gray-500">
                                We've partnered with the best independent pet stores nationwide. Find premium supplies and exceptional grooming services physically near your location.
                            </p>
                        </div>

                        <div className="hidden lg:flex items-center justify-center p-8 bg-blue-50 rounded-full border border-blue-100">
                            <Map size={100} className="text-secondary/50" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 font-medium">Showing <span className="font-bold text-slate-800">{shops.length}</span> Partner Stores</p>
                    <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium">
                        <option>Sort by: Nearest</option>
                        <option>Sort by: Ratings</option>
                        <option>Sort by: Name A-Z</option>
                    </select>
                </div>

                {/* Responsive Shop Grid: 1 col Mobile, 2 col Tablet, 3-4 col Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {shops.map((shop, idx) => (
                        <ShopCard key={idx} {...shop} />
                    ))}
                </div>
            </div>
        </div>
    );
}
