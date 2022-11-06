import { styled } from "@mui/material/styles"
import { Typography } from "@mui/material"


export const GrStoriesTypography = styled(Typography)(({ theme }) => ({
    lineHeight: "normal",
    marginTop: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
        marginTop: "0.5rem",
        marginBottom: "0.5rem"
    }
}))