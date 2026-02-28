import { Calendar, DollarSign, Gem, ShieldAlert, Syringe } from "lucide-react";

interface PetCardProps {
    image: string;
    pet_name: string;
    breed?: string;
    gender?: string;
    vaccinated_status?: string;
    price?: number;
    date_of_birth?: string;
}

export default function ProductCard({
    image, pet_name, breed, gender, vaccinated_status, price, date_of_birth
}: PetCardProps) {

    const formattedDate = date_of_birth ? new Date(date_of_birth).toDateString() : "Not available";

    return (
        <div className="bg-white rounded-3xl p-5 border border-gray-100 hover:border-primary/40 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full relative cursor-pointer">

            {/* Pet Image */}
            <div className="relative h-56 w-full mb-5 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                    src={image || "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=400"}
                    alt={pet_name || "Pet"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Adorable hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Pet Info */}
            <div className="flex flex-col flex-1 px-1">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit font-black text-text-main text-2xl leading-tight group-hover:text-primary transition-colors">
                        {pet_name || "Unknown"}
                    </h3>
                    <span className="font-quicksand font-bold text-lg text-primary bg-primary/10 px-3 py-1 rounded-xl whitespace-nowrap">
                        {price ? `$${price}` : "Free"}
                    </span>
                </div>

                <div className="space-y-2 mb-6 text-sm text-gray-500 font-medium">
                    <p className="flex items-center gap-2"><Gem size={14} className="text-secondary" /> Breed: {breed || "Not available"}</p>
                    <p className="flex items-center gap-2"><Calendar size={14} className="text-brand-orange" /> Birth: {formattedDate}</p>
                    <div className="flex items-center gap-4">
                        <p className="flex items-center gap-1.5"><ShieldAlert size={14} className="text-gray-400" /> {gender || "Unknown"}</p>
                        <p className="flex items-center gap-1.5"><Syringe size={14} className="text-brand-purple" /> {vaccinated_status || "Unknown"}</p>
                    </div>
                </div>

                {/* Call to Actions */}
                <div className="mt-auto grid grid-cols-2 gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-slate-700 font-bold py-3 rounded-xl transition-colors border border-transparent">
                        View Details
                    </button>
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-colors border border-transparent hover:shadow-[0_8px_30px_rgb(244,63,94,0.3)] hover:-translate-y-1">
                        Adopt Me
                    </button>
                </div>
            </div>
        </div>
    );
}
