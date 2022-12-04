/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  CssBaseline,
  CircularProgress,
} from "@mui/material/";
import { GrTypography, GrContainer } from "./Login.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/authSlice";
import { googleSignIn } from "../../redux/auth/authGoogleSlice";
import jwt_decode from "jwt-decode";
import { LinkedInApi } from "../../config/linkedInconfig";
import { useScript } from "../../hooks/useScript";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ formData, navigate, toast }));
    }
  };

  //Google Signin
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    console.log(payload);
    let userData = {
      name: payload.name,
      email: payload.email,
      profilePicture: payload.picture,
      googleId: payload.sub,
    };
    dispatch(googleSignIn({ userData, navigate, toast }));
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
        shape: "Rectangular",
        text: "signin_with",
        context: "signin",
        width: "100%",
        logo_alignment: "center",
      }
    );

    //window.google.accounts.id.prompt();
  });

  //LinkedIn
  const showLinkedinPopup = () => {
    let { clientId, redirectUrl, oauthUrl, scope, state } = LinkedInApi;
    oauthUrl = `${oauthUrl}&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`;
    window.open(oauthUrl, "_self");
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
                PLEASE LOGIN
              </GrTypography>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="ENTER YOUR EMAIL"
                style={{ width: "100%" }}
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                label="ENTER YOUR PASSWORD"
                style={{ width: "100%" }}
                name="password"
                type="password"
                value={password}
                onChange={onChange}
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
                {loading && <CircularProgress size={20} />}
                <GrTypography variant="h5" component="p" color="grey.900">
                  CONTINUE
                </GrTypography>
              </Button>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                variant="p"
                component="p"
                size="large"
                color="grey.900"
              >
                Forgot password? <Link to="/forgot-password">click here.</Link>
              </Typography>
            </Grid>

            <Grid item xs={12} md={12}>
              <div id="signInDiv" />
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
                  fontSize: "1rem",
                }}
                onClick={showLinkedinPopup}
                startIcon={<LinkedInIcon />}
                fullWidth
              >
                <GrTypography variant="p" component="p" color="grey.900">
                  LOGIN WITH LINKEDIN
                </GrTypography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </GrContainer>
    </>
  );
};

Login.propTypes = {
  handleClose: PropTypes.any,
};

export default Login;
