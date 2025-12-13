import { useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import MenuList from "./Menu-list";

const MenuItem = ({ Item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  const handleChild = (getCurrentlabel) => {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentlabel]: !displayCurrentChild[getCurrentlabel],
    });
  };

  return (
    <li>
      <div
        onClick={() => handleChild(Item.label)}
        className={`flex items-center ${Item?.children?.length ? "cursor-pointer" : "pl-6"} py-0.5 select-none`}
      >
        {Item?.children?.length > 0 ? (
          <MdOutlineExpandMore
            className={`text-2xl transition-transform duration-300 ${displayCurrentChild[Item.label] ? "rotate-0" : "-rotate-90"}`}
          />
        ) : null}
        <p className="text-xl font-semibold text-gray-700">{Item.label}</p>
      </div>

      {Item?.children?.length > 0 && displayCurrentChild[Item.label] && (
        <div className="pl-6">
          <MenuList menus={Item.children} />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
