import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const GrBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 0, 3),
  },
}));

export const GrBigTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
}));

export const GrTypography = styled(Typography)({
  color: "grey.900",
  fontWeight: "600",
});

export const GrLink = styled(Link)({
  textDecoration: "none",
  color: "#F6430A",
  cursor: "pointer",
});

export const GrDiv = styled("div")({
  border: "1px solid #D9D9D9",
  borderRadius: "4px",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "0.5em",
});
