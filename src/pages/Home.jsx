import { useEffect } from "react"
import { useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import { fetchGratitudes } from "../redux/gratitudes/gratitudesSlice";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGratitudes())
  }, [dispatch])
  return (
    <>
      <Layout>
        <div>Home</div>
      </Layout>
    </>
  )
}
export default Home