import Tabs from "./Tabs";

const RandomComponent = () => {
  return <h1>🚀 React is awesome!</h1>;
};

const CustomTab = () => {
  const tabs = [
    {
      label: "Home",
      content: <div>Welcome to custom tabs component</div>,
    },
    {
      label: "Profile",
      content: <div>User profile information goes here</div>,
    },
    {
      label: "Settings",
      content: <RandomComponent />,
    },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };

  return <Tabs tabContent={tabs} onChange={handleChange} />;
};
export default CustomTab;
