function Pics(image) {

  return (
    <div className="scrollbar-track-blue-300 scrollbar-thumb-blue-500 w-full overflow-y-scroll p-5 ">
      <div className="rounded-lg border-4 border-blue-200 p-3 ">
      <img src={image.path} alt="Pics"/>
      </div>
  
    </div>
  );
}

export default Pics;
