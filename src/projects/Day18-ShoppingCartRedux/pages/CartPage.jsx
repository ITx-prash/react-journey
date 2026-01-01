import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import ProductCardCart from "../components/ProductCardCart";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const totalCart = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="flex min-h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Navbar />

      {cart && cart.length ? (
        <>
          <div className="flex">
            <div className="flex w-[75%] flex-wrap justify-start gap-x-12 gap-y-15 pl-8">
              {cart.map((indiProduct) => (
                <ProductCardCart key={indiProduct.id} product={indiProduct} />
              ))}
            </div>
            {/*summary */}
            <div className="mx-10 flex h-fit w-[25%] flex-col gap-3 rounded-md border-l-2 border-dashed border-gray-600 bg-white p-5 shadow-xl lg:mx-4">
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                Cart Summary
              </h2>
              <div className="flex items-center justify-between py-1">
                <p className="font-medium text-gray-700">Total Items</p>
                <span className="font-semibold text-gray-800 transition-all duration-300">
                  {cart.length}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t pt-3">
                <p className="text-base font-medium text-gray-700">
                  Total Price
                </p>
                <span className="text-2xl font-bold text-gray-800 transition-all duration-300">
                  ${totalCart.toFixed(2)}
                </span>
              </div>
              <button className="mt-4 w-full cursor-pointer rounded-md bg-[#5E568B] py-2.5 text-sm font-medium text-white transition-colors hover:bg-purple-800/90">
                Checkout
              </button>
            </div>
          </div>

          {/* summary */}
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-1">
          <p className="text-lg font-medium text-gray-700 italic">
            So empty <span className="pl-3">ಠ_ಠ</span>
          </p>
          <NavLink to="/day18-shopping/">
            <button className="h-full w-40 cursor-pointer rounded-md bg-[#5E568B] py-2 text-sm font-medium text-white hover:bg-purple-800/90">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};
export default CartPage;
