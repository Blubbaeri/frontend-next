"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAuthToken } from "@/utils/auth"; // sesuaikan sama folder lo ya bro

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === "admin@email.com" && password === "astra1234") {
            setAuthToken("dummy-token-123");
            router.push("/intro");
        } else {
            setError("Email atau password salah");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md border border-gray-200 rounded-xl p-8 shadow-md">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Login   
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-700 block mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-700 block mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm text-center">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </div>
    );
}
