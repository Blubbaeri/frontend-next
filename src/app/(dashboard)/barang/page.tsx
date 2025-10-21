"use client";
import React, { useState, useEffect } from "react";
import FormBarang from "@/components/FormBarang";
import TableBarang from "@/components/TabelBarang";

interface Barang {
  id: string;
  nama: string;
  kategori: string;
  qty: number; // Tetap number
  satuan: string;
  status: string;
}

export default function BarangPage() {
  const [barangList, setBarangList] = useState<Barang[]>([
    { id: "A001", nama: "Laptop ASUS", kategori: "Elektronik", qty: 5, satuan: "Unit", status: "Tersedia" },
    { id: "A002", nama: "Proyektor", kategori: "Elektronik", qty: 2, satuan: "Unit", status: "Dipinjam" },
  ]);
  const [filterKategori, setFilterKategori] = useState<string>("Semua");

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

  const handleAddBarang = (barangBaru: Barang) => {
    setBarangList([...barangList, barangBaru]);
  };

  const handleUpdateStatus = (id: string, statusBaru: string) => {
    setBarangList((prevList) =>
      prevList.map((b) => (b.id === id ? { ...b, status: statusBaru } : b))
    );
  };

  const filteredBarang =
    filterKategori === "Semua"
      ? barangList
      : barangList.filter((b) => b.kategori === filterKategori);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Master Data Alat</h1>
      <div className="mb-4">
        <label className="mr-2">Filter Kategori:</label>
        <select
          value={filterKategori}
          onChange={(e) => setFilterKategori(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="Semua">Semua</option>
          <option value="Elektronik">Elektronik</option>
          <option value="Alat Tulis">Alat Tulis</option>
          <option value="Laboratorium">Laboratorium</option>
        </select>
      </div>
      <FormBarang onAddBarang={handleAddBarang} />
      <TableBarang data={filteredBarang} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
}