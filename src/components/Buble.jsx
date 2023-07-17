// import { useState } from "react";
import PropTypes from "prop-types";

function Buble({ text, size }) {
  // const [isDragging, setIsDragging] = useState(false);
  // const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseDown = (event) => {
  //   event.stopPropagation(); // Prevent event propagation to parent component
  //   setIsDragging(true);
  //   setDragOffset({
  //     x: event.clientX - position.x,
  //     y: event.clientY - position.y,
  //   });
  // };

  // const handleMouseMove = (event) => {
  //   if (!isDragging) return;
  //   setPosition({
  //     x: event.clientX - dragOffset.x,
  //     y: event.clientY - dragOffset.y,
  //   });
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  const getSizeClassName = () => {
    switch (size) {
      case "xs":
        return "w-14 h-14 background";
      case "small":
        return "w-28 h-28 background";
      case "medium":
        return "w-64 h-64 background";
      case "large":
        return "w-96 h-96 background";
        case "xl":
        return "w-max h-max background";
      default:
        return "";
    }
  };

  const background = () => {
    return (
      <div className="relative z-0 h-full w-full">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="color h-60 w-60 w animate-blob rounded-full bg-blue-300 opacity-40 mix-blend-multiply blur-xl filter"></div>
          <div className="color animation-delay-2000 absolute -right-4 top-0 h-60 w-60 animate-blob rounded-full bg-white opacity-40 mix-blend-multiply blur-xl filter"></div>
          <div className="color animation-delay-4000 absolute -bottom-8 left-20 h-60 w-60 animate-blob rounded-full bg-pink-300 opacity-40 mix-blend-multiply blur-xl filter"></div>
          <div className="color animation-delay-4000 bg-white-300 absolute -bottom-8 left-20 h-60 w-60 animate-blob rounded-full mix-blend-multiply blur-xl filter"></div>
        </div>
        <div className="mask rounded-full bg-black"></div>
      </div>
    );
  };

  
  return (
  <div
    // onMouseDown={handleMouseDown}
    // onMouseMove={handleMouseMove}
    // onMouseUp={handleMouseUp}
    className={`draggable-div ball2 flex select-none items-center justify-center transition-shadow duration-300 hover:drop-shadow-lg  hover:cursor-pointer ${getSizeClassName()}`}
    // style={{
    //   transform: `translate(${position.x}px, ${position.y}px)`,
    //   animation: isDragging ? "none" : "float 4.5s ease-in-out infinite",
    // }}
  >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        {text}
      </div>
      <div className="relative z-0 h-full w-full">
        {["xs", "small", "medium", "large", "xl"].includes(size) && background()}
      </div>
    </div>
  );
}

Buble.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.oneOf(["xs", "small", "medium", "large", "xl"]).isRequired,
  onClick: PropTypes.func,
};

export default Buble;
