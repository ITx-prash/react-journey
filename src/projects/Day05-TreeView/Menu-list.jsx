import MenuItem from "./Menu-item";
const MenuList = ({ menus }) => {
  return (
    <ul className="flex flex-col">
      {menus.length > 0
        ? menus.map((listItem, idx) => {
            return <MenuItem Item={listItem} key={idx} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
