import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Sketches from "../../pages/Gallery/Sketches/Sketches";
import DigitalArt from "../../pages/Gallery/DigitalArt/DigitalArt";
import TraditionalArt from "../../pages/Gallery/TraditionalArt/TraditionalArt";
import Patterns from "../../pages/Gallery/Patterns/Patterns";
import Comissions from "../../pages/Gallery/Comissions/Comissions";

function GalleryNavBar() {
  return (
    <Router>
      <nav>
        <li>
          <NavLink to="/sketches">Sketches</NavLink>
        </li>
        <li>
          <NavLink to="/digital-art">Digital Art</NavLink>
        </li>
        <li>
          <NavLink to="/traditional-art">Traditional Art</NavLink>
        </li>
        <li>
          <NavLink to="/patterns">Patterns</NavLink>
        </li>
        <li>
          <NavLink to="/comissions">Comissions</NavLink>
        </li>
      </nav>
      <Routes>
        <Route path="/sketches" element={<Sketches />} />
        <Route path="/digital-art" element={<DigitalArt />} />
        <Route path="/traditional-art" element={<TraditionalArt />} />
        <Route path="/patterns" element={<Patterns />} />
        <Route path="/comissions" element={<Comissions />} />
      </Routes>
    </Router>
  );
}

export default GalleryNavBar;
