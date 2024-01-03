"use client";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import Wrapper from "./components/Wrapper";
import useFetch from "./custom-hooks/useFetch";
import { Product, getAllProducts } from "./redux/homeSlice";
import { useAppSelector } from "./redux/hooks";

const Home: React.FC = () => {
  const { handleFetch } = useFetch();

  const products = useAppSelector((state) => state.home.products) as
    | Product[]
    | [];

  useEffect(() => {
    handleFetch(getAllProducts);
  }, []);
  return (
    <Wrapper>
      {/* <ProductFilter /> */}
      <div className="grid grid-rows-1 grid-cols-6 my-8 gap-8">
        {products &&
          products.map((p: Product) => (
            <ProductCard key={p.id} product={{ ...p }} />
          ))}
      </div>
    </Wrapper>
  );
};
export default Home;
