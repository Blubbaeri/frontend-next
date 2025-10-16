"use client";
import React from "react";

// 🔹 Definisikan tipe data barang
interface Barang {
    id: string;
    nama: string;
    kategori: string;
    qty: number;
    satuan: string;
    status: string;
}

// 🔹 Definisikan props untuk komponen
interface TableBarangProps {
    data: Barang[];
    onUpdateStatus: (id: string, statusBaru: string) => void;
}

export default function TableBarang({ data, onUpdateStatus }: TableBarangProps) {
    return (
        <table className="w-full border-collapse border">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Nama Alat</th>
                    <th className="border p-2">Kategori</th>
                    <th className="border p-2">Qty</th>
                    <th className="border p-2">Satuan</th>
                    <th className="border p-2">Status</th>
                    <th className="border p-2">Aksi</th>
                </tr>
            </thead>

            <tbody>
                {data.map((b, i) => (
                    <tr key={i} className="text-center">
                        <td className="border p-2">{b.id}</td>
                        <td className="border p-2">{b.nama}</td>
                        <td className="border p-2">{b.kategori}</td>
                        <td className="border p-2">{b.qty}</td>
                        <td className="border p-2">{b.satuan}</td>
                        <td className="border p-2">{b.status}</td>
                        <td className="border p-2">
                            <select
                                value={b.status}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                    onUpdateStatus(b.id, e.target.value)
                                }
                                className="border rounded px-1 py-0.5"
                            >
                                <option value="Tersedia">Tersedia</option>
                                <option value="Dipinjam">Dipinjam</option>
                                <option value="Rusak">Rusak</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
