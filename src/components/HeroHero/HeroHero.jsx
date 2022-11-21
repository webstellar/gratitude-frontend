import { useEffect, useState } from "react";
import { GrPaper, GrHeroImage, GrTypography, GrBox } from "./HeroHero.styles";
import HeroImage from "./../../images/heroList.webp";
import { Grid, Box, Container } from "@mui/material";
import axios from "axios";

const HeroHero = () => {
  /*
        const [quotes, setQuotes] = useState([])
        const api_url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    
        const options = {
            method: 'GET',
            url: api_url,
            params: { author: 'Albert', count: '1' },
            headers: {
                'X-RapidAPI-Key': "0c5a99391fmshba31ce56629a9d7p11f911jsna09a2e210410",
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        };
    
    
        useEffect(() => {
            axios.request(options).then(function (response) {
                setQuotes(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        });
    */
  return (
    <>
      <GrPaper elevation={0} sx={{ backgroundImage: `url(${HeroImage})` }}>
        {
          <GrHeroImage
            style={{ display: "none" }}
            src={HeroImage}
            alt="gratitude"
          />
        }
        <Container maxWidth="xl">
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            }}
          />
          <Grid container justifyContent="flex-end">
            <Grid item md={8}>
              <GrBox>
                <GrTypography
                  component="p"
                  variant="h4"
                  color="inherit"
                  gutterBottom
                  sx={{ mb: 8 }}
                >
                  “At times, our own light goes out and is rekindled by a spark
                  from another person. Each of us has cause to think with deep
                  gratitude of those who have lighted the flame within us.”
                </GrTypography>
                <GrTypography component="p" variant="h4" color="inherit">
                  - Albert Schweitzer
                </GrTypography>
              </GrBox>
            </Grid>
          </Grid>
        </Container>
      </GrPaper>
    </>
  );
};

export default HeroHero;
