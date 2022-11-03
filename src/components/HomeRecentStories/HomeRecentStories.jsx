import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material"
import { GrStoriesTypography } from "./HomeRecentStories.styles"
import MenuIcon from '@mui/icons-material/Menu';

const HomeRecentStories = ({ gratitude }) => {
    return (
        <>
            <Grid item xs={12} md={4}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }}>

                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'block', sm: 'block' } }}
                            image={gratitude.image}
                            alt={gratitude.title}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="subtitle1">
                                {gratitude?.tag[0]}
                            </Typography>
                            {/* <Typography variant="subtitle1" color="text.secondary">
                                {gratitude.date}
                            </Typography> */}
                            <GrStoriesTypography variant="h6" component="h6" gutterBottom>
                                {gratitude.title}
                            </GrStoriesTypography>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <MenuIcon />
                                <Typography variant="subtitle1" color="primary">
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

export default HomeRecentStories