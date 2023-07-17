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
  const [selectedItem, setSelectedItem] = useState("");
  const { dashId } = useParams();
  const storedToken = localStorage.getItem("authToken");

  const handleBubleClick = (item) => {
    setSelectedItem(item);
  };
  
  const renderContent = () => {
    if (!dashboard) {
      return null;
    }
    switch (selectedItem) {
      case "pics":
        return (
          <>
            {dashboard &&
              dashboard.posts
                .filter((post) => post.format === "Image")
                .map((post) => <Pics key={post._id} {...post.idContent} />)}
          </>
        );
      case "songs":
        return (
          <>
            {dashboard &&
              dashboard.posts
                .filter((post) => post.format === "Song")
                .map((post) => <Songs key={post._id} {...post.idContent} />)}
          </>
        );
      case "messages":
        return (
          <>
            {dashboard &&
              dashboard.posts
                .filter((post) => post.format === "Quote")
                .map((post) => <Messages key={post._id} {...post.idContent} />)}
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
        <div onClick={() => handleBubleClick("pics")}>
          <Buble
            text="pics"
            size="small"
            refreshDashboard={getDashboard}
            DashId={dashId}
          />
        </div>
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
