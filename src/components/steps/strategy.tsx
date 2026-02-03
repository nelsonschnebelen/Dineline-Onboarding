"use client";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Fallback label (no ui/label component in project)
function FieldLabel({ children, className }: { children: React.ReactNode, className?: string }) {
    return <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-200 ${className}`}>{children}</label>;
}

const SERVICE_CATEGORIES = [
    "Fine Dining", "Upscale Casual", "Casual Dining", "Family Dining",
    "Fast Casual", "Quick Service (QSR)", "Food Truck", "Ghost Kitchen / Virtual Brand",
    "Brewpub / Taproom", "Steakhouse", "Cafe / Coffee Shop", "Juice Bar / Smoothie Bar",
    "Bakery / Patisserie", "Club / Lounge/ Speakeasy", "Hotel / Resort Dining",
    "Food Hall Stall / Counter Concept", "Other"
];

const SPECIALTY_CATEGORIES = [
    "Pizzeria", "BBQ / Smokehouse", "Seafood Restaurant", "Diner",
    "Buffet / All You Can Eat", "Catering / Banquet Hall / Private Rooms", "Burger Joint",
    "Brunch / Café Bistro", "Ethnic / Regional Cuisine", "Farm-to-Table / Sustainable Concept",
    "American", "Bar Bites", "Tapas / Small Plates / Shared Dining",
    "Vegan / Vegetarian Concept", "Tasting Menu / Chef-Driven Concept",
    "Dessert / Ice Cream / Specialty Sweets", "Other"
];

const CONCEPT_TYPES = [
    "Chef-Driven Concept", "Farm-to-Table Concept", "Pop-Up / Experiential Dining",
    "Supper Club / Members-Only Dining", "Event-Driven Concept (e.g., weddings)",
    "Franchise / Multi-Location Brand", "Independent / Single Location",
    "Seasonal or Limited-Time Concept", "Other"
];

export function StrategyStep() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">Concept & Strategy</h3>
                <p className="text-sm text-gray-400">Define your restaurant's identity.</p>
            </div>

            {/* Service Category */}
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Service Category</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SERVICE_CATEGORIES.map((item) => (
                        <div key={item} className="flex items-center space-x-2 bg-white/5 p-3 rounded-md border border-white/5 hover:border-primary/30 transition-colors">
                            <Checkbox id={`service-${item}`} />
                            <FieldLabel className="text-xs cursor-pointer select-none" >{item}</FieldLabel>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Specialty Category */}
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Specialty Category</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {SPECIALTY_CATEGORIES.map((item) => (
                        <div key={item} className="flex items-center space-x-2 bg-white/5 p-3 rounded-md border border-white/5 hover:border-primary/30 transition-colors">
                            <Checkbox id={`specialty-${item}`} />
                            <FieldLabel className="text-xs cursor-pointer select-none">{item}</FieldLabel>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Concept Type */}
            <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wider">Concept Type</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CONCEPT_TYPES.map((item) => (
                        <div key={item} className="flex items-center space-x-2 bg-white/5 p-3 rounded-md border border-white/5 hover:border-primary/30 transition-colors">
                            <Checkbox id={`concept-${item}`} />
                            <FieldLabel className="text-xs cursor-pointer select-none">{item}</FieldLabel>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-2 pt-4">
                <h4 className="text-sm font-semibold text-white">Top 3 Competitors</h4>
                <Input placeholder="e.g. Competitor A, Competitor B..." />
            </div>
        </div>
    );
}
