import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import GratitudeForm from "../components/GratitudeForm/GratitudeForm";
import Seo from "../components/Seo/Seo";

import { setLogout } from "../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GiveGratitude = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.info("Logged out");
  };

  return (
    <DashboardLayout user={user} handleLogout={handleLogout}>
      <GratitudeForm />
    </DashboardLayout>
  );
};

export default GiveGratitude;
