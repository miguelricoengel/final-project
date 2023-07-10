import { useState } from "react";
import PropTypes from "prop-types";

function Buble({ text, size, onClick }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent component
    setIsDragging(true);
    setDragOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setPosition({
      x: event.clientX - dragOffset.x,
      y: event.clientY - dragOffset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getSizeClassName = () => {
    switch (size) {
      case "xs":
        return "w-14 h-14";
      case "small":
        return "w-28 h-28";
      case "medium":
        return "w-64 h-64";
      case "large":
        return "w-96 h-96";
      default:
        return "";
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className={`draggable-div ball2 flex justify-center items-center hover:drop-shadow-lg transition-shadow duration-300 cursor-grab select-none ${getSizeClassName()}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        animation: isDragging ? "none" : "float 4.5s ease-in-out infinite",
      }}
      onClick={onClick} // Call the onClick prop passed from the parent component
    >
      {text}
    </div>
  );
}

Buble.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Buble;
