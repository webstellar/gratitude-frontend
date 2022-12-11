import {
  Container,
  Divider,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  NativeSelect,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import { GrBox, GrItem, GrTypography } from "./GratitudeCommentSection.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { shareOnFacebook, shareOnLinkedIn } from "../../utils/SocialShare";

const GratitudeCommentSection = () => {
  return (
    <section>
      <GrBox>
        <Container maxWidth="xl" sx={{ mb: 6 }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            columnSpacing={6}
          >
            <Grid item xs={3} md={3}>
              <GrItem>
                <GrTypography>Share on Facebook</GrTypography>{" "}
                <IconButton onClick={shareOnFacebook}>
                  <FacebookIcon fontSize="large" />
                </IconButton>
              </GrItem>
            </Grid>
            <Grid item xs={3} md={3}>
              <GrItem>
                <GrTypography>Share on Twitter</GrTypography>
                <IconButton sx={{ cursor: "pointer" }}>
                  <TwitterIcon fontSize="large" />
                </IconButton>
              </GrItem>
            </Grid>
            <Grid item xs={3} md={3}>
              <GrItem>
                <GrTypography>Share on LinkedIn</GrTypography>{" "}
                <IconButton onClick={shareOnLinkedIn}>
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </GrItem>
            </Grid>
            <Grid item xs={3} md={3}>
              <GrItem>
                <GrTypography>Share on Mail</GrTypography>{" "}
                <IconButton sx={{ cursor: "pointer" }}>
                  <MailIcon fontSize="large" />
                </IconButton>
              </GrItem>
            </Grid>
          </Grid>
          <Divider sx={{ bgcolor: "background.paper", mt: 9, mb: 6 }} />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Grid
              container
              item
              md={8}
              xs={8}
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Grid item md={12}>
                <Typography component="p" gutterBottom>
                  The Conversation (0)
                </Typography>
              </Grid>
              <Grid item md={12}>
                <Typography component="p" gutterBottom>
                  Start a discussion, not a fire, Post with kindness
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-start"
              columnGap={2}
            >
              <Grid item>Sort By</Grid>
              <Grid item>
                <FormControl>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Age
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>Latest</option>
                    <option value={20}>Oldest</option>
                    <option value={30}>Newest</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Divider sx={{ bgcolor: "background.paper", mt: 6, mb: 3 }} />

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={2} md={2}>
              <AccountCircleIcon sx={{ fontSize: 60 }} />
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              item
              xs={10}
              md={10}
            >
              <Box sx={{ flexGrow: 1 }}>
                <FormControl fullWidth variant="standard">
                  <Grid item xs={10} md={10}>
                    <TextField
                      id="outlined-basic"
                      label="Comment"
                      variant="outlined"
                    />
                  </Grid>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </GrBox>
    </section>
  );
};

export default GratitudeCommentSection;
