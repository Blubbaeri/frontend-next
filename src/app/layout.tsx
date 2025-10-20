import "./globals.css";
<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Inventory Dashboard",
    description: "Sistem Manajemen Inventory",
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

            <body
                className={`${inter.className} min-h-screen flex bg-gray-100 text-gray-800`}
            >
                <Sidebar />

                <main className="flex-1 flex flex-col">
                    <div className="flex justify-between items-center bg-white shadow px-8 py-4">
                        <h1 className="text-lg font-semibold">Dashboard Inventori</h1>
                        <div className="text-gray-600">
                            Halo, <span className="font-medium">Admin 👋</span>
                        </div>
                    </div>
                        
                    <div className="flex-1 p-8">{children}</div>

                    <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
                        © {new Date().getFullYear()} Sistem Inventori — Next.js + Tailwind
                    </footer>
                </main>
=======
import Navbar from "@/Component/Navbar";

export const metadata = {
    title: "Peminjaman Alat Produksi",
    description: "Website prototype peminjaman alat produksi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body className="bg-purple-50 text-gray-800">
                <Navbar />
                <main className="p-6">{children}</main>
>>>>>>> eaa2d1959983d329ba5d39407122333b9f68783b
            </body>
        </html>
    );
}
