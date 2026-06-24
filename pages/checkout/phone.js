import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Phone() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedPhone = sessionStorage.getItem("checkout_phone");
    if (savedPhone) {
      setPhone(savedPhone);
      // Re-validate if data is pulled from session storage
      if (!/^\d*$/.test(savedPhone)) {
        setError("Phone number can only contain numbers.");
      } else if (savedPhone.length !== 10) {
        setError("Phone number must be exactly 10 digits.");
      }
    }
  }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    sessionStorage.setItem("checkout_phone", value);

    // 1. Check if it contains anything other than numbers
    if (!/^\d*$/.test(value)) {
      setError("Phone number can only contain numbers.");
    } 
    // 2. Check if the length is exactly 10
    else if (value.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
    } 
    // 3. Clear error if all conditions are met
    else {
      setError("");
    }
  };

  const isNextDisabled = phone.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="Phone Number">
      <div>
        <input
          type="tel"
          placeholder="Enter 10-digit phone number"
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`}
          value={phone}
          onChange={handlePhoneChange}
          maxLength={10} // Optional: Prevents user from typing more than 10 characters
        />

        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/country" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/email" 
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}