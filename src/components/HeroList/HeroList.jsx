import { useState } from "react";
import { GrParaBox } from "./HeroList.styles";
import { Grid, Box, Container, Typography, Tab, Tabs } from "@mui/material";
import HeroCard from "../HeroCard/HeroCard";
import { gratitudes } from "../../data/GratitudeDummy"



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

const HeroList = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(gratitudes)

    return (
        <div>
            <Container maxWidth="xl">
                <GrParaBox>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Grid item xs={12} md={9}>
                            <Box sx={{ borderBottom: 1, borderColor: 'rgba(255,255,255,0)' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="secondary" textColor="secondary">
                                    <Tab label="ALL STORIES" {...a11yProps(0)} />
                                    <Tab label="CONTRIBUTORS" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Grid container md={12} spacing={4}>
                                    {
                                        gratitudes.map((gratitude) => (
                                            <HeroCard gratitude={gratitude} />
                                        ))
                                    }
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            Box
                        </Grid>
                    </Grid>

                </GrParaBox>
            </Container>
        </div>
    )
}

export default HeroList;