"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";

export default function Home() {
    const [restaurantName, setRestaurantName] = useState("");
    const router = useRouter();

    const handleStart = (e: React.FormEvent) => {
        e.preventDefault();
        if (restaurantName.trim()) {
            router.push(`/onboarding?name=${encodeURIComponent(restaurantName)}`);
        }
    };

    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black selection:bg-primary/30">

            {/* Dynamic Background */}
            <div className="bg-mesh-animated" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>

            {/* Particles */}
            <Particles className="absolute inset-0 z-0 pointer-events-none" quantity={50} ease={20} refresh />

            {/* Floating Orbs (Visual Interest) */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
            />

            <div className="z-10 w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 text-center lg:text-left"
                >
                    {/* Logo */}
                    <img src="/logo.png" alt="Dineline" className="h-12 w-auto mx-auto lg:mx-0" />

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary">
                        <Sparkles className="w-3 h-3" />
                        <span>Powered by Dishio Intelligence</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Grow your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 text-glow">Restaurant Revenue.</span>
                    </h1>

                    <p className="text-lg text-text-secondary max-w-lg mx-auto lg:mx-0">
                        Install A Simple, Data-Driven System To Consistently Attract New Guests, Boost Repeat Visits, Increase Ticket Sizes… All Done 100% For You.
                    </p>
                </motion.div>

                {/* Right: Login Card (Glass) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full max-w-md mx-auto lg:max-w-none"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20"></div>
                    <div className="relative glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
                        <div className="mb-6">
                            <h2 className="text-xl sm:text-2xl font-semibold text-white">Get Started</h2>
                            <p className="text-sm text-text-secondary mt-1">Enter your restaurant's name to begin.</p>
                        </div>

                        <form onSubmit={handleStart} className="space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Restaurant Name</label>
                                <div className="mt-2">
                                    <Input
                                        placeholder="e.g. The Italian Place"
                                        value={restaurantName}
                                        onChange={(e) => setRestaurantName(e.target.value)}
                                        className="glass-input h-11 text-base"
                                        autoFocus
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-11 text-sm font-bold bg-primary text-black hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Start Onboarding
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
