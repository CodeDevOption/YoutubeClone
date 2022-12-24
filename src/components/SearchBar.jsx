import React from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value.length > 0) {
      navigate(`/search/${e.target[0].value}`);
    } else {
      navigate("/");
    }
  };
  return (
    <form
      className="bg-white flex  rounded-full md:w-2/4 py-2 px-3 md:px-5 mr-5 sm:mr-10"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-1 ml-2 border-none outline-none font-semibold"
        placeholder="Search..."
      />
      <button>
        <MdSearch className="text-red-500 text-xl ml-2 " />
      </button>
    </form>
  );
};

export default SearchBar;
