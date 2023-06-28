import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
