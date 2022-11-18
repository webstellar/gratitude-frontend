import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Writer from "./pages/Writer";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/auth/authSlice";

const theme = createTheme({
  typography: {
    fontFamily: ["Josefin Sans"].join(","),
  },
  palette: {
    secondary: {
      main: "#F6430A",
    },
  },
});

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appreciation/:id" element={<Gratitude />} />
          <Route path="/heroeslist" element={<HeroesList />} />
          <Route path="/hero/:id" element={<Hero />} />
          <Route path="/my-profile" element={<UserDashboard />} />
          <Route path="/my-admin" element={<AdminDashboard />} />
          <Route path="/create-hero" element={<CreateHero />} />
          <Route path="/give-gratitude" element={<GiveGratitude />} />
          <Route path="/writer/:id" element={<Writer />} />
        </Routes>
      </Router>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
