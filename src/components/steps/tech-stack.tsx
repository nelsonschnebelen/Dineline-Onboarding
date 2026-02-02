"use client";

import { Input } from "@/components/ui/input";

export function TechStackStep() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">Operations & Tech Stack</h3>
                <p className="text-sm text-gray-400">Tell us about the tools you currently use.</p>
            </div>

            <div className="grid gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Point of Sale (POS)</label>
                    <Input placeholder="e.g. Toast, Square, Clover, Aloha" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Online Ordering Provider</label>
                    <Input placeholder="e.g. UberEats, DoorDash, Chownow" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Reservation System (if applicable)</label>
                    <Input placeholder="e.g. OpenTable, Resy, Tock" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">WiFi Provider</label>
                    <Input placeholder="e.g. Comcast, AT&T" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-200">Current Marketing Spend (Monthly)</label>
                    <Input placeholder="$2,000" />
                </div>
            </div>
        </div>
    );
}
