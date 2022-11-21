import { useEffect } from "react";
import WriteHero from "../components/WriterHero/WriterHero";
import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo/Seo";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getHero } from "../redux/heroes/heroSlice";
import { getGratitudes } from "../redux/gratitudes/gratitudesSlice";
import { toast } from "react-toastify";

const Hero = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { error, hero } = useSelector((state) => ({
    ...state.hero,
  }));
  const { appreciations } = useSelector((state) => ({ ...state.gratitudes }));

  useEffect(() => {
    if (id) {
      dispatch(getHero(id));
      dispatch(getGratitudes());
    }

    error && toast.error(error);
  }, [dispatch, error, id]);
  return (
    <Layout>
      <WriteHero hero={hero} appreciations={appreciations} />
    </Layout>
  );
};
export default Hero;
