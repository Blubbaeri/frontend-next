import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex bg-gray-100 text-gray-800">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
                <div>
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-indigo-600">Inventori</h2>
                    </div>

                    <nav className="p-4">
                        <ul className="space-y-2">
                            <li className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold cursor-pointer hover:bg-indigo-200 transition">
                                Dashboard
                            </li>
                            <li className="px-4 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer transition">
                                Barang
                            </li>
                            <li className="px-4 py-2 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer transition">
                                Riwayat
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-200">
                    <button className="w-full py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition">
                        Keluar
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 flex flex-col">
                {/* Top Bar */}
                <div className="flex justify-between items-center bg-white shadow px-8 py-4">
                    <h1 className="text-lg font-semibold">Dashboard Inventori</h1>
                    <div className="text-gray-600">Halo, <span className="font-medium">Admin 👋</span></div>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-8">
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Selamat datang di sistem manajemen inventori barang.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-8">
                        <Link
                            href="/barang"
                            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                        >
                            Ke Halaman Barang
                        </Link>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
                            Logout
                        </button>
                    </div>

                    {/* History Card */}
                    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Riwayat Terbaru</h2>
                        <p className="text-gray-500">Belum ada data terbaru.</p>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200">
                    © {new Date().getFullYear()} Sistem Inventori — Next.js + Tailwind
                    <div className="bg-blue-500 text-white p-4 rounded">
                        Test Tailwind
                    </div>
                </footer>
            </main>
        </div>
    );
}
