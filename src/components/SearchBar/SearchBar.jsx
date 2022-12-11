import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        aria-label="open search"
        onClick={() => navigate("/search")}
        size="large"
        disableRipple={true}
        color="inherit"
      >
        <SearchIcon />
      </IconButton>
    </>
  );
};

export default SearchBar;
