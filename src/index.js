import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  makeStyles,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import theme from "./theme";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: "red",
    fontSize: "30px"
  },
  buttonStyles: {
    color: "white",
    border: 0
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Typography
        color="primary"
        variant="h1"
        className={classes.helloThereStyle}
      >
        Hello There
      </Typography>
      <Button
        className={classes.buttonStyles}
        variant="contained"
        color="primary"
        fullWidth={true}
      >
        Hello World
      </Button>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
