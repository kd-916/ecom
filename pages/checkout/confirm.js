import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Confirm() {
  return (
    <CheckoutLayout title="Confirm Order">
      <p className="text-gray-500 mb-8">
        Check your details before placing order.
      </p>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/email" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link href="/checkout/success" className="btn">
          Confirm Order
        </Link>
      </div>
    </CheckoutLayout>
  );
}