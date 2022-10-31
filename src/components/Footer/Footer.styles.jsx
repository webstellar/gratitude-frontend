import { styled } from "@mui/material/styles"

export const GrImg = styled("img")(({ theme }) => ({
    width: "180px",
    height: "40px",
    [theme.breakpoints.down("md")]: {
        width: "165px",
        height: "57px",
    },
}))
