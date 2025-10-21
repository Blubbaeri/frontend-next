"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntroPage() {
    return (
        <div
            className="flex flex-col justify-center items-center w-full h-full bg-white text-gray-800 font-sans overflow-hidden"
        >
            <div className="text-center">
                <Image
                    src="/logo_astra.png"
                    alt="Logo Astra"
                    width={230}
                    height={76}
                    priority
                    className="mx-auto mb-6 select-none"
                />

                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Selamat Datang di Web Peminjaman Barang 
                </h1>

                <p className="text-gray-600 mb-6">
                    Kelola dan pantau data alat dan barang dengan mudah 
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/Dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Lihat Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
}
