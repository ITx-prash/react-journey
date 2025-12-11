import { useState } from "react";
import { IconStar } from "@tabler/icons-react";
const RatingStar = ({ noOfStars = 5 }) => {
  const [activeItem, setActiveItem] = useState([]);
  const [hoverItem, setHoverItem] = useState([]);
  let arr = new Array(noOfStars).fill(0);

  //handles the button click and adds the elements upto clicked one to the activeItem state array
  const handleClick = (index) => {
    console.log(`Clicked ${index + 1}`);
    const newActiveItems = [];
    for (let i = 0; i <= index; i++) {
      newActiveItems.push(i);
    }
    setActiveItem(newActiveItems);
  };

  //when mouse enters
  const hoverFill = (index) => {
    const newHoverItem = [];
    for (let i = 0; i <= index; i++) {
      newHoverItem.push(i);
    }
    setHoverItem(newHoverItem);
  };

  //when mouse leaves
  const hoverNotFill = () => {
    setHoverItem([]);
  };
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        {arr.map((item, index) => {
          return activeItem.includes(index) ||
            (hoverItem.includes(index) &&
              hoverItem.length > activeItem.length) ? (
            <IconStar
              key={index}
              className="cursor-pointer fill-yellow-300"
              onClick={() => handleClick(index)}
              onMouseEnter={() => hoverFill(index)}
              onMouseLeave={() => hoverNotFill()}
            />
          ) : (
            <IconStar
              key={index}
              className="cursor-pointer"
              onClick={() => handleClick(index)}
              onMouseEnter={() => hoverFill(index)}
              onMouseLeave={() => hoverNotFill()}
            />
          );
        })}
      </div>
    </>
  );
};

export default RatingStar;
