import { Routes, Route } from "react-router-dom";
import PillNav from "./components/navbar/PillNav";

import Home from "./routes/Home";
import About from "./routes/About";
import Week1 from "./routes/Week1";
import Week3 from "./routes/Week3";
import Week6 from "./routes/Week6";
import Week8 from "./routes/Week8";
import Week9 from "./routes/Week9";
import Week10 from "./routes/Week10";
import Week12 from "./routes/Week12";

export default function App() {
  return (
    <>
      <PillNav
        logo="/Innovacion-PostureVibes/images/icons/PostureVibes.png"
        items={[
          { label: 'Inicio', href: '/' },
          { label: 'Acerca de nosotros', href: '/about' },
          { label: 'Semana 1', href: '/week1' },
          { label: 'Semana 3', href: '/week3' },
          { label: 'Semana 6', href: '/week6' },
          { label: 'Semana 8', href: '/week8' },
          { label: 'Semana 9', href: '/week9' },
          { label: 'Semana 10', href: '/week10' },
          { label: 'Semana 12', href: '/week12' }
        ]}
      />

      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/week1" element={<Week1 />} />
          <Route path="/week3" element={<Week3 />} />
          <Route path="/week6" element={<Week6 />} />
          <Route path="/week8" element={<Week8 />} />
          <Route path="/week9" element={<Week9 />} />
          <Route path="/week10" element={<Week10 />} />
          <Route path="/week12" element={<Week12 />} />
        </Routes>
      </div>
    </>
  );
}
