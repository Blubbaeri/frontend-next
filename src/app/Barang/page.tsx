"use client";
import CardBarang from "@/Component/CardBarang";
import { useState } from "react";

export default function Barang() {
    const [barang, setBarang] = useState([
        { id: 1, nama: "Bor Listrik", stok: 3 },
        { id: 2, nama: "Gergaji Mesin", stok: 5 },
        { id: 3, nama: "Mesin Las", stok: 2 },
    ]);

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Daftar Alat Produksi</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {barang.map((item) => (
                    <CardBarang key={item.id} nama={item.nama} stok={item.stok} />
                ))}
            </div>
        </div>
    );
}
