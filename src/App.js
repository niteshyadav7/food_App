import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import UserContext from "./components/UserContext";
// import { Provider } from "react-redux";
// import store from "./redux/store";

const App = () => {
  const [user, setUser] = useState({
    name: "Golu",
    email: "golu@gmail.com",
  });

  return (
    // <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    // </Provider>
  );
};

export default App;
