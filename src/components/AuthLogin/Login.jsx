import { Box, TextField, Typography, Button, Grid } from '@mui/material/';
import { GrTypography } from "./Login.styles"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '& .MuiTextField-root': {
        m: 1, width: '25ch'
    }
}

const Login = () => {
    return (
        <>
            <Box
                component="form"
                sx={style}
                noValidate
                autoComplete="off"
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="stretch"
                    rowSpacing={1}
                >
                    <Grid item sx={12} md={12}>
                        <TextField fullWidth label="ENTER YOUR EMAIL" />
                    </Grid>
                    <Grid item sx={12} md={12}>
                        <TextField fullWidth label="ENTER YOUR PASSWORD" />
                    </Grid>
                    <Grid item sx={12} md={12}>
                        <Button variant="contained" size="large" color="secondary" fullWidth>
                            <GrTypography
                                variant='h5' component="p" color="grey.900">CONTINUE</GrTypography>
                        </Button>
                    </Grid>
                    <Grid item sx={12} md={12}>
                        <Typography variant="p" component="p" size="large" color="grey.900">
                            Forgot password? click here.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login