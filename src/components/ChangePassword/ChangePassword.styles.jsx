import { Typography, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GrTypography = styled(Typography)({
  color: "grey.900",
  fontWeight: "600",
});
export const GrContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10),
}));

export const GrBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 0, 2),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3, 0, 3),
  },
}));
