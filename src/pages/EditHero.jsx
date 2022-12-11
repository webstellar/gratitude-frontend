import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import HeroFormEdit from "../components/HeroFormEdit/HeroFormEdit";
//import Seo from "../components/Seo/Seo";

const EditHero = () => {
  return (
    <DashboardLayout>
      <HeroFormEdit />
    </DashboardLayout>
  );
};

export default EditHero;
