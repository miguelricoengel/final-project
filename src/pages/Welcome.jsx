import { Link } from "react-router-dom";
import Login from "../components/Login";
import Buble from "../components/Buble";


function Welcome() {
  return (
    
    <div className="h-screen z-1 front " id="background-wrap">
    <div className="flex items-center justify-center pt-24">
    <Buble text={<h1 className="text-white z-1">buble</h1>} size="large" /> <br/><br/></div><br/>
      <p className="read-the-docs">
 My buble, Our buble <br/>Enter and start sharing ur memories w your loved ones!
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
