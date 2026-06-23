import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'; // MUST BE HERE
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </CartProvider>
  );
}