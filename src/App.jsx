import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";
import Dash from "./pages/dash";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Dashsettings from "./pages/Dashsettings";
import ProfileSettings from "./pages/ProfileSettings";
import './app.css';
import './index.css';
import IsPrivate from "./components/isPrivate"; 
import IsAnon from "./components/isAnon"; 
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
      <Routes>
        <Route exact path="/" element={ <IsAnon> <Welcome /> </IsAnon> } />
        <Route path="/signup" element={ <IsAnon> <Signup /> </IsAnon> } />
        <Route path="/profile" element={ <IsPrivate> <Navbar /> <Profile /> </IsPrivate>} />
        <Route path="/:dashId" element={ <IsPrivate> <Navbar /> <Dash /> </IsPrivate>} />
        <Route path="/home/" element={ <IsPrivate> <Navbar /> <Home /> </IsPrivate> } />
        <Route path="/dash/create" element={<IsPrivate> <Navbar /> <Create /> </IsPrivate> } />
        <Route path="/dash/:dashId/settings/" element={<IsPrivate> <Navbar /> <Dashsettings /> </IsPrivate>} />
        <Route path="/profile/settings" element={<IsPrivate> <Navbar /> <ProfileSettings /> </IsPrivate> } />
      </Routes>
  );
}

export default App;

/* 

Home - lista dashboards (cuadro independiente con croll)
     - Ajustes Home ¿?
     - Mi profile link
     - crear nuevo dash
     - Ultimos perfiles conectados
        

- create dashboard: foto, titulo, descrip, connected with

multiform data submit metodo post redirect


Back: 

Welcome page - ruta log in (Post)
Sign up - ruta Sign up (Post)
Verify - ruta (post)

Profile - ruta user (get & put & delete)
Home - ruta user & dashes (get) + create (post) + delete (delete posts also)
**Dash - ruta user (get) dash (get + post + put)

 */

//to do 1st: pages & formularios !!!

