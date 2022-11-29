import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import HeroForm from "../components/HeroForm/HeroForm";
import Seo from "../components/Seo/Seo";

import { setLogout } from "../redux/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateHero = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
    toast.info("Logged out");
  };

  return (
    <>
      <DashboardLayout user={user} handleLogout={handleLogout}>
        <HeroForm />
      </DashboardLayout>
    </>
  );
};

export default CreateHero;
