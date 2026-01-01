import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  const projects = [
    {
      day: 1,
      title: "Accordion Component",
      description:
        "State management, conditional rendering, array methods, props drilling",
      path: "/day01-accordion",
      completed: true,
    },
    {
      day: 2,
      title: "Random Color Generator",
      description:
        "Dynamic styles, RGB/HEX conversion, Math.random(), padStart(), event handlers",
      path: "/day02-random-color",
      completed: true,
    },
    {
      day: 3,
      title: "Star Rating & Image Slider",
      description:
        "Hover effects, array manipulation, useEffect, axios, API fetching, async/await",
      path: "/day03-star-rating",
      completed: true,
    },
    {
      day: 4,
      title: "Load More Products",
      description:
        "Data pagination, functional updates, derived state, button disable logic",
      path: "/day04-load-more",
      completed: true,
    },
    {
      day: 5,
      title: "TreeView Menu",
      description:
        "Recursive components, nested data structures, animated transitions, react-icons",
      path: "/day05-treeview",
      completed: true,
    },
    {
      day: 6,
      title: "QR Code Generator",
      description:
        "Third-party libraries (react-qr-code), controlled inputs, conditional rendering",
      path: "/day06-qr-generator",
      completed: true,
    },
    {
      day: 7,
      title: "Theme Switcher",
      description:
        "Custom hooks (useLocalStorage), localStorage API, dark mode with Tailwind",
      path: "/day07-theme-switcher",
      completed: true,
    },
    {
      day: 7,
      title: "Scroll Progress Indicator",
      description:
        "Window scroll events, useEffect cleanup, dynamic width calculations",
      path: "/day07-scroll-indicator",
      completed: true,
    },
    {
      day: 8,
      title: "Custom Tabs Component",
      description:
        "Component composition, prop callbacks (onChange), array mapping, dynamic content rendering",
      path: "/day08-custom-tabs",
      completed: true,
    },
    {
      day: 9,
      title: "Modal Popup",
      description:
        "Fixed positioning, overlay backgrounds, conditional rendering, prop callbacks for closing",
      path: "/day09-modal-popup",
      completed: true,
    },
    {
      day: 10,
      title: "GitHub Profile Finder",
      description:
        "REST API integration with GitHub API, axios, async/await, error handling, loading states",
      path: "/day10-github-profiles",
      completed: true,
    },
    {
      day: 11,
      title: "Search Autocomplete",
      description:
        "Array filtering, string methods (indexOf), conditional dropdown rendering, click event handling",
      path: "/day11-auto-complete",
      completed: true,
    },
    {
      day: 12,
      title: "Feature Flag Implementation",
      description: "Context API, useContext, conditional component rendering",
      path: "/day12-feature-flag",
      completed: true,
    },
    {
      day: 13,
      title: "Custom Hooks",
      description:
        "Custom hooks (useFetch, useOnClickOutside), useEffect, useRef, event listeners",
      path: "/day13-usefetch",
      completed: true,
    },
    {
      day: 14,
      title: "Scroll to Top/Bottom & Section",
      description:
        "scrollTo, scrollIntoView, useRef for DOM access, smooth scrolling behavior",
      path: "/day14-scrolltopbottom",
      completed: true,
    },
    {
      day: 15,
      title: "Weather App",
      description:
        "OpenWeather API, debouncing, coordinate-based queries, async/await, autocomplete dropdown",
      path: "/day15-weatherApp",
      completed: true,
    },
    {
      day: 16,
      title: "Food Recipe App",
      description:
        "Context API (createContext, useContext, Provider), React Router nested routes, useNavigate, debouncing, conditional rendering patterns",
      path: "/day16-FoodRecipe",
      completed: true,
    },
    {
      day: 18,
      title: "Shopping Cart with Redux",
      description:
        "Redux Toolkit (createSlice, configureStore), useSelector for selecting specific state slices, useDispatch actions, Provider setup",
      path: "/day18-shopping",
      completed: true,
    },
    ...Array.from({ length: 12 }, (_, i) => ({
      day: i + 17,
      title: `Day ${i + 17} Project`,
      description: "Coming soon...",
      path: `/day${String(i + 17).padStart(2, "0")}`,
      completed: false,
    })),
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">
            ⚛️ 30 Days of React Journey
          </h1>
          <p className="text-xl text-gray-600">
            Building projects daily to master React.js
          </p>
          <p className="mt-2 text-sm text-gray-500 italic">
            Note: All projects are built by me for learning. This landing page
            UI was created with AI assistance.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href="https://github.com/ITx-prash/react-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://twitter.com/ITx_prash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Follow on Twitter
            </a>
          </div>
        </div>

        {/* Progress Stats */}
        <div className="mb-8 flex justify-center gap-8">
          <div className="rounded-lg bg-white px-6 py-4 shadow-md">
            <p className="text-3xl font-bold text-green-600">
              {projects.filter((p) => p.completed).length}
            </p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
          <div className="rounded-lg bg-white px-6 py-4 shadow-md">
            <p className="text-3xl font-bold text-blue-600">
              {projects.filter((p) => !p.completed).length}
            </p>
            <p className="text-sm text-gray-600">Remaining</p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.day}
              className={`rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl ${
                !project.completed && "opacity-60"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-sm font-semibold ${
                    project.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  Day {String(project.day).padStart(2, "0")}
                </span>
                {project.completed && <span className="text-2xl">✅</span>}
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="mb-4 text-sm text-gray-600">
                {project.description}
              </p>
              {project.completed ? (
                <Link
                  to={project.path}
                  className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  View Project
                  <MdArrowForward />
                </Link>
              ) : (
                <span className="text-sm text-gray-400 italic">
                  Coming soon...
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default Home;
