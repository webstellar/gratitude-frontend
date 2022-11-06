import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material"
import { GrStoriesTypography, GrHeroTypography, GrGiverTypography, GrLink } from "./HeroCard.styles"
import MenuIcon from '@mui/icons-material/Menu';

const HeroCard = ({ gratitude }) => {
    return (
        <>
            <Grid item xs={12} md={4}>
                <CardActionArea component="a">
                    <Card sx={{ display: 'block' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: "100%", height: 200 }}
                            image={gratitude.image}
                            alt={gratitude.title}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <GrGiverTypography variant="caption" color="grey.500">
                                written by {gratitude.giver}
                            </GrGiverTypography>

                            <GrLink to={gratitude.link}>
                                <GrHeroTypography variant="h6" component="h6" gutterBottom>
                                    for {gratitude.hero}
                                </GrHeroTypography>
                            </GrLink>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <MenuIcon />
                                <Typography variant="subtitle1" color="grey.900">
                                    GIVE
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    )
}

export default HeroCard