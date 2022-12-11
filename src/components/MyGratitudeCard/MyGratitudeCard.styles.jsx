import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GrStoriesTypography = styled(Typography)(({ theme }) => ({
  lineHeight: "normal",
  marginTop: "1rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
}));

export const GrHeroTypography = styled(Typography)(({ theme }) => ({
  lineHeight: "normal",
  marginTop: "1rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
}));

export const GrGiverTypography = styled(Typography)(({ theme }) => ({
  lineHeight: "normal",
  marginTop: "1rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
}));

export const GrLink = styled(Link)({
  textDecoration: "none",
  color: "#F6430A",
  cursor: "pointer",
});
