"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="font-sans flex flex-col items-center justify-between h-screen overflow-hidden bg-purple-50 p-8">
            {/* === Header / Hero === */}
            <div className="text-center mt-8">
                <Image
                    src="/logo_astra.png"
                    alt="Logo Astra"
                    width={230}
                    height={76}
                    priority
                    className="mx-auto"
                />
                <h1 className="text-3xl font-bold mt-6 text-gray-900">
                    Selamat Datang di Aplikasi Inventori Barang
                </h1>
                <p className="text-gray-600 mt-2">
                    Kelola dan pantau data alat dan barang dengan mudah 🚀
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    <Link
                        href="/dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Lihat Dashboard
                    </Link>
                    <Link
                        href="/Login"
                        className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-medium"
                    >
                        Ke Halaman Login
                    </Link>
                </div>
            </div>

        </div>
    );
}
