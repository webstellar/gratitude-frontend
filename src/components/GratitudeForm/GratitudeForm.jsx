import * as React from "react";
import {
  TextField,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Container,
  InputLabel,
  Link,
  Autocomplete,
} from "@mui/material/";
import { GrTypography, GrBox } from "./GratitudeForm.styles";
//import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Editor } from "@tinymce/tinymce-react";
import ChipInput from "material-ui-chip-input";

//import FileBase from "react-file-base64";

import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createGratitude } from "../../redux/gratitudes/createGratitudeSlice";
import { getHeroes } from "../../redux/heroes/heroesSlice";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const GratitudeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state?.data._id;

  const [summary, setSummary] = React.useState("");
  const [story, setStory] = React.useState("");
  const [hero, setHero] = React.useState("");
  const [image, setImage] = React.useState("");
  const [tags, setTags] = React.useState(["caring", "magnanimous"]);
  const [video, setVideo] = React.useState("");

  const { error, appreciation, loading, success } = useSelector((state) => ({
    ...state.newgratitude,
  }));

  const { heroes } = useSelector((state) => ({
    ...state.heroes,
  }));

  React.useEffect(() => {
    window.history.replaceState({}, document.title);
    dispatch(getHeroes());
    error && toast.error(error);
  }, [error]);

  React.useEffect(() => {
    if (hero === "" && heroes && heroes.length > 0) {
      setHero(heroes[0]._id);
    }
  }, [heroes]);

  //tinymce editor
  const storyChange = (story, editor) => {
    if (editor.getContent({ format: "text" }).length < 2000) {
      setStory(story);
    }
  };

  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (deleteTag) => {
    setTags(tags.filter((tag) => tag !== deleteTag));
  };

  const handleClear = () => {
    setSummary("");
    setStory("");
    setHero("");
    setImage("");
    setTags([]);
    setVideo("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const formData = {
        hero: data || hero,
        summary: summary,
        story: story,
        image: image,
        video: video,
        tags: tags,
      };
      console.log(formData);
      dispatch(createGratitude({ formData, navigate, toast }));
      handleClear();
    }
  };

  React.useEffect(() => {
    if (success) {
      navigate(`/appreciation/${appreciation._id}`);
    }
  }, [success, appreciation]);

  //images
  const onChange = (e) => {
    if (e.target.name === "image") {
      const reader = new FileReader();
      const file = e.target.files[0];
      if (file > 8e6) {
        alert("Max Limit is: 8mb");
        return;
      }
      reader.onload = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const tinymce = "0z5qmo7cx8rjieka6xxb9nz2y1b8k8rdyluiq9zv9r0t6du2";

  const options =
    heroes &&
    heroes.map((option) => {
      const firstLetter = option.name[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });

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
            {hero}
            {summary}
            {story}
            {image}
            {video}
            {[...tags]}
            {data}
            <form onSubmit={onSubmit}>
              <Grid
                item
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="stretch"
                rowSpacing={4}
              >
                <Grid item xs={12} md={12}>
                  {!data ? (
                    <Autocomplete
                      onChange={(e) => {
                        setHero(e.target.value);
                      }}
                      id="grouped-demo"
                      options={options.sort(
                        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                      )}
                      groupBy={(option) => option.firstLetter}
                      getOptionLabel={(option) => option.name}
                      autoHighlight
                      fullWidth
                      renderOption={(props, option) => (
                        <Box {...props}>{option.name}</Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="hero"
                          type="text"
                          required
                          label="Select your hero"
                        />
                      )}
                    />
                  ) : null}
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    name="summary"
                    value={summary}
                    type="text"
                    required
                    multiline
                    rows={4}
                    fullWidth
                    label="summarize your story"
                    onChange={(e) => {
                      setSummary(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>Express your appreciation here</InputLabel>
                  <Editor
                    apiKey={tinymce}
                    value={story}
                    plugins="wordcount fullscreen"
                    init={{
                      height: 500,
                      menubar: false,
                    }}
                    onEditorChange={storyChange}
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <ChipInput
                    value={tags}
                    name="tags"
                    variant="outlined"
                    placeholder="Write out qualities of your hero"
                    fullWidth
                    onAdd={(tag) => handleAddTag(tag)}
                    onDelete={(tag) => handleDeleteTag(tag)}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>
                    <Link href="https://youtu.be/UjXTdZ45evs">Tutorial</Link>:
                    How to get your Youtube Video Id
                  </InputLabel>
                  <TextField
                    name="video"
                    value={video}
                    type="text"
                    allowDuplicates={false}
                    fullWidth
                    label="Share youtube video id e.g. 75RjgtZ2tj0"
                    onChange={(e) => {
                      setVideo(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel>Upload a banner for your hero</InputLabel>
                  <Button
                    variant="contained"
                    component="label"
                    color="secondary"
                  >
                    Upload a banner for your hero
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      name="image"
                      onChange={onChange}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12} md={12}>
                  <ButtonGroup variant="text" aria-label="text button group">
                    <Button
                      variant="contained"
                      size="large"
                      color="secondary"
                      type="submit"
                      disabled={loading ? true : false}
                      fullWidth
                    >
                      <GrTypography variant="h5" component="p" color="grey.900">
                        GIVE
                      </GrTypography>
                    </Button>
                    <Button onClick={handleClear} fullWidth>
                      <GrTypography variant="p" component="p" color="grey.900">
                        Clear
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

export default GratitudeForm;
