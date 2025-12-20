import { useEffect, useState } from "react";
import axios from "axios";
import { IconFidgetSpinner } from "@tabler/icons-react";
import UserSuggestion from "./UserSuggestion";

const AutoComplete = () => {
  const [searchParam, setSearchParam] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showDropDown, setshowDropDown] = useState(false);

  const API = "https://dummyjson.com/users";

  useEffect(() => {
    const handleUserApi = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(API);
        const data = res.data.users;

        if (data && data.length) {
          setUsers(data.map((item) => item.firstName));
          setIsLoading(false);

          // console.log(data);
        }
      } catch (error) {
        setIsLoading(false);
        console.error(error.message);
      }
    };
    handleUserApi();
  }, []);

  const handleUserSearch = (e) => {
    setSearchParam(e.target.value);
    const enteredUser = e.target.value.toLowerCase();
    if (enteredUser.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(enteredUser) > -1)
          : [];
      setFilteredUsers(filteredData);
      setshowDropDown(true);
    } else {
      setshowDropDown(false);
    }
  };

  //for handling click on suggestion
  const handleClick = (e) => {
    console.log(e.target.innerText);
    setshowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  };
  // console.log(users, filteredUsers);

  return (
    <div className="flex h-screen w-full flex-col items-center gap-5 bg-gray-100 py-36">
      {/* header search */}
      <div className="flex flex-col items-center justify-center gap-4">
        <input
          type="text"
          value={searchParam}
          placeholder="Enter user to search"
          onChange={handleUserSearch}
          className="rounded-lg border-2 border-gray-500 px-2 py-1 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
        />
        {isLoading && <IconFidgetSpinner className="animate-spin" />}
        {/* <button onClick={handleUserApi}>Click Me!!</button> */}
      </div>
      {showDropDown && (
        <UserSuggestion data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
};
export default AutoComplete;
