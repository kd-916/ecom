import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link"; // Mandatorily imported for smooth slug routing

export default function Home() {
  // Array updated with synchronized unique 'slug' properties matching your [slug].js page
  const products = [
    { id: 1, slug: "meridian-signature-coat", name: "Meridian Signature Coat", price: "₹245.00", img: "https://www.rizvol.com/cdn/shop/files/1_06bfdce9-0eab-4ca1-9595-4d69e0c49e50.jpg?v=1773263123&width=1920" },
    { id: 2, slug: "wool-blend-sweater", name: "Wool Blend Sweater", price: "₹120.00", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPt2h7Q8ifZvG0G4s7CoJP6VLd61NruF9DzWqRPmZcwGaGgXFsLMOWKoRhCqRcsmGlubhSvkafGtOpKhf86zlmQAPBpYWgANv8HWbqypBG1iqON9S6rw&usqp=CAc" },
    { id: 3, slug: "classic-oxford-shirt", name: "Classic Oxford Shirt", price: "₹85.00", img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/3a2365be06338b38469387644b409679.jpg?v=1731388602&quality=80" },
    { id: 4, slug: "tailored-chinos", name: "Tailored Chinos", price: "₹95.00", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMDi364CabKMs2jIiggFSS_rYzsYfO40HhReSTmWygUnSOE3yGg_8aRFH9DR1z32QkaiZCCbYAKC6hgV-9yUBRSNZWNO0dEJsZOzCl_HGEx54nXrGQzHzM" },
    { id: 5, slug: "cashmere-scarf", name: "Cashmere Scarf", price: "₹65.00", img: "https://m.media-amazon.com/images/I/41kymekGyAL._AC_UY1100_.jpg" },
    { id: 6, slug: "leather-chelsea-boots", name: "Leather Chelsea Boots", price: "₹180.00", img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1504146_lifestyle?₹rl_4x5_pdp₹" },
    { id: 7, slug: "silk-pocket-square", name: "Silk Pocket Square", price: "₹35.00", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRENq26h-6zcQGB0fQsvb8yrKT1CGwbdXc5vupYh2WERPrL0xygsx0EJ-dqd_ukQrvHlrIgSXHlbfxLSfkNRnKBF_Wp2ItmfflB1BpeZ-CU4xhg9zqquYcUkA" },
    { id: 8, slug: "linen-button-down", name: "Linen Button-Down", price: "₹75.00", img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHo93H8-r2rrUaC-Oh_3u5xx0We3I7XvW18k50UwCa-czGdU-rsCMn9WLJHT5yqXAg9asUEiVvdV0_6EVRj2n8b_2tRQXH" },
    { id: 9, slug: "denim-trucker-jacket", name: "Denim Trucker Jacket", price: "₹130.00", img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJPmKizf5ZSKkNqIUklkK-es_apqHDTliBkinS4SJwptK9o-zoy0qk3PqLbABx9R1QBYsuXRYNnHaoYmplaHhtbm3IY3sUnedr76J5ggyzCc0CwZ_UGvo9RYA://images.pexels.com/photos/1040893/pexels-photo-1040893.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 10, slug: "pleated-trousers", name: "Pleated Trousers", price: "₹110.00", img: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 11, slug: "ribbed-knit-beanie", name: "Ribbed Knit Beanie", price: "₹40.00", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXnBLa4n9pG5uUmBaK6vNM_HJhU5FsjmsnPKQpCN3ENqet02spjAGbbtKC3fENE3PppV4YOzatJMghNChaRjj9hwvfSxqvmQ" },
    { id: 12, slug: "suede-loafers", name: "Suede Loafers", price: "₹165.00", img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 13, slug: "merino-polo-shirt", name: "Merino Polo Shirt", price: "₹90.00", img: "https://tigc.in/cdn/shop/files/0825-PLPNHS-M-10-1_7.jpg?v=1780030821&width=360" },
    { id: 14, slug: "cotton-canvas-tote", name: "Cotton Canvas Tote", price: "₹55.00", img: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 15, slug: "minimalist-watch", name: "Minimalist Watch", price: "₹210.00", img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 16, slug: "slim-fit-jeans", name: "Slim Fit Jeans", price: "₹125.00", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmWJwC8UJ_CWXPO1NdTswdTcHQ3uVOXynm8qlMrP_oS_HDlzLNFebpl7rwHZ4ffMMOxpcz6NVG1vbm9Wvut2eU1qWxJEelVxojSoCIS9z2GKqWgCIGUzuVmQ" },
    { id: 17, slug: "quilted-vest", name: "Quilted Vest", price: "₹140.00", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4COwdkemycCbBIzmZIna-e2IlhCTtuVwFKDCcSnVsmsPd7ipv1SWGY9G26KQRM2APyQBf9aAaVTNSqkQiQhESukss6lVtnqHGx5eSMlNhmuShBQ4_vsJaGQ" },
    { id: 18, slug: "corduroy-overshirt", name: "Corduroy Overshirt", price: "₹115.00", img: "https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 19, slug: "classic-trench-coat", name: "Classic Trench Coat", price: "₹295.00", img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSocs1KHh6HVSs-jNtCO-JsCK6wrmhV688MyJXWiGadBAXu-Hfv7gs39YR8BuqIi5695JpNO6y2oPlo503Bczs3Pyb2dXoFXbT_vuMNs-Qgu1iNtA-jCNiEHQ" },
    { id: 20, slug: "leather-belt", name: "Leather Belt", price: "₹60.00", img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGZMQqEGQXrEW_izdC-OAp5kGD31oW0CBUmQHUzgCygGmD6XDtGNeFVEQtxjFa8uJAssS2kaOndQrIvhLCXHXlkXwkF9ry97zO8mAsN80o0yLlHWU3B7KIpwI" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <Head>
        <title>Meridian</title>
      </Head>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .breathing-bg {
          background-size: 200% 200%;
          animation: gradientMove 15s ease infinite;
        }
      `}</style>

      <main
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-4 md:px-12 pt-32 pb-24"
        style={{
          background: "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="z-20 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto">
          <h2 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-16 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 w-full mb-16">
            {currentProducts.map((product) => (
  <Link
    key={product.id}
    href={`/product/${product.slug}`}
    className="group bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 cursor-pointer"
  >
    {/* Product Image */}
    <div className="w-full aspect-[4/5] relative bg-gray-50 overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Product Details */}
    <div className="p-5 flex flex-col items-center text-center">
      <h3 className="text-[#0a122c] text-sm font-bold tracking-wide mb-1 uppercase line-clamp-1">
        {product.name}
      </h3>
      
      <p className="text-gray-500 mb-4 font-medium text-sm">
        {product.price}
      </p>

      {/* Faux Button (Using a div inside a Link prevents invalid HTML nesting) */}
      <div className="w-full bg-[#0a122c] text-white py-2.5 rounded-full font-bold uppercase tracking-widest text-[0.7rem] group-hover:bg-[#1a254c] transition-colors flex justify-center items-center">
        View Product
      </div>
    </div>
  </Link>
))}
          </div>

          {/* --- PAGINATION CONTROLS --- */}
          {totalPages > 1 && (
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors border ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0a122c] border-gray-200 hover:border-[#0a122c]"
                }`}
              >
                Prev
              </button>

              <div className="flex items-center space-x-2">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      currentPage === number
                        ? "bg-[#0a122c] text-white"
                        : "bg-white text-[#0a122c] border border-gray-200 hover:border-[#0a122c]"
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full font-semibold uppercase tracking-widest text-xs transition-colors border ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 border-gray-100 cursor-not-allowed"
                    : "bg-white text-[#0a122c] border-gray-200 hover:border-[#0a122c]"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}