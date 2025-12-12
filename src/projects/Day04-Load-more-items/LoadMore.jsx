import { IconFidgetSpinner } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  // fetch products from dummyjson API
  useEffect(() => {
    const API = `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        console.log(res.data);
        // appends new products to the existing ones
        setProducts((prevProducts) => [...prevProducts, ...res.data.products]);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [count]);

  // checks if products length is greater than or equal to 100
  const disableBtn = products.length >= 100;

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-4">
      <div className="flex flex-wrap gap-6">
        {isLoading && <IconFidgetSpinner className="animate-spin" />}
        {products.length > 0
          ? products.map((item) => {
              return (
                <Card key={item.id} image={item.thumbnail} title={item.title} />
              );
            })
          : null}
      </div>
      {products.length > 0 && (
        <>
          <button
            disabled={disableBtn}
            className={`flex ${disableBtn ? "cursor-not-allowed" : "cursor-pointer"} items-center justify-center rounded-xl ${disableBtn ? "bg-gray-300" : "bg-gray-500"} px-6 py-2 font-semibold text-white`}
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Load More..
          </button>
          {disableBtn && (
            <p className="text-xl font-bold text-red-500">
              You reached 100 products!!
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default LoadMore;
