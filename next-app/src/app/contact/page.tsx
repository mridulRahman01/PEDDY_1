"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate an API network request for Email submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Reset Form & show success
        setSuccess(true);
        setLoading(false);
        setFormData({ firstName: "", lastName: "", email: "", subject: "General Inquiry", message: "" });

        // Hide success after 4 seconds
        setTimeout(() => setSuccess(false), 4000);
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-24">
            {/* Banner Area */}
            <div className="bg-white border-b border-gray-100 mb-12">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 lg:py-20 text-center">
                    <h1 className="text-4xl lg:text-6xl font-outfit font-black text-slate-800 mb-6 leading-tight">
                        Contact <span className="text-primary">Peddy</span>
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Have a question about your pet's needs? Our dedicated support team is here to help you and your furry friends.
                    </p>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-12">

                {/* Contact Information */}
                <div className="lg:w-1/3 space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-14 h-14 bg-rose-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                            <Phone size={28} />
                        </div>
                        <h3 className="font-outfit font-black text-2xl text-slate-800 mb-2">Call Us</h3>
                        <p className="text-gray-500 mb-4">We're available Monday through Friday, 9am - 6pm EST.</p>
                        <p className="font-bold text-xl text-primary">1-800-PEDDY-PET</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="w-14 h-14 bg-blue-50 text-secondary rounded-2xl flex items-center justify-center mb-6">
                            <Mail size={28} />
                        </div>
                        <h3 className="font-outfit font-black text-2xl text-slate-800 mb-2">Email Us</h3>
                        <p className="text-gray-500 mb-4">Send us an email anytime and we'll get back to you within 24 hours.</p>
                        <p className="font-bold text-lg text-slate-700">support@peddy.com</p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hidden md:block">
                        <div className="w-14 h-14 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6">
                            <MapPin size={28} />
                        </div>
                        <h3 className="font-outfit font-black text-2xl text-slate-800 mb-2">Visit HQ</h3>
                        <p className="text-gray-500 mb-4">Come drop by our main office and bring your pets!</p>
                        <p className="font-bold text-lg text-slate-700">123 Pet Avenue<br />New York, NY 10001</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-2/3 bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <h2 className="text-3xl font-outfit font-black text-slate-800 mb-8">Send a Message</h2>

                    {success && (
                        <div className="mb-8 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 font-bold animate-in fade-in zoom-in duration-300">
                            <CheckCircle2 size={24} className="text-green-500" />
                            Your message has been successfully sent! We will be in touch soon.
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                <input id="firstName" name="firstName" required type="text" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                <input id="lastName" name="lastName" required type="text" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input id="email" name="email" required type="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                            <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600">
                                <option>General Inquiry</option>
                                <option>Order Status</option>
                                <option>Product Question</option>
                                <option>Returns & Refunds</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                            <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder="How can we help you today?"></textarea>
                        </div>

                        <div className="pt-4">
                            <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-2xl text-lg shadow-[0_8px_30px_rgb(244,63,94,0.3)] transition-all disabled:opacity-70 disabled:hover:-translate-y-0 hover:-translate-y-1 w-full sm:w-auto">
                                {loading ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}
