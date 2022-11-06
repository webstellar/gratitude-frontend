import { useState } from "react";
import {
  GrAppBar,
  GrToolBar,
  GrImg,
  GrLink
} from "./Header.styles";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Container,
  Modal
} from "@mui/material";
import BrandLogo from "../../images/black-gratitude.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";
import Login from "../AuthLogin/Login";
import Register from "../AuthRegister/Register"

const navItems = [
  {
    id: 1,
    name: "Give",
    link: "/give-gratitude",
    type: "text",
    variant: "h6",
    weight: "regular",
  },
  {
    id: 2,
    name: "Our story",
    link: "/our-story",
    type: "text",
    variant: "h6",
    weight: "regular",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));



  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [openRegister, setOpenRegister] = useState(false)

  //Login Popup
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Register Popup
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  //hamburger menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <GrAppBar position="static" elevation={0} color="default" sx={{ bgcolor: 'background.paper' }}>
          <Container maxWidth="xl">
            <GrToolBar>
              <Box sx={{ flexGrow: 1 }} component="a" href="/">
                <GrImg src={BrandLogo} alt="brand logo" />
              </Box>

              <div>

                {/* Login Modal */}
                <IconButton size="large" disableRipple={true} color="inherit" onClick={handleOpen}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    LOGIN
                  </Typography>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    disableEscapeKeyDown={false}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Login />
                  </Modal>
                  {/* Login Modal */}

                </IconButton>
                {!isMobile &&
                  <SearchBar />
                }

                {!isMobile &&
                  <IconButton
                    size="large"
                    disableRipple={true}
                    color="inherit"
                    onClick={handleOpenRegister}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "regular" }}
                    >
                      Give
                    </Typography>
                  </IconButton>
                }

                <Modal
                  open={openRegister}
                  onClose={handleCloseRegister}
                  disableEscapeKeyDown={false}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Register />
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
                    <IconButton size="large" color="inherit" onClick={handleMenu}>
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
                    </Menu>
                  </>
                )}
                <MobileMenu />
              </div>
            </GrToolBar>
          </Container>
        </GrAppBar>
      </Box>
    </div >
  );
};
export default Header;
