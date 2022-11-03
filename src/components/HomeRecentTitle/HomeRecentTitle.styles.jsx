import { styled } from "@mui/material/styles"
import { Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"

export const GrBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5, 0, 5),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(5, 0, 5),
        fontSize: "1.8rem",
        fontWeight: "600",
    }
}))

export const GrTypography = styled(Typography)(({ theme }) => ({
    lineHeight: "normal",
    fontWeight: "600",
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
        fontWeight: "600",
    }
}))

export const GrCTypography = styled(Typography)(({ theme }) => ({
    textAlign: "right",
    lineHeight: "normal",
    fontWeight: "600",
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "0.8rem",
        fontWeight: "600",
    }
}))

export const GrLink = styled(Link)({
    textDecoration: "none",
    color: "#F6430A",
    cursor: "pointer"
})