import useFetch from "../Day13-Custom-Hooks/useFetch";
import { useRef } from "react";
const ScrollTopBottom = () => {
  const result = useFetch("https://dummyjson.com/products", {});
  console.log(result);

  const bottomRef = useRef(null);

  const { fetchedData, isError, isLoading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {},
  );
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h1 className="text-xl font-bold">Scroll to top and bottom:</h1>
      <button
        className="cursor-pointer rounded-lg bg-black px-3 py-1 font-medium text-white"
        onClick={handleScrollToBottom}
      >
        Scroll to Bottom
      </button>
      {isLoading && <p>Loading...</p>}
      <ul className="flex flex-col items-center gap-4">
        {isError && <p className="text-red-600">{isError}</p>}
        {fetchedData && fetchedData.products && fetchedData.products.length
          ? fetchedData.products.map((indiProduct) => (
              <li key={indiProduct.id}>{indiProduct.title}</li>
            ))
          : null}
      </ul>
      <button
        ref={bottomRef}
        className="cursor-pointer rounded-lg bg-black px-3 py-1 font-medium text-white"
        onClick={handleScrollToTop}
      >
        Scroll to Top
      </button>
    </div>
  );
};
export default ScrollTopBottom;
