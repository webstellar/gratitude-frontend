import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import {
    Grid,
    Stack,
    Box,
    Toolbar,
    List,
    CssBaseline,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { GrItem } from './DashboardLayout.styles';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
)

const DashboardLayout = ({ children }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} elevation={1} color="default" sx={{ bgcolor: 'background.paper' }}>
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={6} md={6}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0988 25.5699C11.0988 26.8557 11.4745 28.0865 12.2259 29.2621C12.9773 30.4377 13.9613 31.3929 15.1778 32.1277C16.4301 32.8625 17.7898 33.2298 19.2568 33.2298C20.867 33.2298 22.2982 32.8625 23.5505 32.1277C24.8029 31.3929 25.7868 30.4377 26.5024 29.2621C27.2538 28.0865 27.6295 26.8557 27.6295 25.5699V0H35.3045V25.7352C35.3045 28.711 34.5889 31.3562 33.1577 33.6707C31.7264 35.9485 29.7943 37.7487 27.3612 39.0712C24.9281 40.3571 22.2266 41 19.2568 41C16.3228 41 13.6393 40.3571 11.2062 39.0712C8.80885 37.7487 6.89458 35.9485 5.46335 33.6707C4.03212 31.3562 3.3165 28.711 3.3165 25.7352V0H11.0988V12.7849V25.5699Z" fill="black" />
                                    <path d="M3.09292 0.0332399H9.46068V8.90648H14.282V13.9969H9.46068V29.4083L3.3165 25.7352L3.09292 13.9969H0V8.90648H3.09292V0.0332399Z" fill="black" />
                                    <path d="M3.09292 0.0332399H9.46068V8.90648H14.282V13.9969H9.46068V29.4083L3.3165 25.7352L3.09292 13.9969H0V8.90648H3.09292V0.0332399Z" fill="black" fillOpacity="0.2" />
                                    <path d="M16.5359 26.0459C16.5359 25.0807 16.8695 24.2712 17.5366 23.6174C18.234 22.9636 18.9921 22.6367 19.8108 22.6367C20.5689 22.6367 21.2814 22.9636 21.9485 23.6174C22.646 24.2712 22.9947 25.0807 22.9947 26.0459C22.9947 27.0733 22.646 27.8983 21.9485 28.521C21.2814 29.1126 20.5689 29.4083 19.8108 29.4083C18.9921 29.4083 18.234 29.1126 17.5366 28.521C16.8695 27.8983 16.5359 27.0733 16.5359 26.0459Z" fill="#F7430A" />
                                    <path d="M28.8109 0.0332399H35.1787V8.90648H40V13.9969H35.1787L35.3045 25.7352L28.8109 29.4083V13.9969H25.718V8.90648H28.8109V0.0332399Z" fill="black" />
                                </svg>
                            </IconButton>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Stack
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                                spacing={2}>
                                <GrItem elevation={0}>Peter</GrItem>
                                <GrItem elevation={0}><AccountCircleIcon /></GrItem>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" open={open} sx={{ color: "#fff", backgroundColor: "grey.900" }}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.0699 29.4012C27.3557 29.4012 28.5865 29.0255 29.7621 28.2741C30.9377 27.5227 31.8929 26.5387 32.6277 25.3222C33.3625 24.0699 33.7298 22.7102 33.7298 21.2432C33.7298 19.633 33.3625 18.2018 32.6277 16.9495C31.8929 15.6971 30.9377 14.7132 29.7621 13.9976C28.5865 13.2462 27.3557 12.8705 26.0699 12.8705H0.5L0.5 5.1955H26.2352C29.211 5.1955 31.8562 5.91111 34.1707 7.34234C36.4485 8.77357 38.2487 10.7057 39.5712 13.1388C40.8571 15.5719 41.5 18.2734 41.5 21.2432C41.5 24.1772 40.8571 26.8607 39.5712 29.2938C38.2487 31.6911 36.4485 33.6054 34.1707 35.0367C31.8562 36.4679 29.211 37.1835 26.2352 37.1835H0.5L0.5 29.4012H13.2849H26.0699Z" fill="black" />
                            <path d="M0.53324 37.4071L0.53324 31.0393H9.40648V26.218H14.4969V31.0393H29.9083L26.2352 37.1835L14.4969 37.4071V40.5H9.40648V37.4071H0.53324Z" fill="black" />
                            <path d="M0.53324 37.4071L0.53324 31.0393H9.40648V26.218H14.4969V31.0393H29.9083L26.2352 37.1835L14.4969 37.4071V40.5H9.40648V37.4071H0.53324Z" fill="black" fill-opacity="0.2" />
                            <path d="M26.5459 23.9641C25.5807 23.9641 24.7712 23.6305 24.1174 22.9634C23.4636 22.266 23.1367 21.5079 23.1367 20.6892C23.1367 19.9311 23.4636 19.2186 24.1174 18.5515C24.7712 17.854 25.5807 17.5053 26.5459 17.5053C27.5733 17.5053 28.3983 17.854 29.021 18.5515C29.6126 19.2186 29.9083 19.9311 29.9083 20.6892C29.9083 21.5079 29.6126 22.266 29.021 22.9634C28.3983 23.6305 27.5733 23.9641 26.5459 23.9641Z" fill="#F7430A" />
                            <path d="M0.53324 11.6891L0.53324 5.3213H9.40648V0.5H14.4969V5.3213L26.2352 5.1955L29.9083 11.6891H14.4969V14.782H9.40648V11.6891H0.53324Z" fill="black" />
                        </svg>
                        }
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <AccountCircleIcon size="large" />
                            </ListItemIcon>
                            <ListItemText primary="profile" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <VolunteerActivismIcon size="large" />
                            </ListItemIcon>
                            <ListItemText primary="profile" sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>

    )
}

export default DashboardLayout