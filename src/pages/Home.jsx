import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { fetchGratitudes } from "../redux/gratitudes/gratitudesSlice";

import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HomeHero from "../components/HomeHero/HomeHero";
import HomeRecentTitle from "../components/HomeRecentTitle/HomeRecentTitle";



const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGratitudes())
  }, [dispatch])
  return (
    <>
      <Layout>
        <HomeHero />
        <HomeRecentTitle />
      </Layout>
    </>
  )
}
export default Home