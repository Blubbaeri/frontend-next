"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAuthToken } from "@/utils/auth";

interface UserProfile {
  name: string;
  email: string;
  photo: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Budi Santoso",
    email: "admin@email.com",
    photo: "/default-avatar.png",
  });

  const [form, setForm] = useState<UserProfile>({ ...profile });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      // TODO: Fetch user data dari backend pake token
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setError("Nama dan email harus diisi!");
      return;
    }
    setProfile({ ...form });
    setSuccess("Profil berhasil diperbarui!");
    setError("");
    setIsModalOpen(false); // tutup modal
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>

      {/* 📋 Card Profil */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md flex items-center gap-6 justify-between">
        <div className="flex items-center gap-6">
          <img
            src={profile.photo}
            alt="Foto Profil"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h2 className="text-lg font-semibold mb-1">{profile.name}</h2>
            <p className="text-gray-700">{profile.email}</p>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Edit Profil
        </button>
      </div>

      {/* 🪟 Modal Edit Profil */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
            >
              <h2 className="text-lg font-semibold mb-3">Edit Profil</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Foto Profil
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="block text-sm text-gray-700"
                  />
                  {form.photo && (
                    <img
                      src={form.photo}
                      alt="Preview"
                      className="w-20 h-20 rounded-full object-cover mt-2 border border-gray-300"
                    />
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Nama
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 block mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>

                {error && <p className="text-red-600 text-sm">{error}</p>}
                {success && <p className="text-green-600 text-sm">{success}</p>}

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
