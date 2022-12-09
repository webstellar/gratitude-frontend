import * as React from "react";
import { TextField, Button, Grid, Container } from "@mui/material/";
import { GrTypography, GrBox } from "./ChangePassword.styles";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPassword } from "../../redux/auth/authPasswordSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const { success, error } = useSelector((state) => state.forgotPassword);

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  React.useEffect(() => {
    error && toast.error(error);
    success && toast.success("Password updated successfully");
  }, [error, success]);

  const handleClear = () => {
    setPassword("");
    setConfirmPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("passwords do not match");
    }
    if (password && confirmPassword) {
      const formData = new FormData();
      formData.set("password", password);
      formData.set("confirmPassword", confirmPassword);
      console.log(getToken());
      dispatch(resetPassword(getToken(), formData));
      handleClear();
    }
  };

  return (
    <Container maxWidth="xl">
      <GrBox>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={4}>
            <GrTypography component="h2" variant="h5" gutterBottom>
              Change your Password
            </GrTypography>
            <form onSubmit={onSubmit}>
              <Grid
                item
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="stretch"
                rowSpacing={4}
              >
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
                    onChange={(e) => setPassword(e.target.value)}
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
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                    fullWidth
                  >
                    <GrTypography variant="h5" component="p" color="grey.900">
                      RESET PASSWORD
                    </GrTypography>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </GrBox>
    </Container>
  );
};

export default ChangePassword;
