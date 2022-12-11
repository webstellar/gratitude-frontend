import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ExpressGratitude from "./pages/ExpressGratitude";
import Writer from "./pages/Writer";
import EditProfile from "./pages/EditProfile";
import ForgottenPassword from "./pages/ForgottenPassword";
import Search from "./pages/Search";
import EditHero from "./pages/EditHero";
import EditGratitude from "./pages/EditGratitude";
import MyGratitudesList from "./pages/MyGratitudesList";
import MyHeroesList from "./pages/MyHeroesList";

import { useDispatch } from "react-redux";
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
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:keyword" element={<Search />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/my-profile" /> : <SignIn />}
          />
          <Route
            path="/register"
            element={user ? <Navigate to="/my-profile" /> : <SignUp />}
          />
          <Route path="/appreciation/:id" element={<Gratitude />} />
          <Route path="/heroeslist" element={<HeroesList />} />
          <Route path="/hero/:id" element={<Hero />} />
          <Route path="/writer/:id" element={<Writer />} />
          <Route path="/forgot-password" element={<ForgottenPassword />} />

          <Route path="/my-profile" element={<PrivateRoute />}>
            <Route path="/my-profile" element={<UserDashboard />} />
          </Route>
          <Route path="/my-admin" element={<PrivateRoute />}>
            <Route path="/my-admin" element={<AdminDashboard />} />
          </Route>
          <Route path="/create-hero" element={<PrivateRoute />}>
            <Route path="/create-hero" element={<CreateHero />} />
          </Route>
          <Route path="/express-gratitude" element={<PrivateRoute />}>
            <Route path="/express-gratitude" element={<ExpressGratitude />} />
          </Route>
          <Route path="/edit-profile" element={<PrivateRoute />}>
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>
          <Route path="/edit/appreciation/:id" element={<PrivateRoute />}>
            <Route path="/edit/appreciation/:id" element={<EditGratitude />} />
          </Route>
          <Route path="/edit/hero/:id" element={<PrivateRoute />}>
            <Route path="/edit/hero/:id" element={<EditHero />} />
          </Route>
          <Route path="/list/mygratitudes" element={<PrivateRoute />}>
            <Route path="/list/mygratitudes" element={<MyGratitudesList />} />
          </Route>
          <Route path="/list/myheroes" element={<PrivateRoute />}>
            <Route path="/list/myheroes" element={<MyHeroesList />} />
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
