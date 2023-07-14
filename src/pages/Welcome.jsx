import { Link } from "react-router-dom";
import Login from "../components/Login";
import Buble from "../components/Buble";


function Welcome() {
  return (
    <div className="h-screen z-1 front" id="background-wrap">
    
    <Buble text={<h1 className="text-white z-1">buble</h1>} size="large" /> <br/><br/>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex justify-center p-7">
        <Login />
      </div>
      <div className="flex justify-center">
        <p>
          dont have an account yet? <Link to="/signup">sign up here!</Link>
        </p>
      </div><br/>
    </div>
  );
}

export default Welcome;
