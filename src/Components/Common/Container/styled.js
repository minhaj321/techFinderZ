import { styled } from "@mui/material";

const ContentContainer = styled("div")(({ theme, ...props }) => ({
  maxWidth: "1500px",

  paddingLeft: "30px",
  paddingRight: "30px",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
}));
export { ContentContainer };
