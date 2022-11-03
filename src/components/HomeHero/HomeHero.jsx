import { GrPaper, GrHeroImage, GrTypography, GrBox } from "./HomeHero.styles";
import HeroImage from "./../../images/hero_image.webp"
import { Link } from "react-router-dom";
import { Typography, Grid, Box, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const PageHero = () => {
    return (
        <>
            <GrPaper sx={{ backgroundImage: `url(${HeroImage})`, }}>
                {<GrHeroImage style={{ display: 'none' }} src={HeroImage} alt="gratitude" />}
                <Container maxWidth="xl">

                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            backgroundColor: 'rgba(0,0,0,.3)',
                        }}
                    />

                    <Grid container>
                        <Grid item md={6}>
                            <GrBox>
                                <Typography component="h6" variant="h6" color="inherit" gutterBottom>
                                    Mother's love
                                </Typography>

                                <GrTypography component="p" variant="h2" color="inherit" gutterBottom>
                                    Say something to the ones
                                    who changed your life
                                    immensely.
                                </GrTypography>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <MenuIcon />
                                    <span><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                                        <Typography variant="h6" component="h6">
                                            READ
                                        </Typography>
                                    </Link></span>
                                </div>

                            </GrBox>
                        </Grid>
                    </Grid>
                </Container>
            </GrPaper>
        </>
    )
}

export default PageHero;