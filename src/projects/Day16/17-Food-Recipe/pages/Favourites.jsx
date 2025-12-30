import { useContext } from "react";
import Navbar from "../components/Navbar";
import { GlobalContext } from "../context";
import FoodCard from "../components/FoodCard";
import { IconFidgetSpinner } from "@tabler/icons-react";

const Favourites = () => {
  const { isLoading, error, favourites } = useContext(GlobalContext);

  if (error) {
    return (
      <div className="scrollbar-hidden flex min-h-screen w-full flex-col gap-4 bg-gray-100 p-4">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="scrollbar-hidden flex min-h-screen w-full flex-col gap-4 bg-gray-100 p-4">
        <Navbar />
        <div className="flex flex-1 items-center justify-center">
          <IconFidgetSpinner size={40} className="animate-spin text-gray-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="scrollbar-hidden flex min-h-screen w-full flex-col gap-4 bg-gray-100 p-4">
      <Navbar />
      {favourites && favourites.length ? (
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15 p-9">
          {favourites.map((indiRecipe) => (
            <FoodCard
              key={indiRecipe.recipe_id}
              id={indiRecipe.recipe_id}
              image={indiRecipe.image_url}
              title={indiRecipe.title}
              publisher={indiRecipe.publisher}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-xl font-medium text-gray-600 italic">
            No favourites<span className="ml-3">ಠ_ಠ</span>
          </p>
        </div>
      )}
    </div>
  );
};
export default Favourites;
