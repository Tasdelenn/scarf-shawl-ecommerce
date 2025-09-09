import React from 'react';

// Bu App.tsx dosyası, Tailwind CSS entegrasyonunu ve projenizin
// genel minimalist tasarımını test etmek için ilk bileşenimizdir.
// Minimal bir sayfa yapısı oluşturuyoruz.
function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white p-4 font-sans text-gray-800 antialiased">
      {/* Başlık Bölümü */}
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl">
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #FFD1DC, #AEC6CF)' }}>
            Minimal
          </span>{" "}
          <span className="block sm:inline-block">Scarf Store</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Elegance in Every Thread.
        </p>
      </header>

      {/* Ana İçerik Bölümü - Ürün Kartları Örneği */}
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Her bir div, bir ürün kartını temsil eder. */}
          <div className="transform rounded-xl bg-gray-50 p-6 shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700">Pastel Pink Scarf</h2>
            <p className="mt-2 text-gray-600">
              A light and breezy scarf in a beautiful pastel pink.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">$29.99</span>
              <span className="inline-block h-6 w-6 rounded-full bg-pastel-pink"></span>
            </div>
          </div>

          <div className="transform rounded-xl bg-gray-50 p-6 shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700">Sky Blue Shawl</h2>
            <p className="mt-2 text-gray-600">
              A soft, serene shawl for a calm, elegant look.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">$34.99</span>
              <span className="inline-block h-6 w-6 rounded-full bg-pastel-blue"></span>
            </div>
          </div>

          <div className="transform rounded-xl bg-gray-50 p-6 shadow-lg transition-transform duration-300 hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-700">Mint Green Scarf</h2>
            <p className="mt-2 text-gray-600">
              Add a touch of nature with this refreshing mint green.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-bold text-gray-900">$27.50</span>
              <span className="inline-block h-6 w-6 rounded-full bg-pastel-green"></span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bölümü */}
      <footer className="mt-12 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Minimal Scarf Store. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
