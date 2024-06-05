"use client";

import React from "react";
import { usePathname, notFound } from "next/navigation";
import { Metadata } from "next";

function gatrandom(count: number) {
  return Math.floor(Math.random() * count);
}
// export const generateMetadata = ({ params }: Props): Metadata => {
//   // const title = await new Promise
//   return {
//     title: `product ${params.id}`,
//   };
// };

type Props = {
  params: {
    id: string;
    reviews: string;
  };
};
function ReviewsPageOfProduct({ params }) {
  // const pathname = usePathname();

  // const extractIdFromPathname = () => {
  //   // Split the pathname by '/' and get the last part
  //   const parts = pathname.split("/");
  //   return parts[parts.length - 1];
  // };

  // Extract the id from the pathname
  // const id = extractIdFromPathname();
  // const random = gatrandom(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  console.log(params);
  if (parseInt(params.reviews) > 1000) {
    return notFound();
  } else {
    return (
      <div>
        Reviews Page Of Product {params.id}::::: {params.reviews}
      </div>
    );
  }
}

export default ReviewsPageOfProduct;
