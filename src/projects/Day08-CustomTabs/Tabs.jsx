import { useState } from "react";
const Tabs = ({ tabContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };

  return (
    <div className="flex flex-col gap-5 h-screen w-full items-center justify-center bg-gray-100">
        <h2 className="text-[9px]">Tired of clz assignments :(</h2>
      <div className="flex gap-4 rounded-xl bg-white p-4">
        {tabContent.map((tabItem, index) => (
          <div
            className=""
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="bg-neutral-200 cursor-pointer px-2 rounded-lg py-1">{tabItem.label}</span>
          </div>
        ))}
      </div>
      {/* tabContent */}
      <div className="text-2xl">
        {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
      </div>
    </div>
  );
};
export default Tabs;
