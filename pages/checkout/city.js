import { useState } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function City() {
  // 1. Create a state variable to track the input value
  const [cityName, setCityName] = useState("");

  // 2. Check if the input is empty (ignoring blank spaces)
  const isInputEmpty = cityName.trim() === "";

  return (
    <CheckoutLayout title="City">
      <input 
        type="text"
        placeholder="Enter City" 
        className="input" 
        // 3. Bind the input to your state
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />

      <Link 
        href="/checkout/state" 
        // 4. Conditionally apply disabled styles and prevent clicking
        className={`btn ${isInputEmpty ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
      >
        Next
      </Link>
    </CheckoutLayout>
  );
}