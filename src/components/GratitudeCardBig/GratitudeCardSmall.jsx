import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Stack,
} from "@mui/material";
import {
  GrStoriesTypography,
  GrHeroTypography,
  //GrGiverTypography,
  GrItem,
} from "./GratitudeCardBig.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import defaultImage from "../../images/dummy_post.webp";

const GratitudeCardBig = ({ gratitude }) => {
  return (
    <>
      <Grid item xs={12} md={12}>
        <CardActionArea component={Link} to={`/appreciation/${gratitude?._id}`}>
          <Card sx={{ display: "block" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 200 }}
              image={gratitude?.image?.url || defaultImage}
              alt={gratitude?.summary}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="subtitle1">{gratitude?.tags[0]}</Typography>

              <GrStoriesTypography variant="h6" component="h6" gutterBottom>
                {gratitude?.summary.substring(0, 40)}...
              </GrStoriesTypography>

              {/*<GrGiverTypography variant="caption" color="grey.500">
                written by {gratitude.user && gratitude?.user?.name}
              </GrGiverTypography>*/}

              <GrHeroTypography variant="h6" component="h6" gutterBottom>
                for {gratitude?.hero?.name}
              </GrHeroTypography>

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
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ color: "#000", textDecoration: "none" }}
                  >
                    READ
                  </Typography>
                </GrItem>
              </Stack>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

GratitudeCardBig.propTypes = {
  gratitude: PropTypes.array,
};

export default GratitudeCardBig;
