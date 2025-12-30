import { useContext } from "react";
import { GlobalContext } from "../context";
import FoodCard from "../components/FoodCard";
import { IconFidgetSpinner } from "@tabler/icons-react";
const RecipeBody = () => {
  const { availableRecipies, isLoading, error } = useContext(GlobalContext);
  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <IconFidgetSpinner size={40} className="animate-spin text-gray-600" />
      </div>
    );
  }

  if (availableRecipies && availableRecipies.length) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-15 p-9">
        {availableRecipies.map((indiRecipe) => (
          <FoodCard
            key={indiRecipe.recipe_id}
            id={indiRecipe.recipe_id}
            image={indiRecipe.image_url}
            title={indiRecipe.title}
            publisher={indiRecipe.publisher}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="text-xl font-medium text-gray-700 italic">So Empty <span className="ml-3">¯\_(ツ)_/¯</span></p>
    </div>
  );
};
export default RecipeBody;
