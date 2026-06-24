'use client';

import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const { clearCart } = useCart();
  const router = useRouter();

  const handleConfirmOrder = () => {
    clearCart();
    router.push("/checkout/success");
  };

  return (
    <CheckoutLayout title="Confirm Order">
      <p className="text-gray-500 mb-8">
        Check your details before placing order.
      </p>

      <div className="flex justify-between items-center mt-6">
        <Link
          href="/checkout/email"
          className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium"
        >
          ← Back
        </Link>

        <button
          onClick={handleConfirmOrder}
          className="btn"
        >
          Confirm Order
        </button>
      </div>
    </CheckoutLayout>
  );
}