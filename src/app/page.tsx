import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
import Wrapper from "../components/Wrapper";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <ProductFilter />
      <div className="grid grid-rows-1 grid-cols-6   my-8 gap-8">
        <ProductCard />
      </div>
    </Wrapper>
  );
};
export default Home;
