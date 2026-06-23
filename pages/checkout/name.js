import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Name() {
  const [name, setName] = useState("");
  const isInputEmpty = name.trim() === "";

  return (
    <CheckoutLayout title="Customer Details">
      <input 
        placeholder="Enter your name" 
        className="input" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Link 
        href="/checkout/address" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}