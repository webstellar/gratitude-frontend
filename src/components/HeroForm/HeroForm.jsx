import * as React from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  ButtonGroup,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material/";
import { GrTypography, GrBox } from "./HeroForm.styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createHero } from "../../redux/heroes/createHeroSlice";

import data from "../../data/countries.json";

const genders = ["Male", "Female", "Binary", "Non-Binary"];
const countries = data;

const HeroForm = () => {
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
  const { error } = useSelector((state) => ({ ...state.newhero }));

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
      dispatch(createHero({ formData, navigate, toast }));
    }
  };

  React.useEffect(() => {
    error && toast.error(error);
  }, [error]);

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
                  <TextField
                    name="name"
                    value={name}
                    type="text"
                    required
                    fullWidth
                    label="Add your hero's name"
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    name="description"
                    value={description}
                    type="text"
                    required
                    multiline
                    rows={4}
                    fullWidth
                    label="Describe your hero"
                    onChange={onChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <FormControl fullWidth>
                    <InputLabel>Select your hero&apos;s gender</InputLabel>
                    <Select
                      name="gender"
                      type="text"
                      required
                      value={gender}
                      label="Select your hero's gender"
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
                  <FormControl fullWidth>
                    <InputLabel>Select your hero&apos;s country</InputLabel>
                    <Select
                      name="country"
                      type="text"
                      required
                      value={country}
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
                  <InputLabel>
                    Do you want to inform your hero of your testimony?
                  </InputLabel>
                  <TextField
                    name="email"
                    value={email}
                    type="email"
                    fullWidth
                    label="Add your hero’s email address"
                    onChange={onChange}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormData({ ...formData, profilePicture: base64 })
                    }
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <ButtonGroup variant="text" aria-label="text button group">
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
                    <Button component={Link} to="give-gratitude">
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

export default HeroForm;
