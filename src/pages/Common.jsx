import React from "react";
import Grid from "@mui/material/Grid";
import { useLocation } from "react-router";
import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

function Common(props) {
  let checkLocation = useLocation();
  const outerTheme = useTheme();
  return (
    <>
      {checkLocation.pathname === "/contacts" ? (
        <form className="form-control">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr" },
              gap: 2,
            }}
          >
            <ThemeProvider theme={customTheme(outerTheme)}>
              <TextField color="secondary" label="Name" variant="outlined" />
              <TextField label="Email" variant="outlined" />
              <TextField label="Phone Number" variant="outlined" />
              <TextField label="Multiline" multiline rows={6} variant="outlined" className="fullwidth" />
            </ThemeProvider>
          </Box>
          <Button className="btn" variant="contained" size="large">
            Submit
          </Button>
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
