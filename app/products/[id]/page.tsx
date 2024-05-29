"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};
const ProductDetails = ({ params }) => {
  const pathname = usePathname();
  // Function to extract the id from the pathname
  const extractIdFromPathname = () => {
    // Split the pathname by '/' and get the last part
    const parts = pathname.split("/");
    return parts[parts.length - 1];
  };

  // Extract the id from the pathname
  const id = extractIdFromPathname();

  console.log(pathname);
  return (
    <div>
      <h1>Product Details :{pathname}</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;
