import { Menu, Close } from "@mui/icons-material";
import { styled, Box, Typography } from "@mui/material";

const NavbarWrapperStyled = styled("div")(({ theme, ...props }) => ({
  width: "100%",
  //   height: "153px",
}));
const NavbarContainerStyled = styled("nav")(({ theme, ...props }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const NavigateOptsStyled = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  gap: "40px",
  listStyleType: "none",
  marginBottom: "0px",
}));

const BtnsFlexContainer = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  gap: "20px",
  listStyleType: "none",
  marginBottom: "0px",
}));

const OptionTextStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,

  textDecoration: "none",
  textTransform: "capitalize",
  fontFamily: "Poppins",
  fontWeight: 300,
}));

const ImageWrapperStyled = styled("div")(({ theme, ...props }) => ({
  maxWidth: "120px",
  [theme.breakpoints.down("md")]: {
    maxWidth: "90px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "70px",
  },
}));

const NavStyled = styled("nav")(({ theme, ...props }) => ({
  // background: theme.palette.primary.main,

  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
}));

const LogoNTextContainerStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.6rem",
}));

const LogoTextStyled = styled(Typography)(({ theme, ...props }) => ({
  fontSize: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  color: props.color ? theme.palette.common.black : theme.palette.common.white,
  [theme.breakpoints.down("xs")]: {
    display: "hidden",
    visibility: "hidden",
    pointerEvents: "none",
  },
}));

const NavLinksWrapperStyled = styled("ul")(({ theme, ...props }) => ({
  display: "flex",
  alignItems: "center",
  gap: "6.7rem",
  listStyleType: "none",
  flexDirection: props.direction,
  padding: "0px",
}));

const NavLinkContainer = styled("li")(({ theme }) => ({
  color: "red",
}));
const LinkTextStyled = styled("span")(({ theme, ...props }) => ({
  textDecoration: "none",
  color: props.color ? theme.palette.common.black : theme.palette.common.white,
  fontSize: "1.4rem",
  display: "inline-block",
  textAlign: "center",
}));
const LogoImageWrapperStyled = styled("div")(({ theme }) => ({
  width: "8rem",
  height: "5rem",
}));

const IconImageContainerStyled = styled("div")(({ theme }) => ({
  width: "2.565rem",
  height: "2.423rem",
}));
const HeaderDialog = styled("header")(({ theme }) => ({}));
const Img = styled("img")(({ theme }) => ({}));
const DialogNavStyled = styled("nav")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
  bottom: "50%",
}));
const MenuIconStyled = styled(Menu)(({ theme }) => ({
  color: theme.palette.common.black,
  width: "50px",
  transition: "all 400ms",
}));
const CloseIconStyled = styled(Close)(({ theme }) => ({
  fontSize: "50px",

  color: theme.palette.common.black,
  transition: "all 400ms",
}));
export {};

//   const  = styled("nav")(({ theme }) => ({
// ,
//   }));

//   const  = styled("nav")(({ theme }) => ({
// ,
//   }));

export {
  NavbarWrapperStyled,
  NavbarContainerStyled,
  NavigateOptsStyled,
  BtnsFlexContainer,
  OptionTextStyled,
  ImageWrapperStyled,
  NavStyled,
  NavLinkContainer,
  NavLinksWrapperStyled,
  LogoTextStyled,
  LogoNTextContainerStyled,
  LinkTextStyled,
  LogoImageWrapperStyled,
  IconImageContainerStyled,
  Img,
  HeaderDialog,
  DialogNavStyled,
  MenuIconStyled,
  CloseIconStyled,
};
