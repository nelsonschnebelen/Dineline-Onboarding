import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            <h1 className="text-4xl font-bold text-primary mb-2">404</h1>
            <p className="text-gray-400 mb-6">This page could not be found.</p>
            <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
                Go home
            </Link>
        </div>
    );
}
