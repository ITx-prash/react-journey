import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";
import { useState } from "react";

const ProductCardCart = ({ product }) => {
  const dispatch = useDispatch();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveFromCart = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(removeFromCart(product.id));
    }, 300);
  };

  return (
    <div
      className={`group w-fit transition-all duration-300 ${isRemoving ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
    >
      <div className="relative flex h-95 w-73 items-start rounded-xl bg-linear-to-r from-zinc-600 via-slate-500 to-violet-300 py-2 shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
        <img
          src={product.image}
          alt={product.title}
          className="h-1/2 w-full object-contain px-5 py-3 transition-all duration-300 group-hover:scale-107"
        />
        {/* bottom section */}
        <div className="absolute top-1/2 flex h-1/2 flex-col gap-2 rounded-xl bg-white px-4 py-2">
          <h2 className="line-clamp-2 min-h-10 font-bold text-gray-700">
            {product.title}
          </h2>
          <p className="line-clamp-3 min-h-15 text-sm text-gray-700 capitalize">
            {product.description}
          </p>
          {/* footer */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col -space-y-1">
              <span className="font-mono text-[10px] tracking-widest text-gray-700">
                PRICE
              </span>
              <span className="text-xl font-bold text-gray-700">
                ${product.price}
              </span>
            </div>

            <button className="h-full w-40 cursor-pointer rounded-md bg-[#5E568B] py-2 text-sm font-medium text-white hover:bg-purple-800/90">
              Buy Now
            </button>
          </div>
        </div>
        {/* </div> */}
        <IoCloseCircleSharp
          className="absolute top-1 right-1 cursor-pointer text-2xl text-gray-500 hover:text-gray-700"
          onClick={handleRemoveFromCart}
        />
      </div>
    </div>
  );
};
export default ProductCardCart;
