"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    title: "Pizza Sarapan",
    category: "sarapan",
    image: "https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg",
    description: "Resep Pizza Sarapan...",
  },
  {
    id: 2,
    title: "Pizza Makan Berat",
    category: "makanBerat",
    image: "https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg",
    description: "Resep Pizza Makan Berat...",
  },
  {
    id: 3,
    title: "Pizza Minum",
    category: "minum",
    image: "https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg",
    description: "Resep Pizza Minum...",
  },
  {
    id: 4,
    title: "Pizza Cemilan",
    category: "cemilan",
    image: "https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg",
    description: "Resep Pizza Cemilan...",
  },
];

export default function MenuPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState(""); // NEW
  const [modalContent, setModalContent] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const toggleFavorite = (title) => {
    let updated = [...favorites];
    if (favorites.includes(title)) {
      updated = updated.filter((fav) => fav !== title);
    } else {
      updated.push(title);
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesFilter = filter === "all" || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="bg-gray-100 text-center p-6">
      <Navbar />

      <h2 className="text-4xl font-semibold mt-6">Menu Manuk</h2>
      <p className="text-gray-500 my-4">Deskripsi singkat tentang menu...</p>

      {/* Search Bar */}
      <div className="my-4">
        <input
          type="text"
          placeholder="Cari menu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex justify-center gap-4 my-6 flex-wrap">
        {["all", "sarapan", "makanBerat", "minum", "cemilan"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`px-4 py-2 rounded-full ${
              filter === cat
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <p className="my-4 font-semibold">DI KLIK MUNCUL POP UP RESEP</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow relative"
          >
            <button
              className={`absolute top-2 right-2 z-10 px-2 py-1 text-xs rounded ${
                favorites.includes(item.title)
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => toggleFavorite(item.title)}
            >
              Favorit
            </button>
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-md"
            />
            <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
            <button
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded"
              onClick={() => openModal(item)}
            >
              Explore Menu
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-3/4 sm:w-1/2 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{modalContent.title}</h2>
            <p className="text-gray-700 mb-6">{modalContent.description}</p>
            <button
              onClick={closeModal}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
