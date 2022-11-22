import { styled } from "@mui/material/styles";
import { Paper, Typography, Box } from "@mui/material";

export const GrPaper = styled(Paper)({
  position: "relative",
  backgroundColor: "grey.800",
  color: "#fff",
  mb: 4,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
})

export const GrHeroImage = styled("img")(({ theme }) => ({
  maxWwidth: "100%",
  height: "600px",
  [theme.breakpoints.down("md")]: {
    width: 400,
    height: 280,
  },
}));

export const GrTypography = styled(Typography)(({ theme }) => ({
  lineHeight: "normal",
  fontWeight: "600",
  color: "#f6430a",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
    fontWeight: "600",
  },
}));

export const GrBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(20, 0, 9),
  pr: { md: 0 },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(8, 0, 4),
    fontSize: "1.8rem",
    fontWeight: "600",
  },
}));

export const GrParaBox = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4, 0, 4),
  pr: { md: 0 },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2, 0, 2),
  },
}));

export const GrDiv = styled("div")({
  marginTop: "2rem",
  marginBottom: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
