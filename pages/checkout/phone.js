import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const isInputEmpty = phone.trim() === "";

  return (
    <CheckoutLayout title="Phone Number">
      <input
        type="tel"
        placeholder="+91 XXXXX XXXXX"
        className="input"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Link 
        href="/checkout/email" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}