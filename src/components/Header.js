import { LOGO_URL } from "../utils/helper";

const Header = () => {
  return (
    <div className="bg-slate-600 flex justify-between">
      <div className="m-2 p-4 ">
        <img
          src={LOGO_URL}
          alt="a logo"
          width={200}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex font-mono font-bold  ">
        <li className="m-4 p-6 pt-12 cursor-pointer	hover:text-green-300 focus:text-green-500 active:text-green-700 ">
          Home
        </li>
        <li className="m-4 p-6 pt-12 cursor-pointer	hover:text-green-300 focus:text-green-500 active:text-green-700 ">
          About
        </li>
        <li className="m-4 p-6 pt-12 cursor-pointer	hover:text-green-300 focus:text-green-500 active:text-green-700 ">
          Contact
        </li>
        <li className="m-4 p-6 pt-12 cursor-pointer	hover:text-green-300 focus:text-green-500 active:text-green-700 ">
          Cart
        </li>
      </ul>
    </div>
  );
};
export default Header;
