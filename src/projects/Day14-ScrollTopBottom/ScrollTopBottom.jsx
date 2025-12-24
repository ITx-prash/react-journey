import useFetch from "../Day13-Custom-Hooks/useFetch";
import { useRef } from "react";
import ScrollToSection from "./ScrollToSection";
const ScrollTopBottom = () => {
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
    <div className="flex min-h-screen w-full flex-col items-center gap-6 bg-gray-100 p-6">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Scroll to Top and Bottom</h1>
        <button
          className="cursor-pointer rounded-lg bg-black px-6 py-2.5 font-medium text-white transition-transform hover:scale-105"
          onClick={handleScrollToBottom}
        >
          Scroll to Bottom
        </button>
        {isLoading && <p className="text-gray-600">Loading...</p>}
        <ul className="flex w-full flex-col items-center gap-2 py-4">
          {isError && <p className="text-red-600">{isError}</p>}
          {fetchedData && fetchedData.products && fetchedData.products.length
            ? fetchedData.products.map((indiProduct) => (
                <li
                  key={indiProduct.id}
                  className="w-full rounded-md bg-gray-50 px-4 py-2 text-center"
                >
                  {indiProduct.title}
                </li>
              ))
            : null}
        </ul>
        <button
          ref={bottomRef}
          className="cursor-pointer rounded-lg bg-black px-6 py-2.5 font-medium text-white transition-transform hover:scale-105"
          onClick={handleScrollToTop}
        >
          Scroll to Top
        </button>
      </div>
      <ScrollToSection />
    </div>
  );
};
export default ScrollTopBottom;
