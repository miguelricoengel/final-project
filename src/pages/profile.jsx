import Buble from "../components/Buble";

function Profile() {
  return (
    <div id="background-wrap">
      <Buble text=" Welcome _____ !" size="small" />
      <Buble
        text={<img src="../pics/smiley.png" className="w-40" />}
        size="medium"
      />{" "}
      <br />
      <br />
      <div className="flex grid grid-cols-1 content-stretch gap-2">
        <h3>Username: </h3>
        <div className="m-2 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          @username
        </div>
        <h3>Email address: </h3>
        <div className="m-2 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          username@app.com
        </div>
        <h3>Active Dashs: </h3>
        <div className="m-2 flex items-center justify-center rounded-lg border border-gray-100 bg-gray-50 bg-white/50 p-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
          2
        </div>
      </div>
    </div>
  );
}

export default Profile;
