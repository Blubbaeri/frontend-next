interface CardProps {
    nama: string;
    stok: number;
}

export default function CardBarang({ nama, stok }: CardProps) {
    return (
        <div className="bg-white p-4 shadow rounded-lg text-center border border-purple-200">
            <h3 className="font-semibold text-purple-700">{nama}</h3>
            <p className="text-gray-600">Stok: {stok}</p>
        </div>
    );
}
