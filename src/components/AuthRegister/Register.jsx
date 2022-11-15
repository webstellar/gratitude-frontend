import { useState, useEffect } from "react"
import {
    Box,
    TextField,
    Typography,
    Button,
    Grid,
    CssBaseline,
    IconButton,
    CircularProgress
} from '@mui/material/';
import { GrTypography, } from "./Register.styles"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import ClearIcon from '@mui/icons-material/Clear';
import { toast } from "react-toastify"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { register } from "../../redux/auth/authSlice";

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

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Login = ({ handleClose }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setFormData] = useState(initialState)


    const { name, email, password, confirmPassword } = userData

    const { loading, error } = useSelector((state) => ({
        ...state.auth
    }))

    useEffect(() => {
        error &&
            toast.error(error)
    }, [error])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("passwords do not match")
        }
        if (name && email && password && confirmPassword) {
            const formData = {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }
            console.log(formData)
            dispatch(register(formData, toast))
        }
    }

    return (
        <>
            <CssBaseline />
            <Box
                component="form"
                sx={style}
                noValidate
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="stretch"
                    rowSpacing={1}
                >
                    <Grid
                        item
                        xs={12}
                        md={12}
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="flex-start"
                    >
                        <IconButton
                            size="large"
                            disableRipple={true}
                            color="inherit"
                            onClick={handleClose}
                        >
                            <ClearIcon sx={{ fontSize: "2.5rem" }} />
                        </IconButton>
                    </Grid>


                    <Grid
                        item
                        xs={12}
                        md={12}
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <GrTypography
                            variant='h6' component="p" color="grey.900" gutterBottom>PLEASE CREATE AN ACCOUNT</GrTypography>
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={onChange}
                            label="FULL NAME"
                            style={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            label="EMAIL"
                            style={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}
                        container
                        direction="row" justifyContent="flex-start"
                    >
                        <TextField
                            required
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            label="ENTER YOUR PASSWORD"
                            style={{ width: '100%' }} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            id="confirmpassword"
                            type="password" name="confirmPassword"
                            value={confirmPassword}
                            onChange={onChange}
                            label="CONFIRM YOUR PASSWORD"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            type="submit"
                            sx={{
                                borderRadius: 0,
                                mt: 1,
                                mb: 2

                            }}
                            fullWidth
                        >
                            {
                                loading && (
                                    <CircularProgress />
                                )
                            }
                            <GrTypography
                                variant='h5'
                                component="p"
                                color="grey.900">
                                CONTINUE
                            </GrTypography>
                        </Button>
                    </Grid>


                    <Grid item xs={12} md={12}>
                        <Typography
                            variant="p"
                            component="p"
                            size="large"
                            color="grey.900">
                            Forgot password? click here.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Login