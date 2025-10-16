"use client";

export default function RiwayatPage() {
    return (
        <div className="space-y-8">
            {/* === HEADER === */}
            <header>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    🧾 Riwayat Transaksi
                </h2>
                <p className="text-gray-600">
                    Daftar semua transaksi barang masuk dan keluar.
                </p>
            </header>

            {/* === FILTER / AKSI === */}
            <div className="flex flex-wrap items-center gap-4">
                <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
                    Tambah Transaksi
                </button>
                <select className="px-4 py-2 border border-gray-300 rounded-lg">
                    <option>Semua Status</option>
                    <option>Selesai</option>
                    <option>Pending</option>
                    <option>Dibatalkan</option>
                </select>
                <input
                    type="text"
                    placeholder="Cari transaksi..."
                    className="px-4 py-2 border border-gray-300 rounded-lg flex-1"
                />
            </div>

            {/* === TABEL RIWAYAT === */}
            <section className="bg-white rounded-xl shadow border border-gray-200 p-6 overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="p-3 text-left">Tanggal</th>
                            <th className="p-3 text-left">ID Transaksi</th>
                            <th className="p-3 text-left">Nama Barang</th>
                            <th className="p-3 text-left">Jumlah</th>
                            <th className="p-3 text-left">Total</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">15 Okt 2025</td>
                            <td className="p-3">TRX001</td>
                            <td className="p-3">Keyboard Mechanical</td>
                            <td className="p-3">2</td>
                            <td className="p-3">Rp 700.000</td>
                            <td className="p-3 text-green-600 font-semibold">Selesai</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="p-3">15 Okt 2025</td>
                            <td className="p-3">TRX002</td>
                            <td className="p-3">Mouse Logitech</td>
                            <td className="p-3">1</td>
                            <td className="p-3">Rp 250.000</td>
                            <td className="p-3 text-yellow-600 font-semibold">Pending</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="p-3">14 Okt 2025</td>
                            <td className="p-3">TRX003</td>
                            <td className="p-3">Monitor 24”</td>
                            <td className="p-3">1</td>
                            <td className="p-3">Rp 1.500.000</td>
                            <td className="p-3 text-green-600 font-semibold">Selesai</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}
