import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import GratitudeFormEdit from "../components/GratitudeFormEdit/GratitudeFormEdit";
import Seo from "../components/Seo/Seo";

const EditGratitude = () => {
  return (
    <DashboardLayout>
      <GratitudeFormEdit />
    </DashboardLayout>
  );
};

export default EditGratitude;
