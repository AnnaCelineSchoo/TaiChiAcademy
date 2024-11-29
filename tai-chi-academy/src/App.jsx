import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TarievenPage from "./pages/TarievenPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import MediaPage from "./pages/MediaPage.jsx";
import LessenPage from "./pages/LessenPage.jsx";

// todo:
// achtergrond contct niet goed
// navbar is transparant niet goed when scrolling change it
// lessen en media page niet mooi
// make repeatable component for media (json?)
// add email service when form is submitted
// add youtube
// add contact
// add map to contact
// maak agenda met lestijden en eventuele wokshops die gepland zijn
// maak ffunctionaliteit om voor workshop in te schrijven

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
