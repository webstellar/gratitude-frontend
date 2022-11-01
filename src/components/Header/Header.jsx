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
  Container
} from "@mui/material";
import BrandLogo from "../../images/black-gratitude.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

import MobileMenu from "../MobileMenu/MobileMenu";
import SearchBar from "../SearchBar/SearchBar";

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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <GrAppBar position="static" elevation={0} color="default" sx={{ bgcolor: 'background.paper' }}>
          <Container maxWidth="xl">
            <GrToolBar>
              <Box sx={{ flexGrow: 1 }}>
                <GrImg src={BrandLogo} alt="brand logo" />
              </Box>

              <div>
                <IconButton size="large" disableRipple={true} color="inherit">
                  <GrLink to="/login" style={{ textDecoration: "none" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      LOGIN
                    </Typography>
                  </GrLink>
                </IconButton>
                {!isMobile &&
                  <SearchBar />
                }
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
                      onClose={handleClose}
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
    </div>
  );
};
export default Header;
