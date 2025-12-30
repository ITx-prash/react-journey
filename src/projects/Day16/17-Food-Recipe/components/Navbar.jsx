import { useContext, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/index";
import axios from "axios";

import { IoHome } from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
const Navbar = () => {
  const {
    userSearch,
    setUserSearch,
    setIsLoading,
    setError,
    availableRecipies,
    setAvailableRecipies,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (userSearch.length < 3) {
      setAvailableRecipies([]);
      setError(null);
      return;
    }

    if (availableRecipies.length > 0) return;

    // debouncing the api request
    const timeOutId = setTimeout(() => {
      const API = `https://forkify-api.herokuapp.com/api/search?q=${userSearch}`;
      const handleApiCall = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const res = await axios.get(API);
          const recipeData = res.data;

          if (
            res &&
            recipeData &&
            recipeData.recipes &&
            recipeData.recipes.length
          ) {
            setAvailableRecipies(recipeData.recipes);
          } else {
            setAvailableRecipies([]);
          }
        } catch (error) {
          setAvailableRecipies([]);
          console.error(error.message);
        } finally {
          setIsLoading(false);

          navigate("/day16-FoodRecipe");
        }
      };

      handleApiCall();
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [userSearch, setAvailableRecipies, setError, setIsLoading, navigate]);

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-between gap-5 rounded-xl px-5 py-4 lg:flex-row lg:gap-0">
      <NavLink
        to={"/day16-FoodRecipe"}
        className={
          "text-gray-700 transition-all duration-200 hover:scale-110 hover:text-gray-900"
        }
      >
        <IoHome className="text-4xl" onClick={() => setUserSearch("")} />
      </NavLink>
      <div className="flex w-md items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-neutral-600 shadow-md transition-all duration-200 focus-within:border-gray-500 focus-within:shadow-lg lg:w-lg">
        <HiOutlineSearch className="text-2xl text-gray-500" />
        <input
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          className="w-full text-xl placeholder:text-neutral-600 placeholder:italic focus:outline-none"
          placeholder="What are you craving today?"
        />
      </div>

      <NavLink
        to="/day16-FoodRecipe/favourites"
        className="text-gray-700 transition-all duration-200 hover:scale-110 hover:text-gray-900"
      >
        <IoRestaurantSharp className="text-4xl" />
      </NavLink>
    </div>
  );
};
export default Navbar;
