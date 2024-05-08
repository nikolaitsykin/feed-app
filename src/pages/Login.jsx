import React from "react";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1 className="page_header">Login page</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Enter login" autoComplete="username" />
        <Input
          type="password"
          placeholder="Enter password"
          autoComplete="current-password"
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
