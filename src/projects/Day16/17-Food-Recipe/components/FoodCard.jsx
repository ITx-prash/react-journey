import { Link } from "react-router-dom";

const FoodCard = ({ id, image, title, publisher }) => {
  return (
    <>
      <div className="group flex w-72 flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="h-48 w-full shrink-0 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <span className="w-fit rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
            {publisher}
          </span>
          <h2 className="line-clamp-2 min-h-14 text-lg font-bold text-gray-800">
            {title}
          </h2>
          <Link
            to={`/day16-FoodRecipe/recipe-item/${id}`}
            className="mt-2 w-full cursor-pointer rounded-lg bg-gray-900 px-4 py-2.5 text-center font-semibold text-white shadow-md transition-all duration-200 hover:scale-102 hover:bg-black hover:shadow-lg"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </>
  );
};
export default FoodCard;
