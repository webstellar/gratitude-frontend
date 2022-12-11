import { useState } from "react";
import PropTypes from "prop-types";
import {
  GrPaper,
  GrHeroImage,
  GrTypography,
  GrBox,
  GrParaBox,
} from "./WriterHero.styles";
import HeroImage from "./../../images/writer-author.webp";
import { Grid, Box, Container, Typography, Tab, Tabs } from "@mui/material";
import GratitudeCardBig from "../GratitudeCardBig/GratitudeCardBig";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const WriterHero = ({ hero, appreciations }) => {
  const [value, setValue] = useState(0);

  let id = hero?._id;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GrPaper
        elevation={0}
        sx={{
          backgroundImage: `url(${hero?.profilePicture?.url || HeroImage})`,
        }}
      >
        {
          <GrHeroImage
            style={{ display: "none" }}
            src={hero?.profilePicture?.url || HeroImage}
            alt="hero"
          />
        }
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
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
                <GrTypography
                  component="h1"
                  variant="h2"
                  color="inherit"
                  gutterBottom
                >
                  {hero?.name}
                </GrTypography>
              </GrBox>
            </Grid>
          </Grid>
        </Container>
      </GrPaper>
      <Container maxWidth="xl">
        <GrParaBox>
          <div
            style={{ fontSize: "20px", fontWeight: "300" }}
            dangerouslySetInnerHTML={{ __html: hero?.description }}
          />
        </GrParaBox>
      </Container>
      <Container maxWidth="xl">
        <GrParaBox>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={8}>
              <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,0)" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  indicatorColor="secondary"
                  textColor="secondary"
                >
                  <Tab label="ALL STORIES" {...a11yProps(0)} />
                  <Tab label="CONTRIBUTORS" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Grid container spacing={4}>
                  {appreciations &&
                    appreciations
                      .filter((appr) => appr.hero._id === id)
                      .map((appreciation) => (
                        <GratitudeCardBig
                          key={appreciation._id}
                          gratitude={appreciation}
                        />
                      ))}
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                {hero?.user?.name}
              </TabPanel>
            </Grid>
            <Grid item xs={12} md={4}>
              Box
            </Grid>
          </Grid>
        </GrParaBox>
      </Container>
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  index: PropTypes.any,
  other: PropTypes.any,
};

WriterHero.propTypes = {
  hero: PropTypes.object,
  appreciations: PropTypes.array,
};

export default WriterHero;
