import { useEffect, useState, useContext } from "react";
import Routing from "./Router.jsx";
// import { auth } from "./Utility/firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";

function App() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: Type.SET_USER, user: user });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
