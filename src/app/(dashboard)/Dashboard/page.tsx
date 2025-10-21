"use client";

export default function DashboardPage() {
    return (
        <div className="font-sans flex flex-col items-center w-full h-full bg-purple-50 p-8 gap-12 overflow-hidden">
            {/* === Statistik Section === */}
            <section className="grid grid-cols-4 gap-6 w-full max-w-6xl">
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
            <section className="bg-white p-6 rounded-xl shadow-md w-full max-w-6xl mb-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    History Transaksi
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2 text-left">Tanggal</th>
                                <th className="border px-4 py-2 text-left">ID Transaksi</th>
                                <th className="border px-4 py-2 text-left">Nama Barang</th>
                                <th className="border px-4 py-2 text-left">Jumlah</th>
                                <th className="border px-4 py-2 text-left">Total</th>
                                <th className="border px-4 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">15 Okt 2025</td>
                                <td className="border px-4 py-2">TRX001</td>
                                <td className="border px-4 py-2">Keyboard Mechanical</td>
                                <td className="border px-4 py-2">2</td>
                                <td className="border px-4 py-2">Rp 700.000</td>
                                <td className="border px-4 py-2 text-green-600 font-medium">Selesai</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">15 Okt 2025</td>
                                <td className="border px-4 py-2">TRX002</td>
                                <td className="border px-4 py-2">Mouse Logitech</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">Rp 250.000</td>
                                <td className="border px-4 py-2 text-yellow-600 font-medium">Pending</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="border px-4 py-2">14 Okt 2025</td>
                                <td className="border px-4 py-2">TRX003</td>
                                <td className="border px-4 py-2">Monitor 24”</td>
                                <td className="border px-4 py-2">1</td>
                                <td className="border px-4 py-2">Rp 1.500.000</td>
                                <td className="border px-4 py-2 text-green-600 font-medium">Selesai</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
