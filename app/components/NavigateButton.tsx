'use client';

import { useRouter } from "next/navigation";

const NavigateButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/products')} style={{
      background: "#0070f3",
      color: "white",
      padding: "8px 12px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    }}>Go to Products</button>
  )
}

export default NavigateButton;
