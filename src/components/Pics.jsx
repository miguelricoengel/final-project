function Pics( image ) {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="max-w-md xl:ml-100  ">
        <div className="rounded-lg border-4 border-blue-200 p-3 w-96">
          <img src={image.path} alt="Pics" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Pics;
