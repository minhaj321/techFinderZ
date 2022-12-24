import { Typography, styled } from "@mui/material";
import ButtonStyled from "../../Components/Common/Button/Button";

const MainSectionHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,
  fontFamily: "Raleway, sans-serif",
  textTransform: "uppercase",
  marginBottom: "60px",
  fontWeight: 700,
}));

const ButtonViewMore = styled(ButtonStyled)(({ theme, ...props }) => ({
  padding: "14px 60px",
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
  },
}));

export { MainSectionHeadingStyled, ButtonViewMore };
