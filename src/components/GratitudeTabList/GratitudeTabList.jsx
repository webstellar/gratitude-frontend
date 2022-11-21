import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGratitudes } from "../../redux/gratitudes/gratitudesSlice";
import { Grid } from "@mui/material";
import GratitudeCardSmall from "../GratitudeCardBig/GratitudeCardSmall";

const GratitudeTabList = () => {
  const dispatch = useDispatch();
  const { appreciations } = useSelector((state) => ({ ...state.gratitudes }));

  useEffect(() => {
    dispatch(getGratitudes());
  }, [dispatch]);

  return (
    <div>
      <Grid container spacing={4}>
        {appreciations &&
          appreciations.map((appreciation) => (
            <GratitudeCardSmall
              key={appreciation?._id}
              gratitude={appreciation}
            />
          ))}
      </Grid>
    </div>
  );
};

export default GratitudeTabList;
