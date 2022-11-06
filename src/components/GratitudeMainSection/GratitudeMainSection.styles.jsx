import { styled } from "@mui/material/styles"
import { Box } from "@mui/material"

export const GrBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 0, 2),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(3, 0, 3),
    }
}))