import { Link } from "react-router-dom";
import Buble from "../components/Buble";
import DashList from "../components/DashList";

function Home() {
  return (
    <div id="flex">
      <h2 className="m-3 flex items-start p-3 text-xl">Home</h2>
      <br />
      <div className="flex items-center justify-around">
        <Buble text={<DashList />} size="large" />
      </div>
      <div  className="flex justify-center items-center">
      <Link to="/create" className="flex">
      <Buble text="+" size="xs" className=""/>
      <div className="m-2"></div>
      <label className="flex">create new Dash</label></Link>
      </div>
      <div className="flex justify-end items-end">
      <Link to="/dash/settings"> <Buble text={<p className="text-sm">settings</p>} size="small" /> </Link>
      </div>
    </div>
  );
}

export default Home;

