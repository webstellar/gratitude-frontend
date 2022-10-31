import { useState } from "react";
import { Wrapper, Search, SearchIconWrapper, StyledInputBase } from "../MobileMenu/MobileMenu.styles"
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Box } from "@mui/material";


const SearchBar = () => {
    const [searchOpen, setSearchOpen] = useState(null);

    const handleSearchToggle = (event) => {
        setSearchOpen(event.currentTarget)
    }

    const handleSearchClose = () => {
        setSearchOpen(null)
    }

    const searchbox = (

        <Wrapper
            open={searchOpen}
            onClose={handleSearchClose}
        >
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Wrapper>

    )


    return (
        <>
            <IconButton
                aria-label="open search"
                onClick={handleSearchToggle}
                size="large"
                disableRipple={true}
                color="inherit"
            >
                <SearchIcon />
            </IconButton>
        </>
    )
}

export default SearchBar