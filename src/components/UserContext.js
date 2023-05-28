import { createContext } from "react";

const UserContext = createContext({user:{
  name: "Nitesh Yadav",
  email: "nitesh@gmail.com",
}});
export default UserContext;