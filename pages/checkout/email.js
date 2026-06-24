import { useState, useEffect } from "react";
import Link from "next/link";
import CheckoutLayout from "@/components/CheckoutLayout";

export default function Email() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Standard regex pattern for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("checkout_email");
    if (savedEmail) {
      setEmail(savedEmail);
      // Re-validate if data is pulled from session storage
      if (!emailRegex.test(savedEmail)) {
        setError("Please enter a valid email address.");
      }
    }
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    sessionStorage.setItem("checkout_email", value);

    // Validate the email format as the user types
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const isNextDisabled = email.trim() === "" || error !== "";

  return (
    <CheckoutLayout title="Email">
      <div>
        <input
          type="email"
          placeholder="example@gmail.com"
          className={`input w-full ${error ? "border-red-500 focus:outline-red-500" : ""}`}
          value={email}
          onChange={handleEmailChange}
        />
        
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center mt-6">
        <Link href="/checkout/phone" className="text-gray-500 hover:text-[#0a122c] transition-colors font-medium">
          &larr; Back
        </Link>
        <Link 
          href="/checkout/confirm" 
          className={`btn ${isNextDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}
        >
          Next
        </Link>
      </div>
    </CheckoutLayout>
  );
}