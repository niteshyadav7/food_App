import { Link } from "react-router-dom";
import { LOGO_URL } from "./helper";
import { useOnline } from "./helper";
import { useContext } from "react";
import UserContext from "./UserContext";

const Header = () => {
  const user = useContext(UserContext);

  const online = useOnline();

  return (
    <div className="bg-slate-600 flex justify-between">
      <div className="m-2 p-4 ">
        <Link to="/">
          {" "}
          <img
            src={LOGO_URL}
            alt="a logo"
            width={200}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <h1>{user.user.name}</h1>
        <h1>{user.user.email}</h1>
      </div>
      <ul className="flex font-mono font-bold  ">
        <li className=" m-5 mt-16 hover:text-red-500">
          <Link to="/"> Home</Link>
        </li>
        <li className="m-5 mt-16 hover:text-red-500 ">
          <Link to="/about">About</Link>
        </li>
        <li className=" m-5 mt-16 hover:text-red-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className=" m-5 mt-16 hover:text-red-500">
          <Link to="/instamart">InstaMart</Link>
        </li>
        <li className=" m-5 mt-16 hover:text-red-500">Cart</li>
        <li className=" m-5 mt-16 hover:text-red-500 ">
          {online ? "✅" : "🛑"}
        </li>
      </ul>
    </div>
  );
};
export default Header;
