import { useState, useEffect } from "react"
import Layout from "../components/Layout/Layout"
import Seo from "../components/Seo/Seo"
import GratitudeHero from "../components/GratitudeHero/GratitudeHero"
import GratitudeSubSection from "../components/GratitudeSubSection/GratitudeSubSection"
import GratitudeMainSection from "../components/GratitudeMainSection/GratitudeMainSection"
import GratitudeCommentSection from "../components/GratitudeCommentSection/GratitudeCommentSection"
import IndulgeStories from "../components/IndulgeStories/IndulgeStories"

import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom";
import { getGratitude } from "../redux/gratitudes/gratitudeSlice"
import { toast } from "react-toastify"

const Gratitude = () => {
    const { id } = useParams();
    const dispatch = useDispatch();


    const { loading, error, appreciation } = useSelector((state) => ({ ...state.gratitude }))

    useEffect(() => {
        if (id) {
            dispatch(getGratitude(id))
        }

        error && toast.error(error);

    }, [dispatch, error, id])

    return (
        <>
            <Layout>
                <GratitudeHero gratitude={appreciation} />
                <GratitudeSubSection gratitude={appreciation} />
                <GratitudeMainSection gratitude={appreciation} />
                <GratitudeCommentSection />
            </Layout>
        </>

    )
}
export default Gratitude
