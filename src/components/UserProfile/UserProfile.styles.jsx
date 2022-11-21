import { styled } from "@mui/material/styles";
import { Box, Paper, Avatar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GrBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 0, 3),
  },
}));

export const GrItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0)",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "grey.900",
}));

export const GrAvatar = styled(Avatar)(({ theme }) => ({
  width: 160,
  height: 160,
  [theme.breakpoints.down("md")]: {
    width: 100,
    height: 100,
  },
}));

export const GrBigTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

export const GrLink = styled(Link)({
  textDecoration: "none",
  color: "#F6430A",
  cursor: "pointer",
});
