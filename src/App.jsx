import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.jsx";
import Signup from "./pages/signup.jsx";
import Welcome from "./pages/Welcome.jsx";
import Dash from "./pages/Dash.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Dashsettings from "./pages/Dashsettings.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import './app.css';
import './index.css';
import IsPrivate from "./components/IsPrivate.jsx"; 
import IsAnon from "./components/IsAnon.jsx"; 
import Navbar from "./components/Navbar.jsx"
import AddMessage from "./components/AddMessage.jsx";
import AddImage from "./components/AddImage.jsx";
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
        <Route path="/:dashId/post-message/" element={<IsPrivate> <Navbar /> <AddMessage /> </IsPrivate>} />
        <Route path="/:dashId/post-image/" element={<IsPrivate> <Navbar /> <AddImage /> </IsPrivate>} />
      </Routes>
  );
}

export default App;