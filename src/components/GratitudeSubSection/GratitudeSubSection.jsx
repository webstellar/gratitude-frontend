import PropTypes from "prop-types";
import { Typography, Grid, Divider, Container } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

import { GrBox } from "./GratitudeSubSection.styles";

const GratitudeSubSection = ({ gratitude }) => {
  return (
    <section>
      <GrBox>
        <Container maxWidth="xl">
          <Typography component="p" variant="p" gutterBottom>
            {gratitude?.summary}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6} sm={6} md={6}>
              <Typography variant="caption" component="p">
                by <strong>{gratitude?.user?.name}</strong>
              </Typography>
            </Grid>

            <Grid
              item
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              xs={6}
              sm={6}
              md={4}
              spacing={2}
            >
              <Grid item>
                <FacebookIcon />
              </Grid>
              <Grid item>
                <LinkedInIcon />
              </Grid>
              <Grid item>
                <TwitterIcon />
              </Grid>
              <Grid item>
                <MailIcon />
              </Grid>
            </Grid>
          </Grid>

          <Divider sx={{ bgcolor: "background.paper", mt: 3, mb: 3 }} />
        </Container>
      </GrBox>
    </section>
  );
};

GratitudeSubSection.propTypes = {
  gratitude: PropTypes.array,
};

export default GratitudeSubSection;
