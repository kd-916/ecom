import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function State() {
  const [stateName, setStateName] = useState("");
  const isInputEmpty = stateName.trim() === "";

  return (
    <CheckoutLayout title="State">
      <input 
        placeholder="Enter state" 
        className="input" 
        value={stateName}
        onChange={(e) => setStateName(e.target.value)}
      />

      <Link 
        href="/checkout/pincode" 
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}