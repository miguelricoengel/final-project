import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";
import Dash from "./pages/Dash";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Dashsettings from "./pages/Dashsettings";
import ProfileSettings from "./pages/ProfileSettings";
import './app.css';
import './index.css';
import IsPrivate from "./components/IsPrivate"; 
import IsAnon from "./components/IsAnon"; 
import Navbar from "./components/Navbar.jsx"
import AddMessage from "./components/AddMessage";
import AddImage from "./components/AddImage";
import './normalize.css'

function App() {
  return (
      <Routes>
        <Route exact path="/" element={ <IsAnon> <Welcome /> </IsAnon> } />
        <Route path="/signup" element={ <IsAnon> <Signup /> </IsAnon> } />
        <Route path="/profile" element={ <IsPrivate> <Navbar /> <Profile /> </IsPrivate>} />
        <Route path="/profile/settings" element={<IsPrivate> <Navbar /> <ProfileSettings /> </IsPrivate> } />
        <Route path="/home/" element={ <IsPrivate> <Navbar /> <Home /> </IsPrivate> } />
        <Route path="/create" element={<IsPrivate> <Navbar /> <Create /> </IsPrivate> } />
        <Route path="/:dashId" element={ <IsPrivate> <Navbar /> <Dash /> </IsPrivate>} />
        <Route path="/:dashId/settings/" element={<IsPrivate> <Navbar /> <Dashsettings /> </IsPrivate>} />
        <Route path="/:dashId/Post-message/" element={<IsPrivate> <Navbar /> <AddMessage /> </IsPrivate>} />
        <Route path="/:dashId/Post-image/" element={<IsPrivate> <Navbar /> <AddImage /> </IsPrivate>} />
      </Routes>
  );
}

export default App;