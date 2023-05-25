import { useEffect, useState } from "react";

import Card from "./Card";
import { filteredData } from "./helper";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleClick = () => {
    const rest = filteredData(searchInput, filteredRestaurant);
    setFilteredRestaurant(rest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rest = filteredData(searchInput, restaurant);
    setFilteredRestaurant(rest);
  };

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async function () {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.375461&lng=79.457907&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // console.log(json?.data?.cards?.[2]?.data.data.cards);
      setRestaurant(json?.data?.cards?.[2]?.data.data.cards);
      setFilteredRestaurant(json?.data?.cards?.[2]?.data.data.cards);
    } catch (err) {
      alert(err.message);
      console.log(err.message);
    }
  };
  
  const online=useOnline();
  if(!online){
    return(
      <div>offline</div>
    )
  }
  
  if (!restaurant) return <Shimmer />;
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
      <div className="ml-10 mr-10 ">
        {restaurant.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex justify-around flex-wrap ">
            {filteredRestaurant.map((rest) => {
              return (
                <Link to={"/menu/" + rest.data.id} key={rest.data.id}>
                  <Card data={rest.data} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Body;
