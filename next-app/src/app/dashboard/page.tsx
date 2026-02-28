"use client";

import { useAuth } from "../../context/AuthContext";
import { LogOut, User, Settings, Package, Heart, Bell } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
    const { user, logout, loading } = useAuth();

    if (loading) {
        return (
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-[calc(100vh-80px)] py-12">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

                <div className="flex flex-col md:flex-row gap-8 items-start">

                    {/* Sidebar Navigation */}
                    <div className="w-full md:w-1/4 xl:w-1/5 shrink-0 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl uppercase">
                                {user?.name?.charAt(0) || "U"}
                            </div>
                            <div>
                                <h2 className="font-bold text-slate-800 text-lg line-clamp-1">{user?.name}</h2>
                                <p className="text-gray-500 text-sm line-clamp-1">{user?.email}</p>
                            </div>
                        </div>

                        <nav className="space-y-2 mb-8 border-b border-gray-100 pb-8">
                            <Link href="/dashboard" className="flex items-center gap-3 text-primary bg-primary/5 font-bold px-4 py-3 rounded-xl transition-colors">
                                <User size={18} /> Profile Overview
                            </Link>
                            <Link href="#" className="flex items-center gap-3 text-slate-600 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition-colors">
                                <Package size={18} /> My Orders
                            </Link>
                            <Link href="#" className="flex items-center gap-3 text-slate-600 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition-colors">
                                <Heart size={18} /> Saved Items
                            </Link>
                            <Link href="#" className="flex items-center gap-3 text-slate-600 hover:bg-gray-50 font-medium px-4 py-3 rounded-xl transition-colors">
                                <Settings size={18} /> Settings
                            </Link>
                        </nav>

                        <button
                            onClick={logout}
                            className="flex w-full items-center gap-3 text-rose-500 hover:bg-rose-50 font-bold px-4 py-3 rounded-xl transition-colors"
                        >
                            <LogOut size={18} /> Sign Out
                        </button>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="flex-1 w-full space-y-8">

                        {/* Greeting Banner */}
                        <div className="bg-gradient-to-br from-primary to-rose-400 p-8 rounded-3xl shadow-md text-white">
                            <h1 className="text-3xl font-outfit font-black mb-2">Welcome back, {user?.name?.split(' ')[0]}! 👋</h1>
                            <p className="opacity-90 max-w-xl">
                                Manage your orders, update your pet profiles, and securely change your login settings from your personal dashboard.
                            </p>
                        </div>

                        {/* Account Settings Forms */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                <User className="text-primary" /> Personal Information
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                    <input type="text" readOnly value={user?.name || ""} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 text-slate-500 cursor-not-allowed" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input type="email" readOnly value={user?.email || ""} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 text-slate-500 cursor-not-allowed" />
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-start gap-3">
                                <Bell className="text-secondary shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1">Secure Environment Setup</h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Your active session is protected by Next.js Edge Middleware and secure JWT http-only cookies. Even if the page is refreshed, you are persistently authenticated. Trying to visit `/login` right now will automatically deflect you back here!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
