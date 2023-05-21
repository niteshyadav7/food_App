import { restaurantData } from "../utils/constants";
import Card from "./Card";

const CardShow = () => {
  return (
    <>
      <div className="text-center">
        <input
          className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  w-6/12 rounded-full"
          placeholder="Search ..."
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Search
        </button>
      </div>
      <div className="flex justify-around flex-wrap">
        {restaurantData.map((rest) => {
          return <Card key={rest.data.id} data={rest.data} />;
        })}
      </div>
    </>
  );
};
export default CardShow;
