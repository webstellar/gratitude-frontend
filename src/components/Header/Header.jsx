import { useState } from "react";
import { GrAppBar, GrToolBar, GrImg, GrLink } from "./Header.styles";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Container,
  CssBaseline,
} from "@mui/material";
import BrandLogo from "../../images/black-gratitude.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import Login from "../AuthLogin/Login";
import Register from "../AuthRegister/Register";

import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../../redux/auth/authSlice";

const navItems = [
  {
    id: 1,
    name: "Heroes",
    link: "/heroeslist",
    type: "text",
    variant: "h6",
    weight: "regular",
  },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    overflow: "unset",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));

  const handleLogout = () => {
    dispatch(setLogout());
  };

  //Login Popup
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //hamburger menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <GrAppBar
          position="static"
          elevation={0}
          color="default"
          sx={{ bgcolor: "background.paper" }}
        >
          <Container maxWidth="xl">
            <GrToolBar>
              <Box sx={{ flexGrow: 1 }} component="a" href="/">
                <GrImg src={BrandLogo} alt="brand logo" />
              </Box>

              <div>
                {/* Login Modal */}
                {user?.user?._id ? null : (
                  <IconButton
                    size="large"
                    disableRipple={true}
                    color="inherit"
                    onClick={handleOpen}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      LOGIN
                    </Typography>

                    <Modal
                      id="login"
                      isOpen={open}
                      onRequestClose={handleClose}
                      ariaHideApp={false}
                      style={customStyles}
                      contentLabel="Login"
                      shouldCloseOnOverlayClick={true}
                    >
                      <Login handleClose={handleClose} />
                    </Modal>
                    {/* Login Modal */}
                  </IconButton>
                )}

                {!isMobile && <SearchBar />}

                {!isMobile && (
                  <IconButton
                    size="large"
                    disableRipple={true}
                    color="inherit"
                    onClick={handleOpen}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "regular" }}>
                      Give
                    </Typography>
                  </IconButton>
                )}

                <Modal
                  id="register"
                  isOpen={open}
                  onRequestClose={handleClose}
                  ariaHideApp={false}
                  style={customStyles}
                  contentLabel="Register"
                  shouldCloseOnOverlayClick={true}
                >
                  <Register handleRClose={handleClose} />
                </Modal>

                {!isMobile &&
                  navItems.map((item) => (
                    <IconButton
                      key={item.id}
                      size="large"
                      disableRipple={true}
                      color="inherit"
                    >
                      <GrLink to={item.link} style={{ textDecoration: "none" }}>
                        {item.type === "text" ? (
                          <Typography
                            variant={item.variant}
                            sx={{ fontWeight: item.weight }}
                          >
                            {item.name}
                          </Typography>
                        ) : (
                          <>{item.name}</>
                        )}
                      </GrLink>
                    </IconButton>
                  ))}
                {!isMobile && (
                  <>
                    <IconButton
                      size="large"
                      color="inherit"
                      onClick={handleMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={() => navigate("/my-profile")}>
                        Profile
                      </MenuItem>
                      <MenuItem onClick={() => navigate("/my-dashboard")}>
                        My account
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </>
                )}
                <MobileMenu />
              </div>
            </GrToolBar>
          </Container>
        </GrAppBar>
      </Box>
    </div>
  );
};
export default Header;
