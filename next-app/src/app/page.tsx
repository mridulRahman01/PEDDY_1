import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Truck, ShieldCheck, Heart } from "lucide-react";
import FoodCard from "../components/FoodCard";

export default function Home() {

  const featuredFoods = [
    { id: "1", name: "Premium Salmon Nutrition Adult", brand: "Purina Pro Plan", petType: "dog" as const, price: 42.99, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=400", weight: "12 lbs" },
    { id: "2", name: "Life Protection Formula Chicken", brand: "Blue Buffalo", petType: "dog" as const, price: 60.98, image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&q=80&w=400", weight: "24 lbs" },
    { id: "3", name: "Indoor Advantage Dry Cat Food", brand: "Iams", petType: "cat" as const, price: 34.99, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400", weight: "7 lbs" },
    { id: "4", name: "High Prairie Canine with Roast Bison", brand: "Taste of the Wild", petType: "dog" as const, price: 54.99, image: "https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&q=80&w=400", weight: "15 lbs" },
  ];

  return (
    <div className="w-full bg-white">

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full font-bold text-sm tracking-wide">
                <Heart size={16} fill="currentColor" /> Welcome to Peddy
              </div>
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-outfit font-black leading-[1.1] text-slate-800">
                Everything <span className="text-primary relative inline-block">
                  Your Pet
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow/60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor"></path></svg>
                </span> Needs.
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover premium food, engaging toys, and stylish accessories for your furry companions, delivered straight to your door.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/food" className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-[0_8px_30px_rgb(244,63,94,0.3)] transition-all hover:-translate-y-1 text-center whitespace-nowrap">
                  Shop Now
                </Link>
                <Link href="/shop" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-slate-800 border border-gray-200 font-bold py-4 px-10 rounded-2xl text-lg transition-colors text-center whitespace-nowrap">
                  Find Local Shops
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200/60 mt-8">
                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-black text-3xl text-slate-800">4.9/5</span>
                  <div className="flex text-brand-yellow"><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /><Star fill="currentColor" size={16} /></div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="flex flex-col gap-1">
                  <span className="font-outfit font-black text-3xl text-slate-800">10k+</span>
                  <span className="text-sm font-medium text-gray-500">Happy Pets</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="absolute w-[80%] h-[80%] bg-blue-100/50 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
                  alt="Happy dogs running"
                  fill
                  className="object-cover rounded-[2rem] shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Floating Elements corresponding to features */}
                <div className="absolute -left-6 lg:-left-12 top-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-[bounce_4s_ease-in-out_infinite] hidden sm:flex items-center gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-xl"><Truck size={20} /></div>
                  <div><p className="font-bold text-sm">Free Delivery</p><p className="text-xs text-gray-500">On orders over $50</p></div>
                </div>
                <div className="absolute -right-6 lg:-right-12 bottom-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-[bounce_3s_ease-in-out_infinite_reverse] hidden sm:flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-xl"><ShieldCheck size={20} /></div>
                  <div><p className="font-bold text-sm">100% Secure</p><p className="text-xs text-gray-500">Verified Quality</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories - Responsive Grid */}
      <section className="py-20 md:py-32 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-outfit font-black text-slate-800 mb-4">Top Categories</h2>
            <p className="text-gray-500 text-lg">Browse our wide selection of pet supplies by category.</p>
          </div>
          <Link href="/shop" className="text-primary font-bold hover:underline flex items-center gap-1">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>

        {/* 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/food?pet=dog" className="group rounded-3xl overflow-hidden relative h-[300px] block">
            <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" alt="Dog Food" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-outfit font-black">Dogs</h3>
                <p className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors">Shop Food & Toys &rarr;</p>
              </div>
            </div>
          </Link>
          <Link href="/food?pet=cat" className="group rounded-3xl overflow-hidden relative h-[300px] block">
            <Image src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=400" alt="Cat Food" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-outfit font-black">Cats</h3>
                <p className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors">Shop Accessories &rarr;</p>
              </div>
            </div>
          </Link>
          <Link href="/food?pet=bird" className="group rounded-3xl overflow-hidden relative h-[300px] block lg:col-span-2">
            <Image src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=800" alt="Bird Supplies" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div>
                <h3 className="text-white text-2xl font-outfit font-black">Birds & Small Pets</h3>
                <p className="text-white/80 text-sm font-medium group-hover:text-primary transition-colors">Shop Cages & Seeds &rarr;</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products - Responsive Grid */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-outfit font-black text-slate-800 mb-4">Trending Food</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our most popular, highly-rated nutrition options chosen by pet parents.</p>
          </div>

          {/* 1 col mobile, 2 col tablet, 3-4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {featuredFoods.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/food" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-slate-800 hover:text-primary hover:border-primary font-bold py-4 px-10 rounded-2xl transition-all shadow-sm">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

