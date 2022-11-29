import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
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

  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(setUser(user));
    }
  }, [token, dispatch]);

  //Get user from local storage
  //const user = JSON.parse(localStorage.getItem("profile"));
  /*
  const { user } = useSelector((state) => ({ ...state.auth }));
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);
  */

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/appreciation/:id" element={<Gratitude />} />
          <Route path="/heroeslist" element={<HeroesList />} />
          <Route path="/hero/:id" element={<Hero />} />
          <Route path="/writer/:id" element={<Writer />} />

          <Route path="/my-profile" element={<PrivateRoute />}>
            <Route path="/my-profile" element={<UserDashboard />} />
          </Route>
          <Route path="/my-admin" element={<PrivateRoute />}>
            <Route path="/my-admin" element={<AdminDashboard />} />
          </Route>
          <Route path="/create-hero" element={<PrivateRoute />}>
            <Route path="/create-hero" element={<CreateHero />} />
          </Route>
          <Route path="/give-gratitude" element={<PrivateRoute />}>
            <Route path="/give-gratitude" element={<GiveGratitude />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
