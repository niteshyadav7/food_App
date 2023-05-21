// import { cloudinary_URL } from "../utils/helper";
const img='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

const Card = ({ data }) => {
//   console.log(data);
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
        src={img + cloudinaryImageId}
        width={400}
      />
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-base font-thin">{cuisines.join(", ")}</div>
      <ul className="flex mt-4">
        <li className="ml-1">{avgRating}</li>
        <li className="ml-14 text-sm">{slaString}</li>
        <li className="ml-14 text-sm">{costForTwoString}</li>
      </ul>
    </div>
  );
};
export default Card;
