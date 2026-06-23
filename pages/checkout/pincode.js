import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Pincode() {
  const [pincode, setPincode] = useState("");
  const isInputEmpty = pincode.trim() === "";

  return (
    <CheckoutLayout title="Pincode">
      <input 
        type="text" 
        placeholder="Enter pincode" 
        className="input" 
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      />

      <Link 
        href="/checkout/country" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}