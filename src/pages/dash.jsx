import Buble from "../components/Buble"

function Dash () {
    return(
        <>
       <div className="h-screen flex mb-4">
       <div className="w-1/4 ">
       <Buble text="pics" size="small"/> <br/>
       <Buble text="songs" size="small"/> <br/>
       <Buble text="txt" size="small"/> <br/>

       </div>
  <div className="w-3/4 ">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
        </div>
  </div>
</>
    );
}

export default Dash