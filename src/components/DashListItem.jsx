import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DashListItem ( { title, description, _id, photo } ) {
  
  return (
    <div className="">
       <Link to={`/${_id}`}>
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-70 rounded-full border-2 border-blue-200 p-1"
        src={photo}
        alt="user photo"/>   
    </div>
    <div className="w-3/4">
      <h3>🫧 {title}</h3>
      <p>{description}</p>
    </div>
    </Link>
  </div>
  
  );
}

DashListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default DashListItem;



   