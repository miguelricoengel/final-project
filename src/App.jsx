import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";
import Dash from "./pages/dash";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Dashsettings from "./pages/Dashsettings";
import './app.css';
import './index.css';



function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/dash/settings" element={<Dashsettings />} />
{/* 

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

 */}

      </Routes>
  );
}

export default App;

//to do 1st: pages & formularios !!!

