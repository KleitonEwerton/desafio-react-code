//------------------------- CSS -------------------------//

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles.css";

//-------------------------------------------------------//

function App() {
  return (
    <div className="App">
      <div className="App-main"></div>
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
