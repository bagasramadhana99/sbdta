"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-100 text-center p-6">
      <Navbar />

      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th?id=OIP.91zi88JZ9SdfiADPI7wciAHaEK&pid=Api&P=0&h=180')",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md" />
        <div className="relative text-center text-gray-800">
          <h1 className="text-5xl font-bold">MANUK</h1>
          <p className="text-lg">Makan Enak Yuk</p>
        </div>
      </section>

      <section className="text-center py-16">
        <h2 className="text-2xl font-bold mb-6">Mau Manuk Apa Hari Ini?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "bacon", title: "Sarapan", desc: "Deskripsi sarapan..." },
            { icon: "pizza-slice", title: "Makan Berat", desc: "Deskripsi makan berat..." },
            { icon: "coffee", title: "Minum", desc: "Deskripsi minuman..." },
            { icon: "cookie-bite", title: "Cemilan", desc: "Deskripsi cemilan..." },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md w-56 text-center">
              <i className={`fas fa-${item.icon} text-4xl mb-3`}></i>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <Link
                href="/menu"
                className="mt-3 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Explore Menu
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://cdn1.katadata.co.id/media/images/thumb/2023/07/06/Makanan_Tradisional_Jawa_Tengah-2023_07_06-10_21_56_3c74e9220acd00e2bd610bd629109f02_960x640_thumb.png"
            alt="Rekomendasi Menu"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold">Rekomendasi Menu untuk Manuk hari ini</h2>
            <p className="text-gray-600 mt-4">
              Nikmati sajian spesial yang kami rekomendasikan hari ini. Dibuat dengan bahan pilihan untuk memastikan rasa terbaik di setiap suapan.
            </p>
            <Link
              href="/menu"
              className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Artikel Makanan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://rinaresep.com/wp-content/uploads/2022/08/ayam-taliwang.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-500 text-sm">January 3, 2023</p>
                  <h3 className="font-bold text-lg">Judul Artikel {idx + 1}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
