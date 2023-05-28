import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMenu from "../Hooks/useMenu";

const cloudinary_URL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

const Menu = () => {
  const { id } = useParams();
  //   console.log(params);

  // const [restaurant, setRestaurant] = useState({});

  // useEffect(() => {
  //   getMenuInfo();
  // }, []);
  // const getMenuInfo = async function () {
  //   const data = await fetch(
  //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.375461&lng=79.457907&restaurantId=${id}&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   // const newData = json.data.cards[0].card.card.info;
  //   setRestaurant(json.data.cards[0].card.card.info);

  //   console.log(json.data);
  // };
  const restaurant = useMenu(id);

  return (
    <div className="flex ">
      <div className="food">
        <div>Menu id:{id}</div>
        <img src={cloudinary_URL + restaurant.cloudinaryImageId} width={300} />
        <div>{restaurant.name}</div>
        <div>{restaurant.areaName}</div>
        <div>{restaurant.avgRating}</div>
        <div>{restaurant.city}</div>
      </div>
      <ul className="ml-80">
        <li>Aloo tikki</li>
        <li>Aloo tuk</li>
        <li>Aloo matar</li>
        <li>Aloo kulcha</li>
        <li>Baati</li>
        <li>Biryani</li>
        <li>Butter chicken</li>
        <li>Chicken razala</li>
        <li>Chicken Tikka</li>
        <li>Daal puri</li>
        <li>Poha</li>
        <li>Fara</li>
        <li>Phirni</li>
        <li>Gajar matar aloo</li>
        <li>Imarti</li>
        <li>Khichdi</li>
        <li>Lauki ke kofte</li>
        <li>Makhaan ka kheer</li>
        <li>Mathura ke pede</li>
      </ul>
    </div>
  );
};

export default Menu;
