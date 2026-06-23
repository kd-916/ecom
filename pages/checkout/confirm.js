import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Confirm() {
  return (
    <CheckoutLayout title="Confirm Order">
      <p className="text-gray-500 mb-8">
        Check your details before placing order.
      </p>

      <Link href="/checkout/success" className="btn">
        Confirm Order
      </Link>
    </CheckoutLayout>
  );
}
