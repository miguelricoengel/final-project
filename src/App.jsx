import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";
import Dash from "./pages/dash";
import './app.css';
import './index.css';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
  );
}

export default App;
