import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Buble from "../components/Buble";
import Messages from "../components/Messages";
import Pics from "../components/Pics";
import Songs from "../components/Songs";
import All from "../components/All";

const API_URL = "/backend";

function Dash() {
  const [dashboard, setDashboard] = useState(null);
  const { dashId } = useParams();
  const storedToken = localStorage.getItem("authToken");
  const [selectedItem, setSelectedItem] = useState("");

  const handleBubleClick = (item) => {
    setSelectedItem(item);
  };

  console.log(dashId);

  const renderContent = () => {
    switch (selectedItem) {
      case "pics":
        return <Pics />;
      case "songs":
        return <Songs />;
      case "messages":
        return (
          <>
            {dashboard &&
              dashboard.posts.idContent
                .filter((posts) => posts.format === "Quote")
                .map((quote) => <Messages key={quote._id} {...quote} />)}
          </>
        );
      default:
        return <All />;
    }
  };

  const getDashboard = () => {
    axios
      .get(`${API_URL}/api/${dashId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneDash = response.data;
        setDashboard(oneDash);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDashboard();
  }, []);

  return (
    <div className="m-4 mb-4 flex h-screen">
      <div className="w-1/3">
        <Buble
          text="pics"
          size="small"
          onClick={() => handleBubleClick("pics")}
          refreshDashboard={getDashboard}
          DashId={dashId}
        />
        <br />
        <Buble
          text="songs"
          size="small"
          onClick={() => handleBubleClick("songs")}
          refreshDashboard={getDashboard}
          DashId={dashId}
        />
        <br />
        <Buble
          text="messages"
          size="small"
          onClick={() => handleBubleClick("messages")}
          refreshDashboard={getDashboard}
          DashId={dashId}
        />
        <br />
        <Buble
          text="all"
          size="small"
          onClick={() => handleBubleClick("")}
          refreshDashboard={getDashboard}
          DashId={dashId}
        />
      </div>
      <div className="w-2/3">{renderContent()}</div>
    </div>
  );
}

export default Dash;
