import OnboardingWizard from "@/components/onboarding-wizard";
import { Particles } from "@/components/ui/particles";

export default function OnboardingPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const restaurantName = typeof searchParams.name === 'string' ? searchParams.name : "Restaurant";

    return (
        <main className="relative min-h-screen flex flex-col p-4 md:p-8 overflow-hidden bg-black selection:bg-primary/30">

            {/* Background Ambience */}
            <div className="bg-mesh-animated opacity-40" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none"></div>

            {/* Particles (same as homepage) */}
            <Particles className="absolute inset-0 z-0 pointer-events-none" quantity={50} ease={20} refresh />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                {/* Minimal Header */}
                <div className="flex items-center justify-between mb-12 py-4">
                    <img src="/logo.png" alt="Dineline" className="h-8 w-auto" />
                    <div className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                        Onboarding Portal
                    </div>
                </div>

                <OnboardingWizard restaurantName={restaurantName} />
            </div>
        </main>
    );
}
