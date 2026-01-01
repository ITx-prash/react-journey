import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCardHome from "../components/ProductCardHome";
import axios from "axios";
import { IconFidgetSpinner } from "@tabler/icons-react";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleApiCall = async () => {
      setLoading(true);

      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const data = res.data;

        // console.log(data);
        if (data && data.length) {
          setProducts(data);
        }
        // setProducts(res.data)
      } catch (error) {
        setError(error.message);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    handleApiCall();
  }, []);

  if (error) {
    return (
      <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
        <Navbar />
        <p className="font-medium text-red-500">Something went wrong!</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-screen w-full flex-col gap-6 bg-gray-100 p-6">
        <Navbar />
        <IconFidgetSpinner
          size={45}
          stroke={1.5}
          className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 animate-spin text-purple-800"
        />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col gap-6 bg-gray-100 p-6">
      <Navbar />
      {products && products.length ? (
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-15">
          {products.map((indiProduct) => (
            <ProductCardHome key={indiProduct.id} product={indiProduct} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products found</p>
      )}
    </div>
  );
};
export default Homepage;
