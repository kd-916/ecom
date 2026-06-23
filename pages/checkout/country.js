import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Country() {
  const [country, setCountry] = useState("");
  const isInputEmpty = country.trim() === "";

  return (
    <CheckoutLayout title="Country">
      <input
        placeholder="Country"
        className="input"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <Link 
        href="/checkout/phone" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}