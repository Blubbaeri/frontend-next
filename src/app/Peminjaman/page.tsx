"use client";
import { useState } from "react";

export default function Peminjaman() {
    const [namaPeminjam, setNamaPeminjam] = useState("");
    const [alat, setAlat] = useState("");
    const [pesan, setPesan] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setPesan(`Peminjaman alat "${alat}" oleh ${namaPeminjam} berhasil dicatat!`);
        setNamaPeminjam("");
        setAlat("");
    };

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Form Peminjaman</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                    type="text"
                    value={namaPeminjam}
                    onChange={(e) => setNamaPeminjam(e.target.value)}
                    placeholder="Nama peminjam"
                    className="w-full border border-gray-300 rounded-lg p-2"
                />
                <input
                    type="text"
                    value={alat}
                    onChange={(e) => setAlat(e.target.value)}
                    placeholder="Nama alat"
                    className="w-full border border-gray-300 rounded-lg p-2"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    Simpan
                </button>
            </form>
            {pesan && <p className="mt-4 text-green-600">{pesan}</p>}
        </section>
    );
}
