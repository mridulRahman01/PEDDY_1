import { ReactNode } from "react";

interface DropdownAreaProps {
    label: string;
    items: string[];
    highlight?: boolean;
}

export default function DropdownArea({ label, items, highlight }: DropdownAreaProps) {
    return (
        <div className="relative group/dropdown">
            <button className={`flex items-center gap-1 font-bold py-6 px-3 whitespace-nowrap ${highlight ? 'text-primary' : 'text-text-main'}`}>
                {label}
                {highlight && <span className="text-xl">💥</span>}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/dropdown:rotate-180 text-primary">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {/* Mega Box Dropdown */}
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl p-6 mega-menu-shadow w-[250px] border border-gray-100">
                    <ul className="flex flex-col gap-5">
                        {items.map((item, idx) => (
                            <li key={idx}>
                                <a href="#" className="text-[#101828] font-medium text-[16px] hover:text-primary transition-colors block">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
