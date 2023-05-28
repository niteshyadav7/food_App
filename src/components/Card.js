import { useContext } from "react";
import { cloudinary_URL } from "./helper";
import UserContext from "./UserContext";

const Card = ({ data }) => {
  //   console.log(data);
  const user = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
  } = data;
  return (
    <div className="hover:border-2 hover:shadow-xl w-72 h-auto">
      <img
        className="p-4"
        src={cloudinary_URL + cloudinaryImageId}
        width={400}
      />
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-base font-thin">{cuisines.join(", ")}</div>
      <ul className="flex mt-4">
        <li className="ml-1">{avgRating}</li>
        <li className="ml-14 text-sm">{slaString}</li>
        <li className="ml-14 text-sm">{costForTwoString}</li>
      </ul>
      <span>{user.user.name}</span>
      <span>{user.user.email}</span>
    </div>
  );
};
export default Card;
