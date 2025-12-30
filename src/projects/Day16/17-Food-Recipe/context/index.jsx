import { useState, createContext } from "react";
export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [userSearch, setUserSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [availableRecipies, setAvailableRecipies] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [error, setError] = useState(null);
  const [favourites, setFavourites] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        userSearch,
        setUserSearch,
        isLoading,
        setIsLoading,
        error,
        setError,
        availableRecipies,
        setAvailableRecipies,
        recipeDetailsData,
        setRecipeDetailsData,
        favourites,
        setFavourites,
       
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
