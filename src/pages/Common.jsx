import React from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router";
import TextField from "@mui/material/TextField";

function Common(props) {
  let checkLocation = useLocation();
  console.log(checkLocation);
  return (
    <>
      {checkLocation.pathname === "/contacts" ? (
        <form className="form-control">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </form>
      ) : (
        <Grid container spacing={8} className="design-controller">
          <Grid item xs={6} className="left-panel">
            <img src={props.ImgUrl} alt="" />
          </Grid>
          <Grid item xs={6} className="right-panel">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Common;
