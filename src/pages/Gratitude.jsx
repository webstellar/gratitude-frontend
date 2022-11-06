import Layout from "../components/Layout/Layout"
import GratitudeHero from "../components/GratitudeHero/GratitudeHero"
import { gratitudes } from "../data/GratitudeDummy"
import GratitudeSubSection from "../components/GratitudeSubSection/GratitudeSubSection"
import GratitudeMainSection from "../components/GratitudeMainSection/GratitudeMainSection"
import GratitudeCommentSection from "../components/GratitudeCommentSection/GratitudeCommentSection"
import IndulgeStories from "../components/IndulgeStories/IndulgeStories"


const Gratitude = () => {

    return (
        <>
            <Layout>
                <GratitudeHero gratitude={gratitudes[0]} />
                <GratitudeSubSection gratitude={gratitudes[0]} />
                <GratitudeMainSection gratitude={gratitudes[0]} />
                <GratitudeCommentSection />
                <IndulgeStories />
            </Layout>
        </>

    )
}
export default Gratitude