import { useEffect, useRef } from "react";
const ScrollToSection = () => {
  const data = [
    { card: "This is first card." },
    { card: "This is second card." },
    { card: "This is third card." },
    { card: "This is fourth card." },
    { card: "This is fifth card." },
  ];
  const ref = useRef(null);

  const handleScrollToSection = () => {
    if (!ref.current) return;
    // block: "start" aligns the element’s top edge with the scroll container’s top edge
    // scrollIntoView is used to scroll to a specific element
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-6 rounded-xl bg-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold">Scroll to Particular Section</h2>
      <button
        onClick={handleScrollToSection}
        className="cursor-pointer rounded-lg bg-black px-6 py-2.5 font-medium text-white transition-transform hover:scale-105"
      >
        Click to Scroll
      </button>
      {data.map((item, idx) => (
        <div
          ref={idx === 2 ? ref : null}
          key={idx}
          className="flex h-112 w-full items-center justify-center rounded-lg bg-amber-300 p-4 text-lg font-medium shadow-sm"
        >
          {item.card}
        </div>
      ))}
    </div>
  );
};
export default ScrollToSection;
