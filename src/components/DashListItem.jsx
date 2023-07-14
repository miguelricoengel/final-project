import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DashListItem ( { title, description, _id, photo, connectedUser } ) {
  
  return (
    <div className="flex">
       <Link to={`/dahes/${_id}`}>
    <div className="w-1/4 flex items-start">
      <img
        className="h-10 w-10 rounded-full border-2 border-blue-200 p-1"
        src={photo}
        alt="user photo"/>   
    </div>
    <div className="w-3/4">
      <h3>🫧 {title}</h3>
      <p>{description}</p>
      <p className="text-xs">connected with @{connectedUser}</p> 
    </div>
    </Link>
  </div>
  
  );
}

DashListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  connectedUser: PropTypes.string.isRequired,
};

export default DashListItem;



   