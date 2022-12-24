import { styled, Button } from "@mui/material";

const MainButton = styled(Button)(({ theme, ...props }) => ({
  //   color: theme.palette.primary.main,
  //   width: `${props.size + "px"}`,
  //   alignSelf: `${props.align}`,
  //   background: `#fff`,
  borderRadius: "0px",
  textTransform: "capitalize",
  //   border: "none",

  fontWeight: 600,
  //   height: `${props.height + "px"}`,
  fontSize: "16px",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },

  //   padding: "0px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    // padding: "1.6rem 2rem",
    // width: "fit-content",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "10px",
    // padding: "1.6rem 2rem",
    // width: "fit-content",
  },
}));

export { MainButton };
