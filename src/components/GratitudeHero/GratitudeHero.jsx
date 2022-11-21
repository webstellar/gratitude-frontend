import { GrPaper, GrTypography, GrBox } from "./GratitudeHero.styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, Grid, CardMedia, Card, Container } from "@mui/material";
import defaultImage from "../../images/dummy_post.webp";

const GratitudeHero = ({ gratitude }) => {
  return (
    <>
      <GrPaper elevation={0}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={6} sm={6} md={6}>
              <GrBox>
                <Link
                  to={`/hero/${gratitude?.hero?._id}`}
                  style={{ color: "#f6430a", textDecoration: "none" }}
                >
                  <Typography component="h5" variant="h5" gutterBottom>
                    {gratitude?.hero?.name}
                  </Typography>
                </Link>

                <GrTypography
                  component="h1"
                  variant="h3"
                  color="grey.900"
                  gutterBottom
                >
                  {gratitude?.summary}
                  <span style={{ color: "#f6430a" }}>...</span>
                </GrTypography>

                <Link
                  to="#"
                  style={{ color: "grey.900", textDecoration: "none" }}
                >
                  <Typography component="p">
                    by{" "}
                    <strong>{gratitude.user && gratitude?.user?.name}</strong>
                  </Typography>
                </Link>
              </GrBox>
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%" }}
                  image={gratitude.image?.url || defaultImage}
                  alt={gratitude?.summary}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </GrPaper>
    </>
  );
};

GratitudeHero.propTypes = {
  gratitude: PropTypes.object,
};

export default GratitudeHero;
