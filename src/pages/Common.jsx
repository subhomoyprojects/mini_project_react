import React from "react";
import Grid from "@mui/material/Grid";

function Common(props) {
  return (
    <Grid container spacing={8} className="design-controller">
      <Grid item xs={6} className="left-panel">
        <img src={props.ImgUrl} alt="" />
      </Grid>
      <Grid item xs={6} className="right-panel">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </Grid>
    </Grid>
  );
}

export default Common;
