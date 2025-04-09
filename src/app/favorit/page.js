"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function FavoritPage() {
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (title) => {
    const updated = favorites.filter((item) => item !== title);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <main className="bg-gray-100 text-center p-6">
      <Navbar />

      <h2 className="text-4xl font-semibold mt-6">Favorit</h2>
      <p className="text-gray-500 my-4">Daftar menu yang telah ditandai sebagai favorit</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto" id="favoritesContainer">
        {favorites.length === 0 ? (
          <p className="text-gray-600 col-span-full">Belum ada favorit yang dipilih.</p>
        ) : (
          favorites.map((title, idx) => (
            <div key={idx} className="menuItem bg-white p-4 rounded-lg shadow relative">
              <button
                className="absolute top-2 right-2 z-10 bg-yellow-500 text-white px-2 py-1 text-xs rounded"
                onClick={() => removeFavorite(title)}
              >
                Hapus
              </button>
              <img
                src="https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg"
                alt={title}
                className="w-full rounded-md"
              />
              <h3 className="text-lg font-semibold mt-4">{title}</h3>
              <button
                className="mt-2 w-full bg-blue-500 text-white py-2 rounded"
                onClick={() => setSelected({ title })}
              >
                Explore Menu
              </button>
            </div>
          ))
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-3/4 sm:w-1/2 md:w-1/3">
            <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>
            <p className="text-gray-700 mb-6">Resep {selected.title}...</p>
            <button
              onClick={() => setSelected(null)}
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
