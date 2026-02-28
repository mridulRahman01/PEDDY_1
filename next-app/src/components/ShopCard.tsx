import Image from "next/image";
import { Phone, MapPin, ExternalLink } from "lucide-react";

interface ShopCardProps {
    name: string;
    image: string;
    address: string;
    contact: string;
    description: string;
}

export default function ShopCard({ name, image, address, contact, description }: ShopCardProps) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full bg-slate-50">

            {/* Shop Image */}
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="font-outfit font-black text-white text-2xl tracking-tight leading-tight group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                </div>
            </div>

            {/* Shop Info */}
            <div className="p-6 flex flex-col flex-1 bg-white">
                <p className="text-gray-500 mb-5 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>

                <div className="space-y-3 mb-6 flex-1 text-sm font-medium text-slate-600">
                    <p className="flex items-start gap-3">
                        <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                        {address}
                    </p>
                    <p className="flex items-center gap-3">
                        <Phone size={18} className="text-primary shrink-0" />
                        {contact}
                    </p>
                </div>

                {/* Call to Actions */}
                <button className="w-full bg-slate-100 hover:bg-primary text-slate-700 hover:text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                    Visit Store
                    <ExternalLink size={18} className="text-slate-400 group-hover/btn:text-white transition-colors" />
                </button>
            </div>
        </div>
    );
}
