"use client";
import { useRouter } from "next/navigation";
export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/");
    console.log("order");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}> Place Order</button>
    </>
  );
}
