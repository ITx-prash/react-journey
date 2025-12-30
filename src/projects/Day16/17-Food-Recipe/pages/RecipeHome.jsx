import Navbar from "../components/Navbar";
import RecipeBody from "./RecipeBody";

const RecipeHome = () => {
  return (
    <div className="scrollbar-hidden flex min-h-screen w-full flex-col gap-4 bg-gray-100 p-4">
      <Navbar />
      <RecipeBody />
    </div>
  );
};
export default RecipeHome;
