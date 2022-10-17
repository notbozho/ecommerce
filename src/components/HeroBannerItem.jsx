import React from "react";
import { Paper, Button } from "@mui/material";
import PropTypes from "prop-types";

function HeroBannerItem({ name, imageUrl }) {
  name = name.substring(0, 1) + name.substring(1);
  return (
    <Paper>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} width={"300px"} height={"300px"} />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

HeroBannerItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default HeroBannerItem;
