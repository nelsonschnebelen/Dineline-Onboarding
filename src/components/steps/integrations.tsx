"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

const IntegrationCard = ({ name, icon, description, connected = false }: any) => {
    const [isConnected, setIsConnected] = useState(connected);

    return (
        <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-gray-800">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-xl">
                    {icon}
                </div>
                <div>
                    <h4 className="text-white font-medium">{name}</h4>
                    <p className="text-xs text-gray-400">{description}</p>
                </div>
            </div>
            <div>
                {isConnected ? (
                    <Button variant="ghost" className="text-green-500 hover:text-green-400 cursor-default">
                        <CheckCircle2 className="mr-2 w-4 h-4" /> Connected
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10"
                        onClick={() => setIsConnected(true)}
                    >
                        Connect
                    </Button>
                )}
            </div>
        </div>
    );
};

export function IntegrationsStep() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="space-y-1">
                <h3 className="text-lg font-medium text-white">Connect Accounts</h3>
                <p className="text-sm text-gray-400">We need access to run your ads and manage your profile.</p>
            </div>

            <div className="grid gap-4">
                <IntegrationCard
                    name="Facebook / Instagram"
                    icon="M"
                    description="For running Meta Ads campaigns"
                />
                <IntegrationCard
                    name="Google Business"
                    icon="G"
                    description="For managing reviews and SEO"
                />
                <IntegrationCard
                    name="HubSpot"
                    icon="H"
                    description="CRM Integration (Auto-connected)"
                    connected={true}
                />
            </div>
        </div>
    );
}
