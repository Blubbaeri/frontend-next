"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cropper from "react-easy-crop";
import { getAuthToken } from "@/utils/auth";

interface UserProfile {
  name: string;
  email: string;
  photo: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Arsalan Muflih",
    email: "admin@email.com",
    photo: "/default-avatar.png",
  });

  const [form, setForm] = useState<UserProfile>({ ...profile });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // cropper
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      // TODO: fetch profile from backend pake token
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
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // cropper helper
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });

  const getCroppedImg = async (imageSrc: string, pixelCrop: any): Promise<string | null> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));
    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.drawImage(
      image,
      safeArea / 2 - image.width / 2,
      safeArea / 2 - image.height / 2
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width / 2 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height / 2 - pixelCrop.y)
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) return resolve(null);
        resolve(URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      setError("Nama dan email harus diisi!");
      return;
    }

    let newPhoto = form.photo;
    if (image && croppedAreaPixels) {
      const cropped = await getCroppedImg(image, croppedAreaPixels);
      if (cropped) newPhoto = cropped;
    }

    setProfile({
      name: form.name,
      email: form.email,
      photo: newPhoto,
    });

    setSuccess("Profil berhasil diperbarui!");
    setError("");
    setImage(null);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profil Saya</h1>

      {/* Profil Card */}
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

      {/* Modal Edit Profil */}
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
                {/* Foto Profil */}
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
                  {form.photo && !image && (
                    <img
                      src={form.photo}
                      alt="Preview"
                      className="w-20 h-20 rounded-full object-cover mt-2 border border-gray-300 mx-auto"
                    />
                  )}
                </div>

                {image && (
                  <div className="relative w-full h-64 bg-black mt-3 rounded-lg overflow-hidden">
                    <Cropper
                      image={image}
                      crop={crop}
                      zoom={zoom}
                      aspect={1}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                    />
                  </div>
                )}

                {/* Input nama & email */}
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
