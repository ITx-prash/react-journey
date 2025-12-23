import { useState, useRef } from "react";
import useOnClickOutside from "./onClickOutside";

const TestOnClickOutside = () => {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowContent(false));

  return (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 rounded-lg bg-gray-800 px-6 py-3 text-center text-xl font-medium text-white">
        Test OnClickOutside
      </h2>
      {showContent ? (
        <div
          ref={ref}
          className="flex flex-col gap-3 rounded-lg bg-linear-to-br from-white p-6 shadow-md"
        >
          <h3 className="text-lg font-semibold">OnClickOutside Content</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, enim.
            Aliquid dolore veniam culpa distinctio modi sit voluptatum magnam
            saepe voluptas a? Nobis, minima est ullam excepturi sequi soluta rem
            labore dolorum sed reprehenderit.
          </p>
        </div>
      ) : (
        <button
          onClick={() => setShowContent(true)}
          className="cursor-pointer rounded-xs bg-gray-800 px-3 py-1 text-center font-medium text-white transition hover:bg-gray-700"
        >
          Show Content
        </button>
      )}
    </div>
  );
};
export default TestOnClickOutside;
