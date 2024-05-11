import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context/authContext";
import "./styles/App.css";
import AppRouter from "./router/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  const user = {
    id: 1,
    username: "admin",
    password: "admin",
  };

  const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  saveUser(user);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
