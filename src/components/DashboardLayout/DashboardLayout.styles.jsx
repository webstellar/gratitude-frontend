import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export const GrItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0)",
  padding: theme.spacing(0.1),
  textAlign: "center",
  color: "grey.900",
  fontSize: "1.2rem",
}));

export const GrLink = styled(Link)({
  textDecoration: "none",
  cursor: "pointer",

  "&:active": {
    color: "#F6430A",
  },

  "&:hover": {
    color: "#F6430A",
  },
});
