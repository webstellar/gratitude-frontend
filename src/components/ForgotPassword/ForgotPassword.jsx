/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import { Box, TextField, Button, Grid, CssBaseline } from "@mui/material/";
import { GrTypography, GrContainer } from "./ForgotPassword.styles";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../redux/auth/authPasswordSlice";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const { message, error } = useSelector((state) => state.forgotPassword);

  useEffect(() => {
    error && toast.error(error);
    message && toast.success(message);
  }, [error, message]);

  const handleClear = () => {
    setEmail("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email) {
      const formData = new FormData();
      formData.set("email", email);

      console.log(formData);
      dispatch(forgotPassword({ formData, navigate, toast }));
      handleClear();
    }
  };

  return (
    <>
      <CssBaseline />
      <GrContainer maxWidth="xs">
        <Box component="form" noValidate autoComplete="off" onSubmit={onSubmit}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="stretch"
            rowSpacing={1}
          >
            <Grid
              item
              xs={12}
              md={12}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <GrTypography
                variant="h6"
                component="p"
                color="grey.900"
                gutterBottom
              >
                PLEASE PROVIDE YOUR EMAIL
              </GrTypography>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="ENTER YOUR EMAIL"
                style={{ width: "100%" }}
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  borderRadius: 0,
                  mt: 1,
                  mb: 2,
                }}
                type="submit"
                fullWidth
              >
                <GrTypography variant="h5" component="p" color="grey.900">
                  CHANGE PASSWORD
                </GrTypography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </GrContainer>
    </>
  );
};

export default ForgotPassword;
