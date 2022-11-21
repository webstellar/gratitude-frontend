/* eslint-disable react/no-unescaped-entities */
import {
  GrPaper,
  GrHeroImage,
  GrTypography,
  GrBox,
  GrItem,
} from "./HomeHero.styles";
import HeroImage from "./../../images/hero_image.webp";
import { Link } from "react-router-dom";
import { Typography, Grid, Box, Container, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const PageHero = () => {
  return (
    <>
      <GrPaper sx={{ backgroundImage: `url(${HeroImage})` }}>
        {
          <GrHeroImage
            style={{ display: "none" }}
            src={HeroImage}
            alt="gratitude"
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

          <Grid container>
            <Grid item md={6}>
              <GrBox>
                <Typography
                  component="h6"
                  variant="h6"
                  color="inherit"
                  gutterBottom
                >
                  Mother's love
                </Typography>

                <GrTypography
                  component="p"
                  variant="h2"
                  color="inherit"
                  gutterBottom
                >
                  Say something to the ones who changed your life immensely.
                </GrTypography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0}
                >
                  <GrItem elevation={0}>
                    <MenuIcon sx={{ color: "#fff" }} />
                  </GrItem>
                  <GrItem elevation={0}>
                    <Link
                      to="/"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      <Typography variant="h6" component="h6">
                        READ
                      </Typography>
                    </Link>
                  </GrItem>
                </Stack>
              </GrBox>
            </Grid>
          </Grid>
        </Container>
      </GrPaper>
    </>
  );
};

export default PageHero;
