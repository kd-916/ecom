import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Address() {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  
  // Usually only Line 1 is strictly required
  const isInputEmpty = address1.trim() === "";

  return (
    <CheckoutLayout title="Address Details">
      <input 
        placeholder="Address Line 1" 
        className="input mb-4" 
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
      />

      <input 
        placeholder="Address Line 2 (Optional)" 
        className="input" 
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />

      <Link 
        href="/checkout/city" 
        className={`btn mt-6 ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}