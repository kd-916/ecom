import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Email() {
  const [email, setEmail] = useState("");
  const isInputEmpty = email.trim() === "";

  return (
    <CheckoutLayout title="Email">
      <input
        type="email"
        placeholder="example@gmail.com"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Link 
        href="/checkout/confirm" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}