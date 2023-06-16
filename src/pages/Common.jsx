import React, { useState } from "react";
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
  const [flag, setFlag] = useState(false);
  const [inputEvents, setInputEvents] = useState({
    fName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  let checkLocation = useLocation();
  const outerTheme = useTheme();
  // event handle onchange
  const eventHandler = (event) => {
    const { name, value } = event.target;
    setInputEvents((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  // event handel submit
  const submitValue = (e) => {
    e.preventDefault();
    setFlag((prevState) => {
      if (inputEvents.fName !== "" && inputEvents.email !== "" && inputEvents.phoneNumber !== "") {
        return (prevState = true);
      }
    });
  };
  return (
    <>
      {checkLocation.pathname === "/contacts" ? (
        <>
          <form className="form-control" onSubmit={submitValue}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { sm: "1fr 1fr 1fr" },
                gap: 2,
              }}
            >
              <ThemeProvider theme={customTheme(outerTheme)}>
                <TextField color="secondary" label="Name" variant="outlined" value={inputEvents.fName} name="fName" onChange={eventHandler} />
                <TextField label="Email" variant="outlined" name="email" value={inputEvents.email} onChange={eventHandler} />
                <TextField label="Phone Number" variant="outlined" name="phoneNumber" value={inputEvents.phoneNumber} onChange={eventHandler} />
                <TextField label="Message" multiline rows={6} variant="outlined" value={inputEvents.message} className="fullwidth" name="message" onChange={eventHandler} />
              </ThemeProvider>
            </Box>
            <Button className="btn" variant="contained" size="large" type="submit">
              Submit
            </Button>
          </form>
          {flag ? (
            <div className="show-area">
              <h4>Name: {inputEvents.fName}</h4>
              <h4>Email: {inputEvents.email}</h4>
              <h4>Phone Number: {inputEvents.phoneNumber}</h4>
              <h4>Message: {inputEvents.message}</h4>
            </div>
          ) : null}
        </>
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
