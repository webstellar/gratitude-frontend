import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GrHeroTypography, GrGiverTypography, GrLink } from "./HeroCard.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const HeroCard = ({ hero }) => {
  return (
    <>
      <Grid item xs={12} md={3}>
        <CardActionArea>
          <Card sx={{ display: "block" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 200 }}
              image={hero?.profilePicture?.url}
              alt={hero?.hero}
            />
            <CardContent sx={{ flex: 1 }}>
              <GrGiverTypography variant="caption" color="grey.500">
                written by {hero?.user?.name || "gratitude"}
              </GrGiverTypography>

              <GrLink to={`/hero/${hero?._id}`}>
                <GrHeroTypography variant="h6" component="h6" gutterBottom>
                  for {hero?.name}
                </GrHeroTypography>
              </GrLink>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <MenuIcon />
                <Link
                  to="/give-gratitude"
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Typography variant="subtitle1" color="grey.900">
                    GIVE
                  </Typography>
                </Link>
              </div>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.object,
};

export default HeroCard;
