import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GrTypography = styled(Typography)({
  color: "grey.900",
  fontWeight: "600",
});
export const GrContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10),
}));
