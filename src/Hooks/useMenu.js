import { useState, useEffect } from "react";

const useMenu = (id) => {
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getMenuInfo();
  }, []);
  const getMenuInfo = async function () {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.375461&lng=79.457907&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    // const newData = json.data.cards[0].card.card.info;
    setRestaurant(json.data.cards[0].card.card.info);

    console.log(json.data);
  };
  return restaurant;
};
export default useMenu;
