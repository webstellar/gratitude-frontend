import {
    Container, Stack, Grid, Typography, Divider, useMediaQuery, useTheme,
} from '@mui/material';
import { GrBox, GrItem, GrAvatar, GrBigTypography } from "./UserProfile.styles"

const UserProfile = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
                            alt="Remy Sharp"
                            src="https://source.unsplash.com/random"
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
                            <GrBigTypography variant="h2" component="h2" sx={{ fontWeight: "bold" }}>
                                Hi, Peter
                            </GrBigTypography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}>
                                <GrItem elevation={0}><Typography variant="h5">View Profile</Typography></GrItem>
                                <GrItem elevation={0}><Typography variant="h5">Add a Give</Typography></GrItem>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </GrBox>

            <Divider sx={{ bgcolor: 'background.paper', mt: 3, mb: 3 }} />
        </Container>

    )
}

export default UserProfile