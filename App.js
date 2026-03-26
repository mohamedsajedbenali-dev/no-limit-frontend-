import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Footer from "./components/Footer";
import MusclesPage from "./pages/MusclesPage";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const location = useLocation();

  // ❗ hide navbar & footer on dashboard
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />
        <Route path="/muscles" element={<MusclesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}