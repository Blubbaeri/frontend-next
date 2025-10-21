"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type SidebarProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

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

  // Cek mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

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
    <motion.aside
      initial={false}
      animate={{ x: isOpen ? 0 : "-100%", opacity: isOpen ? 1 : 0 }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className="w-64 bg-gray-900 text-white flex flex-col justify-between shadow-lg fixed md:static h-full z-40"
      aria-hidden={!isOpen && isMobile}
    >
      <div>
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">📦 Inventori</h2>
          <button
            onClick={() => onClose?.()}
            className="p-2 rounded-md hover:bg-gray-800 md:hidden"
            aria-label="Tutup sidebar"
          >
            ✕
          </button>
        </div>

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
                    className={`block px-4 py-2 rounded-lg font-semibold transition ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "text-gray-300 hover:bg-indigo-600 hover:text-white"
                    }`}
                    onClick={() => {
                      if (isMobile) onClose?.();
                    }}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Keluar
        </button>
      </div>
    </motion.aside>
  );
}