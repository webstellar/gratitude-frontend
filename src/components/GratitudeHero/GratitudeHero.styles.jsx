import { styled } from "@mui/material/styles"
import { Paper, Typography, Box, Grid } from "@mui/material"

export const GrPaper = styled(Paper)({
    position: 'relative',
    backgroundColor: 'grey.800',
    color: '#fff',
    mb: 4,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
})


export const GrHeroImage = styled("img")(({ theme }) => ({
    maxWwidth: "100%",
    height: "600px",
    [theme.breakpoints.down("md")]: {
        width: 400,
        height: 280
    }
}))

export const GrTypography = styled(Typography)(({ theme }) => ({
    lineHeight: "normal",
    fontWeight: "600",
    color: "grey.900",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
        fontWeight: "600",
    }
}))

export const GrBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(18, 0, 18),
    pr: { md: 0 },

    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(8, 0, 8),
        fontSize: "1.8rem",
        fontWeight: "600",
    }
}))

export const GrHeroBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: 'grey.800',
    color: '#fff',
    mb: 4,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}))


export const GrGrid = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(3, 0, 3),
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2, 0, 2),
    }
}))
