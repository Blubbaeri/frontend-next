
"use client";

import "../globals.css";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import { Bell, User, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePopper } from "react-popper";
import Link from "next/link"; // Tambah import Link

const inter = Inter({ subsets: ["latin"] });

const notifications = [
  { id: 1, icon: "🔔", message: "3 notifikasi baru", time: "5 menit lalu", unread: true },
  { id: 2, icon: "📅", message: "Jadwal peminjaman hari ini", time: "1 jam lalu", unread: false },
  { id: 3, icon: "✅", message: "Transaksi berhasil", time: "2 jam lalu", unread: false },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isIntroPage = pathname.includes("/intro");

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

  // Sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle sidebar visibility based on screen size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Tutup sidebar di layar kecil
      } else {
        setIsSidebarOpen(true); // Buka sidebar di layar besar
      }
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when sidebar open on small screens
  useEffect(() => {
    if (typeof window === "undefined") return;
    const locked = isSidebarOpen && window.innerWidth < 768;
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  // Notif
  const [openNotif, setOpenNotif] = useState(false);
  const notifButtonRef = useRef<HTMLButtonElement>(null);
  const notifDropdownRef = useRef<HTMLDivElement>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(notifButtonRef.current, popperElement, {
    placement: "bottom-end",
    modifiers: [
      { name: "offset", options: { offset: [0, 8] } },
      { name: "preventOverflow", options: { padding: 8 } },
    ],
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifDropdownRef.current &&
        !notifDropdownRef.current.contains(event.target as Node) &&
        notifButtonRef.current &&
        !notifButtonRef.current.contains(event.target as Node)
      ) {
        setOpenNotif(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setOpenNotif(false);
      notifButtonRef.current?.focus();
    }
  };

  const unreadCount = notifications.filter((notif) => notif.unread).length;

  const closeSidebar = () => setIsSidebarOpen(false);

  // Hardcode tahun
  const currentYear = 2025;

  return (
    <html lang="id">
      <body className={`${inter.className} h-screen flex bg-gray-100 text-gray-800`}>
        {isIntroPage ? (
          <div className="w-screen h-screen overflow-hidden">{children}</div>
        ) : (
          <div className="flex flex-1 h-screen relative">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.45 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="fixed inset-0 bg-black z-30 md:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                />
              )}
            </AnimatePresence>
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative z-0">
              <div className="bg-white shadow px-6 py-4 flex items-center justify-between relative">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsSidebarOpen((s) => !s)}
                    className="p-2 rounded-md hover:bg-gray-100 transition md:hidden"
                    aria-label={isSidebarOpen ? "Tutup sidebar" : "Buka sidebar"}
                  >
                    <Menu size={18} />
                  </button>
                  <h1 className="text-lg font-semibold">Dashboard Sistem</h1>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative flex items-center">
                    <button
                      ref={notifButtonRef}
                      aria-label="Buka atau tutup notifikasi"
                      aria-expanded={openNotif}
                      className="relative hover:text-purple-600 transition flex items-center focus:outline-none focus:ring-2 focus:ring-purple-600"
                      onClick={() => setOpenNotif(!openNotif)}
                      onKeyDown={handleKeyDown}
                    >
                      <Bell size={22} className="translate-y-[1px]" />
                      {unreadCount > 0 && (
                        <span className="absolute -top-0.5 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                          {unreadCount}
                        </span>
                      )}
                    </button>
                    <AnimatePresence>
                      {openNotif && (
                        <motion.div
                          ref={(el) => {
                            notifDropdownRef.current = el;
                            setPopperElement(el);
                          }}
                          className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-80 max-w-[90vw] z-50"
                          style={styles.popper}
                          {...attributes.popper}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          tabIndex={-1}
                          onKeyDown={handleKeyDown}
                        >
                          <h3 className="text-sm font-semibold text-gray-800 mb-3">
                            Notifikasi
                          </h3>
                          {notifications.length === 0 ? (
                            <p className="text-sm text-gray-500">Tidak ada notifikasi</p>
                          ) : (
                            notifications.map((notif) => (
                              <div
                                key={notif.id}
                                className="flex items-center gap-3 p-3  text-sm bg-white hover:bg-purple-100 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-600"
                                tabIndex={0}
                                onClick={() => {
                                  console.log(`Clicked: ${notif.message}`);
                                  setOpenNotif(false);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    console.log(`Clicked: ${notif.message}`);
                                    setOpenNotif(false);
                                  }
                                }}
                              >
                                <span>{notif.icon}</span>
                                <div className="flex-1">
                                  <p className="text-gray-700">{notif.message}</p>
                                  <p className="text-xs text-gray-400">{notif.time}</p>
                                </div>
                                {notif.unread && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                                )}
                              </div>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="relative flex items-center">
                    <Link
                      href="/profile"
                      className="cursor-pointer hover:text-purple-600 transition"
                      aria-label="Buka profil"
                    >
                      <User size={22} />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-purple-50 overflow-auto p-8">{children}</div>
              <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-200 bg-white">
                © {currentYear} Web Peminjaman — Next.js + Tailwind
              </footer>
            </main>
          </div>
        )}
      </body>
    </html>
  );
}