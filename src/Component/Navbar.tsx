import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-purple-700 text-white px-6 py-3 flex justify-between items-center">
            <h1 className="font-bold text-lg">Peminjaman Alat</h1>
            <div className="space-x-4">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
                <Link href="/Barang" className="hover:underline">
                    Barang
                </Link>
                <Link href="/Peminjaman" className="hover:underline">
                    Peminjaman
                </Link>
                <Link href="/Riwayat" className="hover:underline">
                    Riwayat
                </Link>
            </div>
        </nav>
    );
}
