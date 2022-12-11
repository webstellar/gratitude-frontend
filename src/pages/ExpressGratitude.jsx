import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import GratitudeForm from "../components/GratitudeForm/GratitudeForm";
import Seo from "../components/Seo/Seo";

const ExpressGratitude = () => {
  return (
    <DashboardLayout>
      <GratitudeForm />
    </DashboardLayout>
  );
};

export default ExpressGratitude;
