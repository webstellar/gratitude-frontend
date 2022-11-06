import { useState } from "react";
import { Container, Grid, IconButton } from "@mui/material"
import { GrBox, GrTypography, GrCTypography, GrLink, GrDiv } from "./HomeRecentTitle.styles"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import GratitudeCard from "../GratitudeCard/GratitudeCard"
import GratitudeCardBig from "../GratitudeCardBig/GratitudeCardBig"
import { gratitudes } from "../../data/GratitudeDummy"

const HomeRecentTitle = () => {


    const [current, setCurrent] = useState(0)
    const length = gratitudes.length


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <>
            <GrBox sx={{ flexGrow: 1 }}>
                <Container maxWidth="xl">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" >
                        <Grid item md={8}>
                            <GrTypography omponent="p" variant="h2" color="inherit" gutterBottom>
                                Your recent stories, Peter
                            </GrTypography>
                        </Grid>
                        <Grid
                            item
                            md={4}>
                            <GrLink>
                                <GrCTypography component="p" variant="p" color="inherit" gutterBottom>My collection
                                </GrCTypography>
                            </GrLink>
                        </Grid>
                    </Grid>
                    <GrDiv>
                        <IconButton size="large" color="inherit" onClick={prevSlide}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Grid container
                            spacing={4}>

                            {
                                gratitudes.slice(1, 4).map((gratitude) => (
                                    <GratitudeCard key={gratitude.id} gratitude={gratitude} />
                                ))
                            }

                        </Grid>
                        <IconButton size="large" color="inherit" onClick={nextSlide}>
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </GrDiv>

                </Container>
            </GrBox >
            <GrBox sx={{ flexGrow: 1 }}>
                <Container maxWidth="xl">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" >
                        <Grid item md={8}>
                            <GrTypography omponent="p" variant="h2" color="inherit" gutterBottom>
                                Indulge in our top picks
                            </GrTypography>
                        </Grid>
                    </Grid>
                    <GrDiv>
                        <Grid container
                            spacing={4}>

                            {
                                gratitudes.map((gratitude) => (
                                    <GratitudeCardBig key={gratitude.id} gratitude={gratitude} />
                                ))
                            }

                        </Grid>
                    </GrDiv>

                </Container>
            </GrBox >
            <GrBox sx={{ flexGrow: 1 }}>
                <Container maxWidth="xl">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" >
                        <Grid item md={8}>
                            <GrTypography omponent="p" variant="h2" color="inherit" gutterBottom>
                                Indulge in our latest stories
                            </GrTypography>
                        </Grid>
                    </Grid>
                    <GrDiv>
                        <Grid container
                            spacing={4}>

                            {
                                gratitudes.slice(0, 4).map((gratitude) => (
                                    <GratitudeCardBig key={gratitude.id} gratitude={gratitude} />
                                ))
                            }

                        </Grid>
                    </GrDiv>

                </Container>
            </GrBox>
        </>
    )
}

export default HomeRecentTitle