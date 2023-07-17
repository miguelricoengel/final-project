import { Link } from "react-router-dom";
import Buble from "../components/Buble";
import DashList from "../components/DashList";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div id="flex">
      <h2 className="m-3 flex items-start p-3 text-xl">Home</h2>
      <h2 className="m-3 flex items-start p-3">
        {" "}
        Welcome back @{" "}
        <div className=" font-bold text-teal-400">{user && user.userName}</div>
      </h2>
      <br />
      <div className="flex items-center justify-around">
        <Buble text={<DashList />} size="large" />
      </div>
      <div className="flex items-center justify-center">
        <Link to="/dash/create" className="flex">
          <Buble text="+" size="xs" className="" />
          <div className="m-2"></div>
          <label className="flex">create new Dash</label>
        </Link>
      </div>
      <div className="flex items-end justify-end">
        <Link to="/dash/:dashID/settings">
          {" "}
          <Buble text={<p className="text-sm">settings</p>} size="small" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
