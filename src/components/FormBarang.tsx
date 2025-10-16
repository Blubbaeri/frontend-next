"use client";
import React, { useState } from "react";

// 🔹 Definisikan tipe data Barang
interface Barang {
    id: string;
    nama: string;
    kategori: string;
    qty: number | string; // bisa number (dari input type="number") atau string
    satuan: string;
    status: string;
}

// 🔹 Definisikan props untuk komponen FormBarang
interface FormBarangProps {
    onAddBarang: (barang: Barang) => void;
}

export default function FormBarang({ onAddBarang }: FormBarangProps) {
    const [form, setForm] = useState<Barang>({
        id: "",
        nama: "",
        kategori: "",
        qty: "",
        satuan: "",
        status: "Tersedia",
    });

    // 🔹 Tangani perubahan input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // 🔹 Tangani submit form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.id || !form.nama) {
            alert("Isi semua data!");
            return;
        }

        // pastikan qty dikonversi ke number jika ingin konsisten
        const barangBaru = { ...form, qty: Number(form.qty) };
        onAddBarang(barangBaru);

        // reset form
        setForm({ id: "", nama: "", kategori: "", qty: "", satuan: "", status: "Tersedia" });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-gray-50">
            <h2 className="text-lg font-semibold mb-3">Tambah Alat</h2>

            <div className="grid grid-cols-2 gap-3">
                <input
                    name="id"
                    placeholder="ID Alat"
                    value={form.id}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="nama"
                    placeholder="Nama Alat"
                    value={form.nama}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="kategori"
                    placeholder="Kategori"
                    value={form.kategori}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="qty"
                    placeholder="Qty"
                    type="number"
                    value={form.qty}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <input
                    name="satuan"
                    placeholder="Satuan"
                    value={form.satuan}
                    onChange={handleChange}
                    className="border p-2 rounded"
                />
                <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="border p-2 rounded"
                >
                    <option value="Tersedia">Tersedia</option>
                    <option value="Dipinjam">Dipinjam</option>
                    <option value="Rusak">Rusak</option>
                </select>
            </div>

            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Tambah
            </button>
        </form>
    );
}
