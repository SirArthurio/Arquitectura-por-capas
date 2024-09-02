import { Suspense } from "react";
import { AppRutas } from "./Pages/Rutas";
import { spinner } from "@nextui-org/theme";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import ScrollToTop from './Componets/scroll.jsx';

import Barra from "./Componets/Navbar.jsx";

function AppContent() {
  return (
    <Suspense fallback={spinner}>
      <ScrollToTop />
      <Barra />
      <AppRutas />
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
