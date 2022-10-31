import { Container, Grid, Box } from "@mui/material"
import { Link } from "react-router-dom"
import BrandLogo from "../../images/logo-gratitude.svg";

const Footer = () => {
    return (
        <footer>
            <Box bgcolor="text.primary">
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={3}>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer