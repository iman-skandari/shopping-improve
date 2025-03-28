import { useContext } from "react";
import styles from "./login.module.scss";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setAuth({ user: "mehr", id: 1 })}>login</button>
      {auth?.user ? <div>{auth?.user}</div> : null}
    </div>
  );
};

export default Login;
