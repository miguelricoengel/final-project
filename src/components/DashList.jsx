function DashList() {

  const getAllDashes = () => {
    const storedToken = localStorage.getItem("authToken");
   
    axios
      .get(
      `${API_URL}/api/Dashes`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
      .then((response) => setDashes(response.data))
      .catch((error) => console.log(error));
  };
   
  return (
<div className="flex flex-col h-60 w-60 overflow-y-scroll">
  <div className="flex">
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
        alt="user photo"
      />
    </div>
    <div className="w-3/4">
      <h3>🫧 Dash 1 - Title 1</h3>
      <p className="text-xs">connected with @asdjchdf</p>
    </div>
  </div><br/>

  <div className="flex">
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
        alt="user photo"
      />
    </div>
    <div className="w-3/4">
      <h3>🫧 Dash 2 - Title 2</h3>
      <p className="text-xs">connected with @ajcfffhdf</p>
    </div>
  </div><br/>

  <div className="flex">
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
        alt="user photo"
      />
    </div>
    <div className="w-3/4">
      <h3>🫧 Dash 3 - Title 3</h3>
      <p className="text-xs">connected with @rrrrgcfhdf</p>
    </div>
  </div><br/>

  <div className="flex">
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
        alt="user photo"
      />
    </div>
    <div className="w-3/4">
      <h3>🫧 Dash 4 - Title 4</h3>
      <p className="text-xs">connected with @lñoikhdf</p>
    </div>
  </div><br/>

  <div className="flex">
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src="https://media.istockphoto.com/id/1383831579/vector/double-thumbs-up-emoticon.jpg?s=612x612&w=0&k=20&c=gk_PkPyFLeQCB69U8vhxmzlyikncetntRGfRghJTEiM="
        alt="user photo"
      />
    </div>
    <div className="w-3/4">
      <h3>🫧 Dash 5 - Title 5</h3>
      <p className="text-xs">connected with @lbbsldxzh</p>
    </div>
  </div><br/>

</div>

  );
}

export default DashList;
