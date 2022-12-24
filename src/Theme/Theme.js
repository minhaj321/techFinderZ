import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#e2e2e2",
      light: "#e1e1e1",
    },
    secondary: {
      main: "#f50057",
      light: "#f53377",
    },
    success: {
      main: "#37ff6c",
    },
    error: {
      main: "#ff004e",
    },
    info: {
      main: "#8f87ff",
    },
    text: {
      primary: "#707070",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
  },
  typography: {
    h1: {
      fontSize: "52px",
      fontWeight: 700,
      letterSpacing: "1.56px",

      lineHeight: "26px",
    },
    h2: {
      fontWeight: 500,
      letterSpacing: "1.35px",

      fontSize: "45px",
      lineHeight: "34px",
    },
    h3: {
      fontWeight: 500,
      letterSpacing: "1.35px",

      fontSize: "40px",
      lineHeight: "30px",
    },
    h6: {
      fontWeight: 500,
      // letterSpacing: "1.35px",

      fontSize: "24px",
      // lineHeight: "30px",
    },
    p: {
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "0.48px",
    },
    subtitle1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    navOptions: {
      fontSize: "16px",
      lineHeight: "26px",
      letterSpacing: "0.75px",
    },
    infoText: {
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0px",
    },
    fontFamily: "poppins",
  },
});
//Setting responsive font for h1

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
    lineHeight: "18px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "30px",
    lineHeight: "16px",
  },
};
//Setting responsive font for subtitile 1
theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
  },
};
//Setting responsive font for h2
theme.typography.h2 = {
  ...theme.typography.h2,
  // fontWeight: 600,
  // fontSize: "4.5rem",
  // lineHeight: "5.6rem"
  [theme.breakpoints.down("md")]: {
    fontSize: "38px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    lineHeight: "24px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "24px",
    lineHeight: "18px",
  },
};
//Setting responsive font for p
theme.typography.p = {
  ...theme.typography.p,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    lineHeight: "24px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("xs")]: {
    lineHeight: "2rem",
    fontSize: "1.1rem",
  },
};

//Setting responsive font for InfoText
theme.typography.infoText = {
  ...theme.typography.infoText,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",

  [theme.breakpoints.down("sm")]: {
    lineHeight: "20px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("xs")]: {
    lineHeight: "18px",
    fontSize: "11px",
  },
};

//Setting responsive font for h3
theme.typography.h3 = {
  ...theme.typography.h3,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "34px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  // fontWeight: 400,
  // fontSize: "1.6rem",
  // lineHeight: "2.6rem",

  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
};
