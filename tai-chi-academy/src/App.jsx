import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TarievenPage from "./pages/TarievenPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/tarieven" element={<TarievenPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
