"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; //import animasi

export default function IntroPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full bg-white text-gray-800 font-sans overflow-hidden">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}     // mulai agak turun & transparan
                animate={{ opacity: 1, y: 0 }}      // naik ke posisi normal
                transition={{ duration: 0.8, ease: "easeOut" }} // animasi 
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Image
                        src="/logo_astra.png"
                        alt="Logo Astra"
                        width={230}
                        height={76}
                        priority
                        className="mx-auto mb-6 select-none"
                    />
                </motion.div>

                <motion.h1
                    className="text-3xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Selamat Datang di Web Peminjaman Barang
                </motion.h1>

                <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Kelola dan pantau data alat dan barang dengan mudah
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <Link
                        href="/Dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Lihat Dashboard
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
