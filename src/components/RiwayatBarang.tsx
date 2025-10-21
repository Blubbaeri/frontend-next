interface RiwayatProps {
    nama: string;
    peminjam: string;
    tanggal: string;
}

export default function RiwayatBarang({ nama, peminjam, tanggal }: RiwayatProps) {
    return (
        <div className="bg-white p-3 rounded-lg shadow border border-purple-200">
            <p className="font-semibold text-purple-700">{nama}</p>
            <p className="text-gray-600 text-sm">
                Dipinjam oleh {peminjam} pada {tanggal}
            </p>
        </div>
    );
}
