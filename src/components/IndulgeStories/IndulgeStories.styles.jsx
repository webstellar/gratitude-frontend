import { styled } from "@mui/material/styles"
import { Typography, Box } from "@mui/material"

export const GrTypography = styled(Typography)(({ theme }) => ({
    lineHeight: "normal",
    fontWeight: "600",
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.8rem",
        fontWeight: "600",
    }
}))

export const GrBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(5, 0, 5),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(5, 0, 5),
        fontSize: "1.8rem",
        fontWeight: "600",
    }
}))

export const GrDiv = styled("div")({
    marginTop: "2rem",
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
