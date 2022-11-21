import React from "react";
import PropTypes from "prop-types";
import { GrIframe, GrLink } from "./YoutubeEmbed.styles";

const YoutubeEmbed = ({ gratitude }) => (
  <GrLink className="video-responsive">
    <GrIframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${gratitude?.video}` || null}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={gratitude?.summary}
    />
  </GrLink>
);

YoutubeEmbed.propTypes = {
  gratitude: PropTypes.any.isRequired,
};

export default YoutubeEmbed;
