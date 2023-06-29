import { Link } from "react-router-dom";
import Login from "../components/Login";
import { useState } from "react";

function Welcome() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
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

  return (
    <div className="h-screen">
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="ball2 flex justify-center hover:drop-shadow-lg transition-shadow duration-300 cursor-grab select-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div className="title flex justify-center items-center">
          <h1 className="text-white">buble</h1>
        </div>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex justify-center p-7">
        <Login />
      </div>
      <div className="flex justify-center">
        <p>
          don't have an account yet? <Link to="/Signup">sign up here!</Link>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
