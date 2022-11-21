import PropTypes from "prop-types";
import { Container } from "@mui/material";
import YoutubeEmbed from "../YoutubeEmbed/YoutubeEmbed";

import { GrBox } from "./GratitudeMainSection.styles";

const GratitudeMainSection = ({ gratitude }) => {
  return (
    <section>
      <GrBox>
        <Container maxWidth="xl">
          <div
            style={{ fontSize: "20px", fontWeight: "300" }}
            dangerouslySetInnerHTML={{ __html: gratitude.story }}
          />
          <YoutubeEmbed gratitude={gratitude} />
        </Container>
      </GrBox>
    </section>
  );
};

GratitudeMainSection.propTypes = {
  gratitude: PropTypes.object,
};
export default GratitudeMainSection;
