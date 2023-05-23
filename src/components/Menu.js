import { useParams } from "react-router-dom";

const Menu = () => {
  const {id} = useParams();
//   console.log(params);
  return (
    <div>
      <div>Menu id:{id}</div>
      <div>Namaste React</div>
    </div>
  );
};

export default Menu;
