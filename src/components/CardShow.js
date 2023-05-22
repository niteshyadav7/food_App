import { useEffect, useState } from "react";
import { restaurantData } from "../utils/constants";
import Card from "./Card";
import { filteredData } from "./imp";

const CardShow = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurant, setRestaurant] = useState(restaurantData);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleClick = () => {
    const rest = filteredData(searchInput, restaurantData);
    setRestaurant(rest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rest = filteredData(searchInput, restaurantData);
    setRestaurant(rest);
  };


  return (
    <>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={searchInput}
            className="p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-gray-50  w-6/12 rounded-full"
            placeholder="Search ..."
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex justify-around flex-wrap">
        {restaurant.map((rest) => {
          return <Card key={rest.data.id} data={rest.data} />;
        })}
      </div>
    </>
  );
};
export default CardShow;
