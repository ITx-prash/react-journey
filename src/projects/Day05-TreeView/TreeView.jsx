import menus from "./menus";
import MenuList from "./Menu-list";
const TreeView = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="min-w-[300px] rounded-lg bg-white p-6 shadow-lg">
        <MenuList menus={menus} />
      </div>
    </div>
  );
};

export default TreeView;
