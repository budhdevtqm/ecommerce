import React from "react";
import ImageSlider from "@/app/components/ImageSlider";
import PageHeader from "@/app/components/PageHeader";
import Wrapper from "@/app/components/Wrapper";

const ViewProduct: React.FC = () => {
  const product = {
    _id: 1,
    name: "Watch",
    price: "999",
    images: ["/images/watch.jpeg", "/images/watch.jpeg", "/images/user.png"],
    quantity: 100,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    category: "Watches",
    storeId: { name: "DM Store", id: "123498203840923840" },
  };

  return (
    <Wrapper>
      <PageHeader title={product.name} navigate="/products" />
      <div className="flex bg-white my-8 rounded-lg">
        <ImageSlider images={product.images} />
        <div className="border-l border-gray-200"></div>
      </div>
    </Wrapper>
  );
};

export default ViewProduct;
