import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Stack
} from "@mui/material"
import { GrStoriesTypography, GrItem } from "./GratitudeCard.styles"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const GratitudeCard = ({ gratitude }) => {
    return (
        <>
            <Grid item xs={12} md={4}>
                <CardActionArea component={Link} to={`/appreciation/${gratitude?._id}`}>
                    <Card sx={{ display: 'flex' }}>

                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'block', sm: 'block' } }}
                            image={gratitude.profilePicture?.url}
                            alt={gratitude.summary}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="subtitle1">
                                {gratitude?.tags[0]}
                            </Typography>
                            <GrStoriesTypography variant="h6" component="h6" gutterBottom>
                                {gratitude.summary.substring(0, 40)}...
                            </GrStoriesTypography>

                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={0}
                            >
                                <GrItem elevation={0}>
                                    <MenuIcon sx={{ color: "#000" }} />
                                </GrItem>
                                <GrItem elevation={0}>
                                    <Typography variant="h6" component="h6" sx={{ color: "#000", textDecoration: "none" }}>
                                        READ
                                    </Typography>
                                </GrItem>
                            </Stack>
                        </CardContent>
                    </Card>
                </CardActionArea>
            </Grid>
        </>
    )
}

export default GratitudeCard