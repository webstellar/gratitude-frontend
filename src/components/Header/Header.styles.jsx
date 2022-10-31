import { styled } from "@mui/material/styles"
import { AppBar, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';



export const GrAppBar = styled(AppBar)(({ theme }) => ({
    padding: theme.spacing(2, 5, 2),
}))

export const GrToolBar = styled(Toolbar)(({ theme }) => ({

}))

export const GrHamburger = styled(MenuIcon)({

})

export const GrSearch = styled(SearchIcon)({

})

export const GrImg = styled("img")(({ theme }) => ({
    width: "220px",
    height: "75px",
    [theme.breakpoints.down("md")]: {
        width: "165px",
        height: "57px",
    },
}))

