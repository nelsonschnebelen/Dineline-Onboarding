"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { KickOffStep } from "@/components/steps/kick-off";
import { StrategyStep } from "@/components/steps/strategy";
import { AssetsStep } from "@/components/steps/assets";
import { IntegrationsStep } from "@/components/steps/integrations";
import { ScheduleStep } from "@/components/steps/schedule";
import { TechStackStep } from "@/components/steps/tech-stack";
import { motion, AnimatePresence } from "framer-motion";
import { SystemStatus } from "@/components/SystemStatus";

const STEPS = [
    { id: 1, title: "Kick Off", description: "Business Details", component: KickOffStep },
    { id: 2, title: "Tech Stack", description: "POS & Operations", component: TechStackStep },
    { id: 3, title: "Strategy", description: "Market Position", component: StrategyStep },
    { id: 4, title: "Assets", description: "Brand Files", component: AssetsStep },
    { id: 5, title: "Integrations", description: "Connect Tools", component: IntegrationsStep },
    { id: 6, title: "Schedule", description: "Strategy Session", component: ScheduleStep },
];

export default function OnboardingWizard({ restaurantName }: { restaurantName: string }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((completedSteps.length / STEPS.length) * 100);
    }, [completedSteps]);

    const handleNext = () => {
        if (!completedSteps.includes(currentStep)) {
            setCompletedSteps([...completedSteps, currentStep]);
        }
        if (currentStep < STEPS.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const CurrentComponent = STEPS[currentStep - 1].component;

    return (
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto z-10 relative">

            {/* Sidebar / Stepper */}
            <div className="w-full lg:w-1/4 flex flex-col">
                <div className="glass-card rounded-2xl p-6 sticky top-8 border-l-4 border-l-primary/50 flex flex-col min-h-0 flex-1">
                    <div className="mb-6">
                        <h2 className="font-elite-serif text-xl font-bold text-white mb-1">Mission Control</h2>
                        <p className="text-sm text-primary/80 font-medium font-mono">{restaurantName}</p>
                    </div>

                    <div className="space-y-6 relative flex-1">
                        {/* Connecting Line */}
                        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-white/5 -z-10" />

                        {STEPS.map((step) => {
                            const isCompleted = completedSteps.includes(step.id);
                            const isCurrent = currentStep === step.id;

                            return (
                                <div key={step.id} className="flex items-start gap-4 relative">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            backgroundColor: isCompleted ? "#10b981" : isCurrent ? "#ef4444" : "#1f2937",
                                            scale: isCurrent ? 1.1 : 1
                                        }}
                                        className={`
                      relative w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold z-10 border border-white/10 overflow-hidden
                      ${isCompleted || isCurrent ? "text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]" : "text-gray-500"}
                    `}
                                    >
                                        {isCurrent && (
                                            <motion.div
                                                className="absolute left-0 right-0 h-0.5 bg-white/80 rounded-full z-0 shadow-[0_0_6px_rgba(255,255,255,0.9)]"
                                                animate={{ y: ["0px", "20px", "0px"] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                                style={{ top: 0 }}
                                            />
                                        )}
                                        <span className="relative z-10">{isCompleted ? <Check className="w-3 h-3" /> : step.id}</span>
                                    </motion.div>
                                    <div className={`transition-opacity duration-300 ${isCurrent ? "opacity-100" : "opacity-60"}`}>
                                        <h4 className={`text-sm font-semibold ${isCurrent ? "text-white" : "text-gray-400"}`}>
                                            {step.title}
                                        </h4>
                                        <p className="text-xs text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                            <span>Progress</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    </div>

                    <SystemStatus />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full lg:w-3/4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="glass-card min-h-[600px] flex flex-col border-0 relative overflow-hidden">
                        {/* Decorative Glow */}
                        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                        <CardContent className="flex-1 p-8 lg:p-12 relative z-10">
                            <div className="mb-8 flex items-center gap-3">
                                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                    <Zap className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-white tracking-tight">{STEPS[currentStep - 1].title}</h2>
                                    <p className="text-text-secondary">{STEPS[currentStep - 1].description}</p>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="min-h-[300px]"
                                >
                                    <CurrentComponent />
                                </motion.div>
                            </AnimatePresence>
                        </CardContent>

                        <CardFooter className="flex justify-between p-8 border-t border-white/5 bg-white/[0.02]">
                            <Button
                                variant="ghost"
                                disabled={currentStep === 1}
                                onClick={() => setCurrentStep(prev => prev - 1)}
                                className="text-gray-400 hover:text-white hover:bg-white/5"
                            >
                                Back
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="btn-glass-shimmer text-white font-semibold px-8 hover:opacity-90 transition-all duration-300 border-0"
                            >
                                {currentStep === STEPS.length ? "Finish" : "Next Step"}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
