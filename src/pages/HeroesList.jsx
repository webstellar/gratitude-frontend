import HeroHero from "../components/HeroHero/HeroHero"
import HeroList from "../components/HeroList/HeroList"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"

const HeroesList = () => {
    return (
        <Layout>
            <HeroHero />
            <HeroList />
        </Layout>
    )
}
export default HeroesList