import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material"
import { GrStoriesTypography, GrHeroTypography, GrGiverTypography, GrLink } from "./HomeTopPick.styles"
import MenuIcon from '@mui/icons-material/Menu';

const HomeTopPick = ({ gratitude }) => {
    return (
        <>
            <Grid item xs={12} md={3}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'block' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: "100%" }}
                            image={gratitude.image}
                            alt={gratitude.title}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="subtitle1">
                                {gratitude?.tag[0]}
                            </Typography>

                            <GrStoriesTypography variant="h6" component="h6" gutterBottom>
                                {gratitude.title}
                            </GrStoriesTypography>

                            <GrGiverTypography variant="caption" color="grey.500">
                                written by {gratitude.giver}
                            </GrGiverTypography>

                            <GrLink>
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
                                    READ
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    )
}

export default HomeTopPick