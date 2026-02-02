"use client";

import { Input } from "@/components/ui/input";

export function KickOffStep() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">Restaurant Details</h3>
                <p className="text-sm text-gray-400">Let's get your profile set up correctly.</p>
            </div>

            <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Legal Business Name</label>
                        <Input placeholder="Official LLC Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">DBA (Restaurant Name)</label>
                        <Input placeholder="Name on Signage" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Website URL</label>
                    <Input placeholder="https://..." />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Business Address</label>
                    <Input placeholder="123 Main St, City, State, Zip" />
                </div>

                {/* Business Metrics */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Number of Locations</label>
                        <Input type="number" placeholder="e.g. 1" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Avg. Monthly Revenue</label>
                        <Input placeholder="$50k - $100k" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Owner Name</label>
                        <Input placeholder="Full Name" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-200">Owner Phone</label>
                        <Input placeholder="(555) 123-4567" />
                    </div>
                </div>
            </div>
        </div>
    );
}
