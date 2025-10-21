import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const isIntroPage = pathname.includes("/intro");

    return (
        <html lang="id">
            <body className={`${inter.className} h-screen flex bg-gray-100 text-gray-800 overflow-hidden`}>
                {isIntroPage ? (
                    <div className="w-screen h-screen overflow-hidden">{children}</div>
                ) : (
                    <>
                        <Sidebar />
                        <main className="flex-1 flex flex-col h-screen overflow-hidden">
                            <div className="bg-white shadow px-8 py-4 flex justify-between items-center">
                                <h1 className="text-lg font-semibold">Dashboard Sistem</h1>
                            </div>
                            <div className="flex-1 bg-purple-50 overflow-auto">{children}</div>
                            <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200 bg-white">
                                © {new Date().getFullYear()} Web Peminjaman — Next.js + Tailwind
                            </footer>
                        </main>
                    </>
                )}
            </body>
        </html>
    );
}
