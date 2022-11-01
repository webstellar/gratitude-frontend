import {
    Container,
    Grid,
    Divider,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { GrImg, GrBox } from "./Footer.styles"
import { Link } from "react-router-dom"
import BrandLogo from "../../images/white-gratitude.svg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const navItem1 = [
    {
        "id": 1,
        "name": "FAQs",
        "link": "/faqs"
    },
    {
        "id": 2,
        "name": "help center",
        "link": "/help-center"
    },
    {
        "id": 3,
        "name": "donate",
        "link": "/donate"
    },
    {
        "id": 4,
        "name": "contact",
        "link": "/contact-us"
    },

]
const navItem2 = [
    {
        "id": 1,
        "name": "discover",
        "link": "/discover"
    },
    {
        "id": 2,
        "name": "our story",
        "link": "/our-story"
    },
    {
        "id": 3,
        "name": "blog",
        "link": "/blog"
    },

]

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <footer>
            <GrBox sx={{ flexGrow: 1 }} >
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            xs={12} sm={12} md={8}
                            columnSpacing={2}
                            sx={{ mt: 2 }}
                        >
                            <Grid item md={3}>
                                <GrImg src={BrandLogo} alt="brand logo" />
                            </Grid>
                            <Grid item md={5}>
                                <Typography
                                    variant="caption"
                                    component="p"
                                    sx={{ fontWeight: "light" }}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                            </Grid>
                        </Grid>


                        <Grid
                            xs={12} sm={12} md={4} spacing={2}
                            container
                            direction="row"
                            justifyContent={isMobile ? "flex-start" : "flex-end"}
                            alignItems="center"
                            sx={{ mt: 2 }}
                        >
                            <Grid item>
                                <YouTubeIcon />
                            </Grid>
                            <Grid item>
                                <LinkedInIcon />
                            </Grid>
                            <Grid item>
                                <TwitterIcon />
                            </Grid>
                            <Grid item>
                                <InstagramIcon />
                            </Grid>
                            <Grid item>
                                <FacebookIcon />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Divider sx={{ bgcolor: 'background.paper', mt: 3, mb: 3 }} />

                    <Grid container>
                        <Grid
                            container
                            direction={isMobile ? "column" : "row"}
                            justifyContent="flex-start"
                            alignItems={isMobile ? "flex-start" : "center"}
                            xs={6} sm={6} md={6}
                            columnSpacing={2}
                        >
                            {navItem1.map((menu) => (
                                <Grid item key={menu.id}>
                                    <Link to={menu.link} style={{ textDecoration: "none", color: "#fff" }}>
                                        <Typography>
                                            {menu.name}
                                        </Typography>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid
                            container
                            direction={isMobile ? "column" : "row"}
                            justifyContent={isMobile ? "flex-start" : "flex-end"}
                            alignItems={isMobile ? "flex-start" : "center"}
                            xs={6} sm={6} md={6}
                            columnSpacing={2}
                        >
                            {navItem2.map((menu) => (
                                <Grid item key={menu.id}>
                                    <Link to={menu.link} style={{ textDecoration: "none", color: "#fff" }}>
                                        <Typography>
                                            {menu.name}
                                        </Typography>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid
                            container
                            direction="row"
                            justifyContent={isMobile ? "flex-start" : "flex-end"}
                            alignItems={isMobile ? "flex-start" : "center"}
                            xs={12} sm={12} md={12}
                            sx={{ mt: 3, mb: 3 }}
                        >
                            <Grid item>
                                <Typography variant="caption" component="p">
                                    Copyright {year} -Gratitude
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

            </GrBox>
        </footer >
    )
}

export default Footer