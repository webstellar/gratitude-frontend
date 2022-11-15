import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import HomeHero from "../components/HomeHero/HomeHero";
import HomeRecentTitle from "../components/HomeRecentTitle/HomeRecentTitle";

const Home = () => {

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