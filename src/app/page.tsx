"use client";

import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="font-sans flex flex-col items-center min-h-screen bg-purple-50 p-8 gap-8">
            {/* === Header / Hero === */}
            <div className="text-center mt-8">
                <Image
                    src="/logo astra.png"
                    alt="Logo"
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
                        href="/barang"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Ke Halaman Barang
                    </Link>
                    <Link
                        href="/Login"
                        className="bg-gray-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-medium"
                    >
                        Ke Halaman Login
                    </Link>
                </div>
            </div>

            {/* === Statistik === */}
            <section className="stat-grid w-full max-w-6xl mt-10">
                <div className="stat-card blue">
                    <h3>Total Barang</h3>
                    <p>256</p>
                </div>
                <div className="stat-card green">
                    <h3>Barang Masuk</h3>
                    <p>45</p>
                </div>
                <div className="stat-card orange">
                    <h3>Barang Keluar</h3>
                    <p>32</p>
                </div>
                <div className="stat-card purple">
                    <h3>Pendapatan Hari Ini</h3>
                    <p>Rp 2.450.000</p>
                </div>
            </section>

            {/* === History Transaksi === */}
            <section className="history-section w-full max-w-6xl mt-8 mb-12">
                <h2>History Transaksi</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tanggal</th>
                            <th>ID Transaksi</th>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>15 Okt 2025</td>
                            <td>TRX001</td>
                            <td>Keyboard Mechanical</td>
                            <td>2</td>
                            <td>Rp 700.000</td>
                            <td className="success">Selesai</td>
                        </tr>
                        <tr>
                            <td>15 Okt 2025</td>
                            <td>TRX002</td>
                            <td>Mouse Logitech</td>
                            <td>1</td>
                            <td>Rp 250.000</td>
                            <td className="pending">Pending</td>
                        </tr>
                        <tr>
                            <td>14 Okt 2025</td>
                            <td>TRX003</td>
                            <td>Monitor 24”</td>
                            <td>1</td>
                            <td>Rp 1.500.000</td>
                            <td className="success">Selesai</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* === Footer === */}
            <footer className="mt-auto text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} Sistem Inventori — Next.js + Tailwind
            </footer>
        </div>
    );
}
