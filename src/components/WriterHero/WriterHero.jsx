import { useState } from "react";
import { GrPaper, GrHeroImage, GrTypography, GrBox, GrParaBox } from "./WriterHero.styles";
import HeroImage from "./../../images/writer-author.webp"
import { Grid, Box, Container, Typography, Tab, Tabs } from "@mui/material";

import PageHero from "../HomeHero/HomeHero";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const WriterHero = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <GrPaper elevation={0} sx={{ backgroundImage: `url(${HeroImage})`, }}>
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

                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-end"
                        alignItems="baseline"
                    >
                        <Grid item md={6}>
                            <GrBox>
                                <GrTypography component="h1" variant="h2" color="inherit" gutterBottom>Armando Guitterez
                                </GrTypography>
                            </GrBox>
                        </Grid>
                    </Grid >
                </Container >
            </GrPaper >
            <Container maxWidth="xl">
                <GrParaBox>
                    <Typography component="p" variant="h6" gutterBottom sx={{ fontWeight: "300", lineHeight: "normal" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque massa placerat. Eget arcu dictum varius duis at consectetur lorem donec massa. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Erat imperdiet sed euismod nisi porta lorem mollis aliquam.
                    </Typography>
                </GrParaBox>
            </Container>
            <Container maxWidth="xl">
                <GrParaBox>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Grid item xs={12} md={8}>
                            <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0)' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary">
                                    <Tab label="ALL STORIES" {...a11yProps(0)} />
                                    <Tab label="CONTRIBUTORS" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <PageHero />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            Box
                        </Grid>
                    </Grid>

                </GrParaBox>
            </Container>
        </div>
    )
}

export default WriterHero;