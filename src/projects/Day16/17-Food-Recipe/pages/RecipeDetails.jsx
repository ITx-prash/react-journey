import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";
import axios from "axios";
import Navbar from "../components/Navbar";
import IconFidgetSpinner from "@tabler/icons-react/dist/esm/icons/IconFidgetSpinner";
const RecipeDetails = () => {
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    isLoading,
    setIsLoading,
    favourites,
    setFavourites,
  } = useContext(GlobalContext);

  //destructuring id from useParams which gets the id from the url
  const { id } = useParams();

  const handleFavourite = (getCurrentItem) => {
    const cpyFavourites = [...favourites];
    // Check if the recipe is already in favourites
    const idx = cpyFavourites.findIndex(
      (item) => item.recipe_id === getCurrentItem.recipe_id,
    );
    if (idx === -1) {
      cpyFavourites.push(getCurrentItem);
    } else {
      // If it exists, remove it from favourites
      cpyFavourites.splice(idx, 1);
    }

    setFavourites(cpyFavourites);
  };

  useEffect(() => {
    const getRecipeDetails = async () => {
      setIsLoading(true);
      setRecipeDetailsData(null);
      try {
        const res = await axios.get(
          `https://forkify-api.herokuapp.com/api/get?rId=${id}`,
        );

        const data = res.data;
        if (data?.recipe) setRecipeDetailsData(data.recipe);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getRecipeDetails();
  }, [id, setIsLoading, setRecipeDetailsData]);

  return (
    <div className="flex h-screen w-full flex-col gap-4 bg-gray-100 p-4">
      <Navbar />
      {isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <IconFidgetSpinner size={40} className="animate-spin text-gray-600" />
        </div>
      ) : recipeDetailsData ? (
        <div className="flex h-screen w-full gap-6 rounded-xl bg-white px-8 py-8 shadow-xl">
          <div className="group h-112 w-204 shrink-0 overflow-hidden rounded-xl bg-gray-100 shadow-md">
            <img
              src={recipeDetailsData.image_url}
              alt={recipeDetailsData.title}
              className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-102"
            />
          </div>
          <div className="flex flex-col gap-3 px-4">
            <span className="w-fit rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
              {recipeDetailsData.publisher}
            </span>

            {/* <h3 className="text-sm font-medium text-cyan-700">
              {recipeDetailsData.publisher}
            </h3> */}

            <h2 className="text-3xl font-bold text-gray-800">
              {recipeDetailsData.title}
            </h2>
            <div className="flex max-w-lg flex-col gap-4">
              <button
                className="w-fit cursor-pointer rounded-xl bg-gray-900 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-black hover:shadow-lg"
                onClick={() => handleFavourite(recipeDetailsData)}
              >
                {favourites.findIndex(
                  (item) => item.recipe_id === recipeDetailsData.recipe_id,
                ) !== -1
                  ? "Remove from Favourites"
                  : "Add to Favourites"}
              </button>

              {recipeDetailsData.ingredients && (
                <div className="mt-2 pl-1">
                  <h2 className="w-fit border-b-2 border-cyan-700 text-xl font-semibold text-gray-800">
                    Ingredients:
                  </h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {recipeDetailsData.ingredients.map((indiItem, idx) => (
                      <li key={idx} className="ml-5 list-disc text-gray-700">
                        {indiItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-gray-700 italic">No recipe selected.</p>
        </div>
      )}
    </div>
  );
};
export default RecipeDetails;
