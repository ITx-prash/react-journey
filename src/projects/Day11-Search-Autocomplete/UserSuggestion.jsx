import { ImSad } from "react-icons/im";
const UserSuggestion = ({ data, handleClick }) => {
  if (!data || !data.length)
    return (
      <div className="flex flex-col items-center justify-center rounded-lg px-11 py-4 text-gray-700">
        <ImSad size={30} className="text-gray-500" />
        <p className="text-gray-500 italic">No users found!</p>
      </div>
    );

  return (
    <ul className="w-1/4 rounded-lg bg-white px-5 py-3 shadow-lg">
      {data.map((item, idx) => (
        <li
          key={idx}
          className="cursor-pointer border-b-2 border-gray-400"
          onClick={handleClick}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
export default UserSuggestion;
