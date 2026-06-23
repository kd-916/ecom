import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { toast, Bounce } from "react-toastify";

export default function ProductDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      slug: "meridian-signature-coat",
      name: "Meridian Signature Coat",
      price: "₹245.00",
      img: "https://www.rizvol.com/cdn/shop/files/1_06bfdce9-0eab-4ca1-9595-4d69e0c49e50.jpg?v=1773263123&width=1920",
    },
    {
      id: 2,
      slug: "wool-blend-sweater",
      name: "Wool Blend Sweater",
      price: "₹120.00",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPt2h7Q8ifZvG0G4s7CoJP6VLd61NruF9DzWqRPmZcwGaGgXFsLMOWKoRhCqRcsmGlubhSvkafGtOpKhf86zlmQAPBpYWgANv8HWbqypBG1iqON9S6rw&usqp=CAc",
    },
    {
      id: 3,
      slug: "classic-oxford-shirt",
      name: "Classic Oxford Shirt",
      price: "₹85.00",
      img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/3a2365be06338b38469387644b409679.jpg?v=1731388602&quality=80",
    },
    {
      id: 4,
      slug: "tailored-chinos",
      name: "Tailored Chinos",
      price: "₹95.00",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMDi364CabKMs2jIiggFSS_rYzsYfO40HhReSTmWygUnSOE3yGg_8aRFH9DR1z32QkaiZCCbYAKC6hgV-9yUBRSNZWNO0dEJsZOzCl_HGEx54nXrGQzHzM",
    },
    {
      id: 5,
      slug: "cashmere-scarf",
      name: "Cashmere Scarf",
      price: "₹65.00",
      img: "https://m.media-amazon.com/images/I/41kymekGyAL._AC_UY1100_.jpg",
    },
    {
      id: 6,
      slug: "leather-chelsea-boots",
      name: "Leather Chelsea Boots",
      price: "₹180.00",
      img: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1504146_lifestyle?₹rl_4x5_pdp₹",
    },
    {
      id: 7,
      slug: "silk-pocket-square",
      name: "Silk Pocket Square",
      price: "₹35.00",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRENq26h-6zcQGB0fQsvb8yrKT1CGwbdXc5vupYh2WERPrL0xygsx0EJ-dqd_ukQrvHlrIgSXHlbfxLSfkNRnKBF_Wp2ItmfflB1BpeZ-CU4xhg9zqquYcUkA",
    },
    {
      id: 8,
      slug: "linen-button-down",
      name: "Linen Button-Down",
      price: "₹75.00",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHo93H8-r2rrUaC-Oh_3u5xx0We3I7XvW18k50UwCa-czGdU-rsCMn9WLJHT5yqXAg9asUEiVvdV0_6EVRj2n8b_2tRQXH",
    },
    {
      id: 9,
      slug: "denim-trucker-jacket",
      name: "Denim Trucker Jacket",
      price: "₹130.00",
      img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSJPmKizf5ZSKkNqIUklkK-es_apqHDTliBkinS4SJwptK9o-zoy0qk3PqLbABx9R1QBYsuXRYNnHaoYmplaHhtbm3IY3sUnedr76J5ggyzCc0CwZ_UGvo9RYA://images.pexels.com/photos/1040893/pexels-photo-1040893.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 10,
      slug: "pleated-trousers",
      name: "Pleated Trousers",
      price: "₹110.00",
      img: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 11,
      slug: "ribbed-knit-beanie",
      name: "Ribbed Knit Beanie",
      price: "₹40.00",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTXnBLa4n9pG5uUmBaK6vNM_HJhU5FsjmsnPKQpCN3ENqet02spjAGbbtKC3fENE3PppV4YOzatJMghNChaRjj9hwvfSxqvmQ",
    },
    {
      id: 12,
      slug: "suede-loafers",
      name: "Suede Loafers",
      price: "₹165.00",
      img: "https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 13,
      slug: "merino-polo-shirt",
      name: "Merino Polo Shirt",
      price: "₹90.00",
      img: "https://tigc.in/cdn/shop/files/0825-PLPNHS-M-10-1_7.jpg?v=1780030821&width=360",
    },
    {
      id: 14,
      slug: "cotton-canvas-tote",
      name: "Cotton Canvas Tote",
      price: "₹55.00",
      img: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 15,
      slug: "minimalist-watch",
      name: "Minimalist Watch",
      price: "₹210.00",
      img: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 16,
      slug: "slim-fit-jeans",
      name: "Slim Fit Jeans",
      price: "₹125.00",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRmWJwC8UJ_CWXPO1NdTswdTcHQ3uVOXynm8qlMrP_oS_HDlzLNFebpl7rwHZ4ffMMOxpcz6NVG1vbm9Wvut2eU1qWxJEelVxojSoCIS9z2GKqWgCIGUzuVmQ",
    },
    {
      id: 17,
      slug: "quilted-vest",
      name: "Quilted Vest",
      price: "₹140.00",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT4COwdkemycCbBIzmZIna-e2IlhCTtuVwFKDCcSnVsmsPd7ipv1SWGY9G26KQRM2APyQBf9aAaVTNSqkQiQhESukss6lVtnqHGx5eSMlNhmuShBQ4_vsJaGQ",
    },
    {
      id: 18,
      slug: "corduroy-overshirt",
      name: "Corduroy Overshirt",
      price: "₹115.00",
      img: "https://images.pexels.com/photos/3724358/pexels-photo-3724358.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 19,
      slug: "classic-trench-coat",
      name: "Classic Trench Coat",
      price: "₹295.00",
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSocs1KHh6HVSs-jNtCO-JsCK6wrmhV688MyJXWiGadBAXu-Hfv7gs39YR8BuqIi5695JpNO6y2oPlo503Bczs3Pyb2dXoFXbT_vuMNs-Qgu1iNtA-jCNiEHQ",
    },
    {
      id: 20,
      slug: "leather-belt",
      name: "Leather Belt",
      price: "₹60.00",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTGZMQqEGQXrEW_izdC-OAp5kGD31oW0CBUmQHUzgCygGmD6XDtGNeFVEQtxjFa8uJAssS2kaOndQrIvhLCXHXlkXwkF9ry97zO8mAsN80o0yLlHWU3B7KIpwI",
    },
  ];

  // ALL HOOKS GRANTED IMMUTABLE TOP-LEVEL SPACE HERE:
  const [randomProducts, setRandomProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (slug) {
      const otherProducts = products.filter((p) => p.slug !== slug);
      const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 4));
    }
  }, [slug]);

  // Handlers
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // STEP 1: Wait for Next.js router
  if (!router.isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <p className="text-[#0a122c] uppercase tracking-widest text-sm font-bold animate-pulse">
          Loading Collection...
        </p>
      </div>
    );
  }

  // STEP 2: Array calculation
  const product = products.find((p) => p.slug === slug);

  // STEP 3: Handle empty match
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] text-center px-6">
        <h2 className="text-[#0a122c] text-2xl font-bold uppercase tracking-widest mb-4">
          Product Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 max-w-sm">
          We couldn't find an item matching{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-red-500 font-mono">
            "{slug}"
          </code>
          . Make sure your homepage passes the slug name instead of the numeric ID!
        </p>
        <Link href="/">
          <button className="bg-[#0a122c] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#1a254c]">
            Return to Shop
          </button>
        </Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/checkout/name");
  };

  return (
    <>
      <Head>
        <title>{product.name} | Meridian</title>
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
        className="breathing-bg min-h-screen w-full flex flex-col items-center px-6 md:px-16 pt-32 pb-24"
        style={{
          background:
            "linear-gradient(-45deg, #ffffff, #e0e7ff, #ffffff, #e2e8f0)",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto mb-8">
          <Link
            href="/"
            className="text-gray-400 hover:text-[#0a122c] text-0.5xl uppercase tracking-widest transition-colors"
          >
            ← Back to Collection
          </Link>
        </div>

        <div className="z-20 w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/50">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col pt-4 md:pt-10">
            <h1 className="text-[#0a122c] text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-500 text-xl md:text-2xl font-medium tracking-wide mb-8">
              {product.price}
            </p>

            <div className="w-16 h-[1px] bg-gray-300 mb-8"></div>

            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-10">
              Experience unparalleled craftsmanship. Designed with an unwavering
              attention to detail, this piece represents the pinnacle of modern
              sartorial elegance. Constructed using premium sourced materials to
              ensure a flawless drape and exceptional longevity in your
              wardrobe.
            </p>

            <div className="flex flex-col mb-10">
              <span className="text-xs font-bold text-[#0a122c] uppercase tracking-widest mb-4">
                Quantity
              </span>
              <div className="flex items-center border border-gray-300 rounded-full w-36 h-12">
                <button
                  onClick={decrement}
                  className="w-1/3 h-full flex items-center justify-center text-gray-500 hover:text-[#0a122c] transition-colors"
                >
                  -
                </button>
                <span className="w-1/3 h-full flex items-center justify-center font-bold text-[#0a122c] text-sm">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="w-1/3 h-full flex items-center justify-center text-gray-500 hover:text-[#0a122c] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  addToCart(product, quantity);
                  toast("Product added to your cart", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                  });
                }}
                className="flex-1 bg-transparent border border-[#0a122c] text-[#0a122c] py-4 rounded-full font-bold uppercase tracking-widest text-[0.75rem] hover:bg-gray-50 transition-colors"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="flex-1 bg-[#0a122c] text-white py-4 rounded-full font-bold uppercase tracking-widest text-[0.75rem] hover:bg-[#1a254c] transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {randomProducts.length > 0 && (
          <div className="w-full max-w-[1200px] mx-auto mt-32 border-t border-gray-300/50 pt-16">
            <h2 className="text-[#0a122c] text-2xl font-black uppercase tracking-widest mb-10 text-center">
              Products You Might Like
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {randomProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/product/${p.slug}`}
                  className="group block"
                >
                  <div className="w-full aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden mb-4 shadow-sm border border-white/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-[#0a122c] font-bold text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}