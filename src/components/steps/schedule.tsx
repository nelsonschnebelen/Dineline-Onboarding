"use client";

import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";

export function ScheduleStep() {
    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500 text-center py-8">

            <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
                <Calendar className="w-8 h-8" />
            </div>

            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">One Last Step!</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                    We have everything we need to build your campaigns. Now, let's schedule your
                    <span className="text-primary font-semibold"> Strategy + Integration Session</span> with your Account Manager.
                </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg bg-surface max-w-lg mx-auto">
                <div className="space-y-4">
                    <h4 className="text-white font-medium">Select a Time</h4>
                    {/* Mock Calendar Grid */}
                    <div className="grid grid-cols-4 gap-2 text-sm">
                        {[...Array(8)].map((_, i) => (
                            <button key={i} className="p-2 rounded border border-gray-700 text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                {1 + i}:00 PM
                            </button>
                        ))}
                    </div>
                    <Button className="w-full mt-4" size="lg">
                        Confirm Booking
                    </Button>
                </div>
            </div>

            <p className="text-xs text-gray-600">
                Can't find a time? <a href="#" className="underline text-gray-500 hover:text-white">Contact Support</a>
            </p>
        </div>
    );
}
