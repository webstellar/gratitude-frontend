import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { GrBox, GrTypography, GrCTypography, GrLink } from "./HomeRecentTitle.styles"

import HomeRecentStories from "../HomeRecentStories/HomeRecentStories"
import gratitudeImage from "../../images/dummy_post.webp"


const HomeRecentTitle = ({ post }) => {
    const gratitudes = [
        {
            "id": 1,
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
            "image": gratitudeImage,
            "date": "Nov 12",
            "tag": [
                "Consistent helper",
                "Giver"
            ]
        },
        {
            "id": 2,
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
            "image": gratitudeImage,
            "date": "Nov 12",
            "tag": [
                "Consistent helper",
                "Giver"
            ]
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
            "image": gratitudeImage,
            "date": "Nov 12",
            "tag": [
                "Consistent helper",
                "Giver"
            ]
        },
        {
            "id": 4,
            "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
            "image": gratitudeImage,
            "date": "Nov 12",
            "tag": [
                "Consistent helper",
                "Giver"
            ]
        }
    ]


    return (
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
                <Grid container
                    spacing={4}>
                    {
                        gratitudes.map((gratitude) => (
                            <HomeRecentStories key={gratitude.id} gratitude={gratitude} />
                        ))
                    }
                </Grid>

            </Container>
        </GrBox>
    )
}

export default HomeRecentTitle