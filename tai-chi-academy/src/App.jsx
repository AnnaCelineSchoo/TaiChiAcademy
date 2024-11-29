import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TarievenPage from "./pages/TarievenPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import LessenPage from "./pages/LessenPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/lessen" element={<LessenPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/tarieven" element={<TarievenPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
