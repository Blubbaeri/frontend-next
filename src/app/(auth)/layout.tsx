
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Login - Web Peminjaman",
    description: "Halaman login Web Peminjaman",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body className={`${inter.className} bg-white text-gray-900`}>
                {children}
                <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200 bg-white">
                    © {new Date().getFullYear()} Web Peminjaman — Next.js + Tailwind
                </footer>
            </body>
        </html>
    );
}
