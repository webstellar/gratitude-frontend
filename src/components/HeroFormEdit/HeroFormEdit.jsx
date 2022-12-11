import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Grid,
  Container,
  ButtonGroup,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack,
  Avatar,
} from "@mui/material/";
import { GrTypography, GrBox } from "./HeroFormEdit.styles";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";

import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getHero, updateHero } from "../../redux/heroes/heroSlice";

import data from "../../data/countries.json";

const genders = ["Male", "Female", "Binary", "Non-Binary"];
const countries = data;

const HeroFormEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = React.useState({
    name: "",
    description: "",
    gender: "",
    country: "",
    email: "",
    profilePicture: "",
  });

  const { name, description, gender, country, email, profilePicture } =
    formData;

  const { error, hero } = useSelector((state) => ({
    ...state.hero,
  }));

  React.useEffect(() => {
    if (id) {
      dispatch(getHero(id));
    }
  }, [dispatch, id]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name &&
      email &&
      description &&
      gender &&
      country &&
      email &&
      profilePicture
    ) {
      dispatch(updateHero({ formData, id, toast, navigate }));
    }
  };

  React.useEffect(() => {
    error && toast.error(error);
  }, [error]);

  React.useEffect(() => {
    if (hero > 0) {
      setFormData({ ...formData, gender: hero?.gender });
    }
  }, [hero]);

  return (
    <Container maxWidth="xl">
      <GrBox>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ my: 4 }}>
              <GrTypography variant="h5" component="p" color="grey.900">
                EDIT YOUR HERO&apos;S PROFILE
              </GrTypography>
            </Box>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
              <Grid
                item
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="stretch"
                rowSpacing={4}
              >
                <Grid item xs={12} md={12}>
                  <InputLabel>Edit your hero&apos;s name</InputLabel>
                  <TextField
                    name="name"
                    value={hero?.name}
                    type="text"
                    required
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <InputLabel>Edit your hero&apos;s description</InputLabel>
                  <TextField
                    name="description"
                    value={hero?.description}
                    type="text"
                    required
                    multiline
                    rows={4}
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>
                    Select your hero&apos;s gender:{" "}
                    <strong>{hero?.gender}</strong>
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      name="gender"
                      type="text"
                      required
                      value={gender}
                      onChange={onChange}
                    >
                      {genders.map((gender, i) => (
                        <MenuItem key={i} value={gender}>
                          {gender}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>
                    Select your hero&apos;s country:{" "}
                    <strong>{hero?.country}</strong>
                  </InputLabel>
                  <FormControl fullWidth>
                    <Select
                      name="country"
                      type="text"
                      required
                      value={hero?.country}
                      label="Select your hero's country"
                      onChange={onChange}
                    >
                      {countries.map((country, i) => (
                        <MenuItem key={i} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <InputLabel>Edit your herohero&apos;s email</InputLabel>
                  <TextField
                    name="email"
                    value={hero?.email}
                    type="email"
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <Stack direction="row" spacing={2}>
                    <InputLabel>
                      Change your hero&apos;s profile picture
                    </InputLabel>
                    <Avatar
                      alt="Remy Sharp"
                      src={hero?.profilePicture?.url}
                      sx={{ width: 24, height: 24 }}
                    />
                  </Stack>

                  <FileBase
                    type="file"
                    value={hero?.profilePicture}
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, profilePicture: base64 })
                    }
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <ButtonGroup
                    variant="text"
                    aria-label="text button group"
                    fullWidth
                  >
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      type="submit"
                      fullWidth
                    >
                      <GrTypography variant="h5" component="p" color="grey.900">
                        NEXT
                      </GrTypography>
                    </Button>
                    <Button component={Link} to="/express-gratitude">
                      <GrTypography variant="p" component="p" color="grey.900">
                        Skip
                      </GrTypography>
                    </Button>
                  </ButtonGroup>
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

export default HeroFormEdit;
