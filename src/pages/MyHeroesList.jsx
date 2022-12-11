import * as React from "react";
import DashboardLayout from "../components/DashboardLayout/DashboardLayout";
import UserProfile from "../components/UserProfile/UserProfile";
//import Seo from "../components/Seo/Seo";
import MyHeroList from "../components/MyHeroList/MyHeroList";

const MyHeroesList = () => {
  return (
    <DashboardLayout>
      <MyHeroList />
    </DashboardLayout>
  );
};
export default MyHeroesList;
