import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Button,
  Grid,
  CssBaseline,
  IconButton,
  CircularProgress,
} from "@mui/material/";
import { GrTypography } from "./Register.styles";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../redux/auth/authSlice";
import { googleSignUp } from "../../redux/auth/authService";
import jwt_decode from "jwt-decode";
import { LinkedInApi } from "../../config/linkedInconfig";
import { useScript } from "../../hooks/useScript";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  "& .MuiTextField-root": {
    m: 1,
    width: "25ch",
  },
};

const Register = ({ handleRClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    error && toast.error(error);

    dispatch(reset());
  }, [error, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    }
    if (name && email && password && confirmPassword) {
      dispatch(register({ formData, navigate, toast }));
    }
  };

  //Google SignRegister
  const onGoogleSignUp = (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    let userData = {
      name: payload.name,
      email: payload.email,
      profilePicture: payload.picture,
      googleId: payload.sub,
    };
    console.log(userData);
    dispatch(googleSignUp({ userData, navigate, toast }));
  };

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      // eslint-disable-next-line no-undef
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignUp,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("signUpDiv"),
      {
        theme: "outline",
        size: "large",
        shape: "Rectangular",
        text: "signup_with",
        context: "signup",
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
      <Box
        component="form"
        sx={style}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
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
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            <IconButton
              size="large"
              disableRipple={true}
              color="inherit"
              onClick={handleRClose}
              id="register"
            >
              <ClearIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>
          </Grid>

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
              PLEASE CREATE AN ACCOUNT
            </GrTypography>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              required
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              label="FULL NAME"
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              required
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              label="EMAIL"
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              required
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              label="ENTER YOUR PASSWORD"
              style={{ width: "100%" }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              required
              id="confirmpassword"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={onChange}
              label="CONFIRM YOUR PASSWORD"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              type="submit"
              sx={{
                borderRadius: 0,
                mt: 1,
                mb: 2,
              }}
              fullWidth
            >
              {loading && <CircularProgress />}
              <GrTypography variant="h5" component="p" color="grey.900">
                CONTINUE
              </GrTypography>
            </Button>
          </Grid>

          <Grid item xs={12} md={12}>
            <div id="signUpDiv" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Register.propTypes = {
  handleRClose: PropTypes.func,
};

export default Register;
