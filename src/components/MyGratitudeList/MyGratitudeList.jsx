import * as React from "react";
import MyGratitudeCard from "../MyGratitudeCard/MyGratitudeCard";
import { useDispatch, useSelector } from "react-redux";
import { GrBox, GrTypography } from "./MyGratitudeList.styles";
import { Box, Container, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { getMyGratitudes } from "../../redux/gratitudes/myGratitudeSlice";
import { deleteMyGratitude } from "../../redux/gratitudes/deleteMyGratitudeSlice";

const MyHeroList = () => {
  const dispatch = useDispatch();
  const { myappreciations } = useSelector((state) => ({
    ...state.mygratitudes,
  }));

  React.useEffect(() => {
    dispatch(getMyGratitudes());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteMyGratitude({ id, toast }));

    setTimeout(() => {
      dispatch(getMyGratitudes());
    }, 10000);
  };

  return (
    <Container maxWidth="xl">
      <GrBox>
        <Box sx={{ my: 4 }}>
          <GrTypography variant="h5" component="p" color="grey.900">
            YOUR EXPRESSED GRATITUDES
          </GrTypography>
        </Box>
        <Grid item container md={12} spacing={4}>
          {myappreciations &&
            myappreciations
              .map((myappreciation) => (
                <MyGratitudeCard
                  key={myappreciation._id}
                  gratitude={myappreciation}
                  handleDelete={handleDelete}
                />
              ))
              .reverse()}
        </Grid>
      </GrBox>
    </Container>
  );
};

export default MyHeroList;
