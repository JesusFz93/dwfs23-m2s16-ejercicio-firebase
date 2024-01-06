import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import PeliculasPage from "../pages/PeliculasPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/peliculas" element={<PeliculasPage />} />

          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* <Footer /> */}
    </Router>
  );
};

export default AppRouter;
