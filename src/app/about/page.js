export default function AboutPage() {
    return (
      <main className="bg-gray-100 text-center p-6">
        <header className="flex justify-between items-center py-4 container mx-auto">
          <h1 className="text-2xl font-bold">Logo?</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600">Home</a>
            <a href="/about" className="bg-gray-200 px-4 py-1 rounded-full">About</a>
            <a href="/menu" className="text-gray-600">Menu</a>
            <a href="/favorit" className="text-gray-600">Favorit</a>
          </nav>
        </header>
  
        <section className="container mx-auto p-8 flex flex-col md:flex-row items-center">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.LBDJN1yKgiDnI1f4uvEN1wHaEJ&pid=Api&P=0&h=180"
            alt="About Image"
            className="w-full md:w-1/2 rounded shadow"
          />
          <div className="md:ml-8 mt-6 md:mt-0 text-left">
            <h2 className="text-4xl font-bold">Welelelelelelelelelelelele</h2>
            <p className="mt-4 text-gray-600">
              Deskripsi singkat tentang halaman ini yang menjelaskan tujuan dan informasi yang relevan.
            </p>
          </div>
        </section>
  
        <section className="bg-gray-200 py-12 text-center">
          <h3 className="text-3xl font-semibold">Yang Bikin Wengsite</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-20 h-20 bg-cover bg-center rounded-full"
                  style={{
                    backgroundImage:
                      "url('https://cdn.idntimes.com/content-images/community/2024/02/whatsapp-image-2024-02-28-at-55351-pm-770cbc2889bb4c14bf5042be7b505d5d-ddb9716e8831f6f7c20446c41ad8be6e.jpeg')",
                  }}
                ></div>
                <p className="mt-2">Zaki</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }
  