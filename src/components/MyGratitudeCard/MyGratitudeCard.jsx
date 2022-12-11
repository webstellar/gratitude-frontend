import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  IconButton,
  CardMedia,
} from "@mui/material";
import {
  GrHeroTypography,
  GrGiverTypography,
  GrLink,
} from "./MyGratitudeCard.styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const MyGratitudeCard = ({ gratitude, handleDelete }) => {
  return (
    <>
      <Grid item xs={12} md={3}>
        <CardActionArea>
          <Card sx={{ display: "block" }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: 200,
                filter: "grayscale(100%)",
                "&:hover": {
                  filter: "grayscale(0%)",
                },
              }}
              image={
                gratitude?.image?.url || "https://source.unsplash.com/random"
              }
              alt={gratitude?.summary}
            />
            <CardContent sx={{ flex: 1 }}>
              <GrGiverTypography variant="caption" color="grey.500">
                written by {gratitude?.user?.name || "gratitude"}
              </GrGiverTypography>

              <GrLink to={`/hero/${gratitude?._id}`}>
                <GrHeroTypography variant="h6" component="h6" gutterBottom>
                  for {gratitude?.hero?.name}
                </GrHeroTypography>
              </GrLink>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="edit"
                component={Link}
                to={`/edit/appreciation/${gratitude?._id}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => {
                  handleDelete(gratitude?._id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
};

MyGratitudeCard.propTypes = {
  gratitude: PropTypes.object,
  handleDelete: PropTypes.any,
};

export default MyGratitudeCard;
