import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const GrBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3, 5, 3),
    backgroundColor: "#000",
    color: "#fff",

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2, 2, 2),
    }
}))

export const GrImg = styled("img")(({ theme }) => ({
    width: "190px",
    height: "50px",
    [theme.breakpoints.down("md")]: {
        width: "150px",
        height: "45px",
    },
}))
