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

    if (!dashboard.posts) {
      return null;
    }

    switch (selectedItem) {
      case "pics":
        return (
          <>
            {dashboard.posts
              .filter((post) => post.format === "Image")
              .map((post) => (
                <Pics key={post._id} {...post.idContent} />
              ))}
          </>
        );
      case "songs":
        return (
          <>
            {dashboard.posts
              .filter((post) => post.format === "Song")
              .map((post) => (
                <Songs key={post._id} {...post.idContent} />
              ))}
          </>
        );
      case "messages":
        return (
          <>
            {dashboard.posts
              .filter((post) => post.format === "Quote")
              .map((post) => (
                <Messages key={post._id} {...post.idContent} />
              ))}
          </>
        );
      default:
        return <All dashboard={dashboard} />;
    }
  };

  const getDashboard = () => {
    axios
      .get(`${API_URL}/api/dashboard/${dashId}`, {
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
          <Buble text="pics" size="small" />
        </div>
        <br />
        <div onClick={() => handleBubleClick("songs")}>
          <Buble text="songs" size="small" />
        </div>
        <br />
        <div onClick={() => handleBubleClick("messages")}>
          <Buble text="messages" size="small" />
        </div>
        <br />
        <div onClick={() => handleBubleClick("")}>
          <Buble text="all" size="small" />
        </div>
      </div>

      <div className="w-2/3">
        {renderContent()}
        {dashboard &&
          dashboard.posts
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .map((post) => (
              <div key={post._id}>
                {post.format === "Image" && <Pics {...post.idContent} />}
                {post.format === "Song" && <Songs {...post.idContent} />}
                {post.format === "Quote" && <Messages {...post.idContent} />}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Dash;
