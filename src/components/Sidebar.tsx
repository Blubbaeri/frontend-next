"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const menuItems = [
        { name: "Dashboard", icon: "🏠", href: "/Dashboard" },
        { name: "Barang", icon: "📋", href: "/barang" },
        { name: "Peminjaman", icon: "🔄", href: "/peminjaman" },
        { name: "Riwayat", icon: "🕓", href: "/riwayat" },
    ];

    const handleLogout = () => {
        router.push("/");

    };

    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between shadow-lg">
            <div>
                {/* Header Sidebar */}
                <div className="p-6 border-b border-gray-700">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        📦 Inventori
                    </h2>
                </div>

                {/* Menu Navigasi */}
                <nav className="p-4">
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const isActive =
                                pathname === item.href ||
                                (item.href !== "/" && pathname.startsWith(item.href));

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`block px-4 py-2 rounded-lg font-semibold transition ${isActive
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-300 hover:bg-indigo-600 hover:text-white"
                                            }`}
                                    >
                                        {item.icon} {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* Tombol Logout */}
            <div className="p-4 border-t border-gray-700">
                <button
                    onClick={handleLogout}
                    className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                    Keluar
                </button>
            </div>
        </aside>
    );
}
