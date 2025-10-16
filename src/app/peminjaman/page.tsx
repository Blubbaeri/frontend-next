"use client";
import React, { useState } from "react";

interface Peminjaman {
    id: string;
    namaPeminjam: string;
    barang: string;
    tanggalPinjam: string;
    tanggalKembali: string;
    status: string;
}

export default function PeminjamanPage() {
    const [peminjamanList, setPeminjamanList] = useState<Peminjaman[]>([
        {
            id: "PMJ001",
            namaPeminjam: "Budi Santoso",
            barang: "Laptop ASUS",
            tanggalPinjam: "2025-10-10",
            tanggalKembali: "2025-10-15",
            status: "Dipinjam",
        },
        {
            id: "PMJ002",
            namaPeminjam: "Siti Aminah",
            barang: "Proyektor",
            tanggalPinjam: "2025-10-12",
            tanggalKembali: "2025-10-14",
            status: "Dikembalikan",
        },
    ]);

    const handleUbahStatus = (id: string, statusBaru: string) => {
        setPeminjamanList((prev) =>
            prev.map((p) => (p.id === id ? { ...p, status: statusBaru } : p))
        );
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Daftar Peminjaman Barang</h1>

            <table className="w-full border border-gray-300 bg-white shadow-sm rounded-lg">
                <thead className="bg-indigo-600 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">ID</th>
                        <th className="px-4 py-2 text-left">Nama Peminjam</th>
                        <th className="px-4 py-2 text-left">Barang</th>
                        <th className="px-4 py-2 text-left">Tanggal Pinjam</th>
                        <th className="px-4 py-2 text-left">Tanggal Kembali</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-center">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {peminjamanList.map((p) => (
                        <tr key={p.id} className="border-t hover:bg-gray-50">
                            <td className="px-4 py-2">{p.id}</td>
                            <td className="px-4 py-2">{p.namaPeminjam}</td>
                            <td className="px-4 py-2">{p.barang}</td>
                            <td className="px-4 py-2">{p.tanggalPinjam}</td>
                            <td className="px-4 py-2">{p.tanggalKembali}</td>
                            <td className="px-4 py-2 font-semibold">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${p.status === "Dipinjam"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : "bg-green-100 text-green-700"
                                        }`}
                                >
                                    {p.status}
                                </span>
                            </td>
                            <td className="px-4 py-2 text-center">
                                {p.status === "Dipinjam" && (
                                    <button
                                        onClick={() => handleUbahStatus(p.id, "Dikembalikan")}
                                        className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                                    >
                                        Tandai Kembali
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
