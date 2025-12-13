import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

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
    ...Array.from({ length: 25 }, (_, i) => ({
      day: i + 6,
      title: `Day ${i + 6} Project`,
      description: "Coming soon...",
      path: `/day${String(i + 6).padStart(2, "0")}`,
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
    </div>
  );
};

export default Home;
