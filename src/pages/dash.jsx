import { useState } from "react";
import Buble from "../components/Buble";
import Messages from "../components/Messages";
import Pics from "../components/Pics";
import Songs from "../components/Songs";

function Dash() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleBubleClick = (item) => {
    setSelectedItem(item);
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "pics":
        return <Pics/>;
      case "songs":
        return <Songs/>;
      case "messages":
        return <Messages/>;
      default:
        return <div>All content mixed, sorted by date</div>;
    }
  };

  return (
    <>
      <div className="mb-4 flex h-screen m-4">
        <div className="w-1/3">
          <Buble text="pics" size="small" onClick={() => handleBubleClick("pics")} /> <br />
          <Buble text="songs" size="small" onClick={() => handleBubleClick("songs")} /> <br />
          <Buble text="messages" size="small" onClick={() => handleBubleClick("messages")} /> <br />
          <Buble text="all" size="small" onClick={() => handleBubleClick("")} /> <br />
        </div>
        <div className="w-2/3">{renderContent()}</div>
      </div>
      <div id="background-wrap">
</div>
    </>
  );
}

export default Dash;
