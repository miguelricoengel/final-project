import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Buble from "../components/Buble";
import Messages from "../components/Messages";
import Pics from "../components/Pics";
// import Songs from "../components/Songs";
import All from "../components/All";

const API_URL = "/backend";

function Dash() {
  const [dashboard, setDashboard] = useState(null);
  const [selectedItem, setSelectedItem] = useState("all"); // Default selected item is "all"
  const { dashId } = useParams();
  const storedToken = localStorage.getItem("authToken");

  const handleBubleClick = (item) => {
    setSelectedItem(item);  
  };

  const getDashboard = (dashId, storedToken, setDashboard) => {
    axios
      .get(`${API_URL}/api/dashboard/${dashId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneDash = response.data;
        // Sort posts by timestamp in descending order
        oneDash.posts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        setDashboard(oneDash);
      })
      .catch((error) => console.log(error));
  };

  const renderContent = () => {
    if (!dashboard) {
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
      // case "songs":
      //   return (
      //     <>
      //       {dashboard.posts
      //         .filter((post) => post.format === "Song")
      //         .map((post) => (
      //           <Songs key={post._id} {...post.idContent} />
      //         ))}
      //     </>
      //   );
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

  useEffect(() => {
    getDashboard(dashId, storedToken, setDashboard);
  }, [dashId, storedToken]);

  return (
    <div className="m-4 mb-4 h-screen">
      <div className="grid grid-cols-6">
        <div className="col-span-1">
          <div onClick={() => handleBubleClick("pics")}>
            <Buble text="pics" size="small" />
          </div>
          {/* <div onClick={() => handleBubleClick("songs")}>
            <Buble text="songs" size="small" />
          </div> */}
          <br />
          <div onClick={() => handleBubleClick("messages")}>
            <Buble text="messages" size="small" />
          </div>
          <br />
          <div onClick={() => handleBubleClick("all")}>
            <Buble text="all" size="small" />
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-center">
          <div className="border-4 border-blue-300/50 rounded-lg overflow-y-auto max-h-[calc(100vh-200px)] xl:ml-3/3">
            {renderContent()}
          </div>
        </div>
        <div className="col-span-1">
          <div className="fixed bottom-10 right-10">
            <Link to={`/${dashId}/settings`}>
              <Buble text="settings" size="small" />
            </Link>
          </div>
  
          <div className="fixed bottom-0 left-0 ml-4 mb-4">
            {/* Dropdown menu */}
            <select
              className="bg-blue-300 text-white px-4 py-2 rounded-md"
              onChange={(e) => {
                const selectedOption = e.target.value;
                switch (selectedOption) {
                  // case "songs":
                  //   window.location.href = `/${dashId}/post-song/`;
                  //   break;
                  case "pics":
                    window.location.href = `/${dashId}/post-image/`;
                    break;
                  case "messages":
                    window.location.href = `/${dashId}/post-message/`;
                    break;
                  default:
                    break;
                }
              }}
            >
              <option value="" className="bg-blue-500/50">¡share something!</option>
              {/* <option value="songs">Song</option> */}
              <option value="pics">Pic</option>
              <option value="messages">Message</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
            }

export default Dash;
