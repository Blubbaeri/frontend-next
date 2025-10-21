import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Inventory & Peminjaman Dashboard",
    description: "Sistem Manajemen Inventory dan Peminjaman Alat Produksi",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            {/* === BODY === */}
            <body className={`${inter.className} h-screen overflow-hidden flex bg-gray-100 text-gray-800`}>
                {/* === SIDEBAR === */}
                <Sidebar />

                {/* === AREA UTAMA === */}
                <main className="flex-1 flex flex-col h-full overflow-hidden">
                    {/* === NAVBAR === */}
                    <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
                        <h1 className="text-lg font-semibold">Dashboard Sistem</h1>
                    </div>

                    {/* === KONTEN HALAMAN === */}
                    <div className="flex-1 overflow-hidden bg-purple-50">
                        {children}
                    </div>

                    {/* === FOOTER === */}
                    <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200 bg-white">
                        © {new Date().getFullYear()} Sistem Inventori & Peminjaman — Next.js + Tailwind
                    </footer>
                </main>
            </body>

        </html>
    );
}
