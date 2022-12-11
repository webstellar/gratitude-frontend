import {
  Container,
  Stack,
  Grid,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  GrBox,
  GrItem,
  GrAvatar,
  GrBigTypography,
  GrLink,
} from "./UserProfile.styles";

import { useSelector } from "react-redux";

const UserProfile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { user } = useSelector((state) => state.auth);

  const username = user?.user?.name;
  const firstname = username.split(" ")[0];

  return (
    <Container maxWidth="xl">
      <GrBox>
        <Grid
          container
          direction="row"
          justifyContent={isMobile ? "space-between" : "flex-start"}
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={3} md={2}>
            <GrAvatar
              src={
                user.user
                  ? user?.user?.profilePicture?.url
                  : "https://source.unsplash.com/random"
              }
              alt={user?.user?.name}
            />
          </Grid>
          <Grid
            item
            xs={9}
            md={10}
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={12}>
              <GrBigTypography
                variant="h2"
                component="h2"
                sx={{ fontWeight: "bold" }}
              >
                Hi, {user && firstname}
              </GrBigTypography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <GrItem elevation={0}>
                  <GrLink to="/create-hero">
                    <Typography variant="h6" color="grey.500">
                      Create Hero
                    </Typography>
                  </GrLink>
                </GrItem>
                <GrItem elevation={0}>
                  <GrLink to="/express-gratitude">
                    <Typography variant="h6">Give Gratitude</Typography>
                  </GrLink>
                </GrItem>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </GrBox>

      <Divider sx={{ bgcolor: "background.paper", mt: 3, mb: 3 }} />
    </Container>
  );
};

export default UserProfile;
