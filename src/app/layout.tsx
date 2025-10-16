import "./globals.css";
import Navbar from "@/Component/Navbar";

export const metadata = {
    title: "Peminjaman Alat Produksi",
    description: "Website prototype peminjaman alat produksi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body className="bg-purple-50 text-gray-800">
                <Navbar />
                <main className="p-6">{children}</main>
            </body>
        </html>
    );
}
