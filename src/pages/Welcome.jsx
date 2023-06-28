import { Link } from "react-router-dom";
import Login from "../components/Login";

function Welcome() {
  return (
    <div>
      <p className= "title"> buble </p>
      <p>(((pic)))</p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
     
      <div className="flex justify-center p-7 h-screen">
      <Login />
      <br />
      <Link to="/Signup"><p> dont have an account yet? sing up here!</p></Link>
    </div>
    </div>
  );
}

export default Welcome;
