import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DashListItem({ title, description, _id, image }) {
  const [imageSrc, setImageSrc] = useState(image);

  function handleImageError() {
    setImageSrc("/pics/Bubble_Pose.png");
  }

  return (
    <div className="flex w-full overflow-y-scroll scrollbar-track-blue-300 scrollbar-thumb-blue-500">
     <div className="flex w-1/4">
      <Link to={`/${_id}`} >
        <div>
          {imageSrc ? (
            <img
              className="h-12 w-12 rounded-full border-2 border-blue-200 p-1"
              src={imageSrc}
              alt="image"
              onError={handleImageError}
            />
          ) : (
            <img
              className="h-12 w-12 rounded-full border-2 border-blue-200 p-1"
              src="/pics/Bubble_Pose.png"
              alt="default image"
            />
          )}
        </div>
      </Link>
      </div>
      <div className="flex w-3/4 border-b pb-2 m-1">
        <div className="mb-2">
          <h3 className="mb-1 text-sky-600 text-left"> {title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

DashListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default DashListItem;