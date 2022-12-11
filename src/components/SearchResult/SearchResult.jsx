import React from "react";
import {
  Grid,
  Input,
  Container,
  IconButton,
  InputLabel,
  CssBaseline,
  FormControl,
  InputAdornment,
  Box,
} from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";
import { GrBox, GrCTypography, GrDiv } from "./SearchResult.styles";
import { getHeroes } from "../../redux/heroes/heroesSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HeroCard from "../HeroCard/HeroCard";

const SearchResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = React.useState("");
  const { heroes, loading } = useSelector((state) => state.heroes);
  console.log(heroes);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    if (keyword.trim()) {
      dispatch(getHeroes(keyword));
      navigate(`/search/${keyword}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <>
      <CssBaseline />
      <GrBox sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <form onSubmit={searchHandler}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-seach">SEARCH</InputLabel>
              <Input
                type="text"
                id="search_field"
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="search" type="submit">
                      <SearchIcon color="secondary" sx={{ fontSize: "5rem" }} />
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  fontSize: "5rem",
                  fontWeight: "Bold",
                  textTransform: "uppercase",
                }}
              />
            </FormControl>
          </form>
          <GrDiv>
            {loading ? (
              <Box sx={{ m: 5 }}>
                <GrCTypography>
                  Let&apos;s together find your hero
                </GrCTypography>
              </Box>
            ) : (
              <Grid item container md={12} spacing={4}>
                {heroes &&
                  heroes.map((hero) => <HeroCard key={hero._id} hero={hero} />)}
              </Grid>
            )}
          </GrDiv>
        </Container>
      </GrBox>
    </>
  );
};

export default SearchResult;
