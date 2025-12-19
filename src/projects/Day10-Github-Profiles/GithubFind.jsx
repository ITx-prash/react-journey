import { useState } from "react";
import { IconFidgetSpinner } from "@tabler/icons-react";
import { RiHome6Line } from "react-icons/ri";
import axios from "axios";
import { LuUserRoundSearch, LuBuilding } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaRegCalendar } from "react-icons/fa6";
import { FiLink2 } from "react-icons/fi";
import { ImSad } from "react-icons/im";

const GithubFind = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [isError, setIsError] = useState(false);

  const API = `https://api.github.com/users/${username}`;

  const isDisabled = username.length === 0;

  const handleSearch = async () => {
    try {
      if (isDisabled) return;
      setIsLoading(true);
      setIsError(false);

      const res = await axios.get(API);
      setUserData(res.data);

      console.log(res.data);

      setUsername("");
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setUsername("");
      setIsLoading(false);
      setUserData(null);
      setIsError(true);
    }
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-100 py-36">
        {/* header search */}
        <div className="flex items-center justify-center gap-4">
          <input
            type="text"
            value={username}
            placeholder="Enter Github username"
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-lg border-2 border-gray-500 px-2 py-1 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
          />
          <LuUserRoundSearch
            size={30}
            className={`transition-all duration-150 ${
              isDisabled
                ? "cursor-not-allowed text-gray-400 opacity-50"
                : "cursor-pointer text-gray-500 hover:text-gray-700"
            }`}
            onClick={handleSearch}
          />
        </div>
        {/* main body */}
        {isLoading && (
          <div className="px-11 py-4">
            <IconFidgetSpinner className="animate-spin" />
          </div>
        )}
        {userData && !isLoading && (
          <div className="max-w-3xl rounded-lg bg-white p-6 text-gray-700 shadow-xl">
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-3">
                <img
                  src={userData.avatar_url}
                  alt={userData.login}
                  className="size-32 rounded-full border-4 border-gray-200 object-cover"
                />
                <a
                  href={userData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-800 px-4 py-2 text-sm text-white transition hover:bg-gray-700"
                >
                  View Profile
                </a>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-4">
                {/* Name & Username */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {userData.name || userData.login}
                  </h2>
                  <p className="text-gray-500">@{userData.login}</p>
                  {userData.bio && (
                    <p className="mt-2 text-sm text-gray-600">{userData.bio}</p>
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 rounded-lg bg-gray-100 p-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {userData.public_repos}
                    </p>
                    <p className="text-xs text-gray-500">Repositories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {userData.followers}
                    </p>
                    <p className="text-xs text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {userData.following}
                    </p>
                    <p className="text-xs text-gray-500">Following</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex flex-col gap-2 text-sm">
                  {userData.location && (
                    <p className="flex items-center gap-2">
                      <span className="font-medium">
                        <RiHome6Line
                          size={16}
                          className="font-semibold text-gray-500"
                        />
                      </span>
                      {userData.location}
                    </p>
                  )}
                  {userData.twitter_username && (
                    <p className="flex items-center gap-2">
                      <span className="font-medium">
                        <BsTwitterX className="font-semibold text-gray-500" />
                      </span>
                      <a
                        href={`https://twitter.com/${userData.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @{userData.twitter_username}
                      </a>
                    </p>
                  )}
                  {userData.blog && (
                    <p className="flex items-center gap-2">
                      <span className="font-medium">
                        <FiLink2 />
                      </span>
                      <a
                        href={
                          userData.blog.startsWith("http")
                            ? userData.blog
                            : `https://${userData.blog}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {userData.blog}
                      </a>
                    </p>
                  )}
                  {userData.company && (
                    <p className="flex items-center gap-2">
                      <span className="font-medium">
                        <LuBuilding />
                      </span>
                      {userData.company}
                    </p>
                  )}
                  <p className="flex items-center gap-2">
                    <span className="font-medium">
                      <FaRegCalendar />
                    </span>
                    Joined{" "}
                    {new Date(userData.created_at).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {isError && (
          <div className="flex flex-col items-center justify-center rounded-lg px-11 py-4 text-gray-700">
            <ImSad size={30} className="text-gray-500" />
            <p className="text-gray-500 italic">No user found!</p>
          </div>
        )}
      </div>
    </>
  );
};
export default GithubFind;
