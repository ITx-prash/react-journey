import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useLocalStorage from "./useLocalStorage";
const ThemeSwitcher = () => {
  //state for theme with local storage custom hook
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  //function for switching theme
  const handleColorSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div
      className={`flex h-screen w-full items-center justify-center bg-gray-100 transition-all duration-700 dark:bg-neutral-900 ${theme}`}
    >
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-white p-4 shadow-lg transition-all duration-700 select-none dark:bg-neutral-800">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl font-bold dark:text-white">Current Theme</h2>
          {theme === "dark" ? (
            <MdDarkMode size={30} color="white" />
          ) : (
            <MdLightMode size={30} color="black" />
          )}
        </div>
        <button
          onClick={handleColorSwitch}
          className="cursor-pointer rounded-xl bg-neutral-950 px-4 py-3 font-semibold text-white dark:bg-white dark:text-black"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
