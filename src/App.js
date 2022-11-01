import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gratitude from "./pages/Gratitude";
import HeroesList from "./pages/HeroesList";
import Hero from "./pages/Hero";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreateHero from "./pages/CreateHero";
import GiveGratitude from "./pages/GiveGratitude";

const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/gratitude" element={<Gratitude />} />
          <Route path="/heroeslist" element={<HeroesList />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/my-dashbaord" element={<UserDashboard />} />
          <Route path="/my-admin" element={<AdminDashboard />} />
          <Route path="/create-hero" element={<CreateHero />} />
          <Route path="/give-gratitude" element={<GiveGratitude />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
