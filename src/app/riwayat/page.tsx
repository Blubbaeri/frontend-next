"use client";
import RiwayatBarang from "@/components/RiwayatBarang";

export default function Riwayat() {
    const data = [
        { id: 1, nama: "Bor Listrik", peminjam: "Bevin", tanggal: "12 Okt 2025" },
        { id: 2, nama: "Gergaji Mesin", peminjam: "Andi", tanggal: "13 Okt 2025" },
    ];

    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Riwayat Peminjaman</h2>
            <div className="space-y-3">
                {data.map((item) => (
                    <RiwayatBarang
                        key={item.id}
                        nama={item.nama}
                        peminjam={item.peminjam}
                        tanggal={item.tanggal}
                    />
                ))}
            </div>
        </section>
    );
}
