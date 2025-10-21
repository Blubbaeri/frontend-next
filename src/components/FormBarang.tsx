"use client";
import React, { useState, useEffect } from "react";

interface Barang {
  id: string;
  nama: string;
  kategori: string;
  qty: number; // Ubah ke number
  satuan: string;
  status: string;
}

interface FormBarangProps {
  onAddBarang: (barang: Barang) => void;
}

export default function FormBarang({ onAddBarang }: FormBarangProps) {
  const [form, setForm] = useState<Barang>({
    id: "",
    nama: "",
    kategori: "",
    qty: 0, // Ubah ke 0 (number), bukan ""
    satuan: "",
    status: "Tersedia",
  });

  // Cleanup atribut Bitwarden
  useEffect(() => {
    document.querySelectorAll('[bis_skin_checked]').forEach((el) => {
      el.removeAttribute('bis_skin_checked');
    });
    document.querySelectorAll('[__processed_531946c1-2ab7-41d0-a706-1446dca4a370__]').forEach((el) => {
      el.removeAttribute('__processed_531946c1-2ab7-41d0-a706-1446dca4a370__');
    });
    document.querySelectorAll('[bis_register]').forEach((el) => {
      el.removeAttribute('bis_register');
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "qty" ? Number(value) : value, // Konversi qty ke number
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.id || !form.nama) {
      alert("Isi semua data!");
      return;
    }

    // qty udah number dari state, gak perlu konversi lagi
    const barangBaru = { ...form };
    onAddBarang(barangBaru);

    // Reset form
    setForm({ id: "", nama: "", kategori: "", qty: 0, satuan: "", status: "Tersedia" });
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