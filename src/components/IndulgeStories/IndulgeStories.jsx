import { GrBox, GrTypography, GrDiv } from "./IndulgeStories.styles";
import { Grid, Container } from "@mui/material"

import GratitudeCardBig from "../GratitudeCardBig/GratitudeCardBig"
import { gratitudes } from "../../data/GratitudeDummy"

const IndulgeStories = () => {
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
                                Indulge in more stories
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
            </GrBox >
        </>
    )
}


export default IndulgeStories;