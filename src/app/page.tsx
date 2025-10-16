import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 gap-8">
            {/* Logo */}
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />

            {/* Teks sambutan */}
            <h1 className="text-2xl font-bold text-center">
                Selamat Datang di Aplikasi Inventori Barang
            </h1>
            <p className="text-gray-600 text-center">
                Kelola dan pantau data alat dan barang dengan mudah 🚀
            </p>

            {/* Tombol menuju halaman barang */}
            <Link
                href="/barang"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
                Ke Halaman Barang
            </Link>

            {/* Footer */}
            <footer className="mt-12 text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Sistem Inventori — Next.js + Tailwind
            </footer>
        </div>
    );
}
