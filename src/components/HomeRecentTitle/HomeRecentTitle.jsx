import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGratitudes } from "../../redux/gratitudes/gratitudesSlice";
import { getMyGratitudes } from "../../redux/gratitudes/myGratitudeSlice";

import { Container, Grid } from "@mui/material";
import {
  GrBox,
  GrTypography,
  GrCTypography,
  GrLink,
  GrDiv,
} from "./HomeRecentTitle.styles";

import GratitudeCard from "../GratitudeCard/GratitudeCard";
import GratitudeCardBig from "../GratitudeCardBig/GratitudeCardBig";

const HomeRecentTitle = () => {
  const dispatch = useDispatch();

  const { appreciations } = useSelector((state) => ({ ...state.gratitudes }));
  const { myappreciations } = useSelector((state) => ({
    ...state.mygratitudes,
  }));

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getGratitudes());
    dispatch(getMyGratitudes());
  }, [dispatch]);

  return (
    <>
      <GrBox sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          {user ? (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={8}>
                <GrTypography
                  omponent="p"
                  variant="h2"
                  color="inherit"
                  gutterBottom
                >
                  Your recent stories, {user?.name}
                </GrTypography>
              </Grid>
              <Grid item md={4}>
                <GrLink to="/my-profile">
                  <GrCTypography
                    component="p"
                    variant="p"
                    color="inherit"
                    gutterBottom
                  >
                    My collection
                  </GrCTypography>
                </GrLink>
              </Grid>
            </Grid>
          ) : null}
          <GrDiv>
            <Grid container spacing={4}>
              {myappreciations &&
                myappreciations
                  .map((appreciation) => (
                    <GratitudeCard
                      key={appreciation._id}
                      gratitude={appreciation}
                    />
                  ))
                  .reverse()
                  .slice(1, 4)}
            </Grid>
          </GrDiv>
        </Container>
      </GrBox>
      <GrBox sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={8}>
              <GrTypography
                omponent="p"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                Indulge in our top picks
              </GrTypography>
            </Grid>
          </Grid>
          <GrDiv>
            <Grid container spacing={4}>
              {appreciations &&
                appreciations.map((appreciation) => (
                  <GratitudeCardBig
                    key={appreciation._id}
                    gratitude={appreciation}
                  />
                ))}
            </Grid>
          </GrDiv>
        </Container>
      </GrBox>
      <GrBox sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item md={8}>
              <GrTypography
                omponent="p"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                Indulge in our latest stories
              </GrTypography>
            </Grid>
          </Grid>
          <GrDiv>
            <Grid container spacing={4}>
              {appreciations &&
                appreciations
                  .slice(0, 4)
                  .map((appreciation) => (
                    <GratitudeCardBig
                      key={appreciation._id}
                      gratitude={appreciation}
                    />
                  ))}
            </Grid>
          </GrDiv>
        </Container>
      </GrBox>
    </>
  );
};

export default HomeRecentTitle;
