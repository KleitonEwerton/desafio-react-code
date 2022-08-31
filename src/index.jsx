import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

//-------------------------- CSS -------------------------//

import "./index.css";
import Members from "./pages/Members";
import MembersAdm from "./pages/adm/MembersAdm";

//-------------------------------------------------------//

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/members" element={<Members />} />
        </Route>
          <Route path="/login" element={<Login />} />
          {/* <Route path='/adm' element={<DashBoardAdm />}> */}
          <Route path='/adm/members' element={<MembersAdm />}>
            
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
