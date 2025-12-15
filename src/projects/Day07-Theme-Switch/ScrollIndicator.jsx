import { useEffect, useState } from "react";
import LoadMore from "../Day04-Load-more-items/LoadMore";

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
  };
  useEffect(() => {
    console.log("Scrolling!");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPercentage);

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-center bg-white p-5">
        <h3 className="text-xl font-bold">Custom Scroll Indicator</h3>
      </div>
      <span
        className="fixed top-0 left-0 z-50 h-2 bg-red-400"
        style={{ width: `${scrollPercentage + 0.3}%` }}
      ></span>
      <LoadMore />
    </>
  );
};
export default ScrollIndicator;
