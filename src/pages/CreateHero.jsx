import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import HeroForm from "../components/HeroForm/HeroForm";
import Seo from "../components/Seo/Seo";

const CreateHero = () => {
  return (
    <>
      <DashboardLayout>
        <HeroForm />
      </DashboardLayout>
    </>
  );
};

export default CreateHero;
