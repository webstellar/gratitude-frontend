import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gratitude from "./pages/Gratitude";
import HeroesList from "./pages/HeroesList";
import Hero from "./pages/Hero";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/gratitude" element={<Gratitude />} />
            <Route path="/heroeslist" element={<HeroesList />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/my-dashbaord" element={<UserDashboard />} />
            <Route path="/my-admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
