import * as React from "react";
import Dialog from "@mui/material/Dialog";
import logo from "../../Asset/logo.png";
import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";

import Slide from "@mui/material/Slide";
import {
  NavStyled,
  NavLinkContainer,
  NavLinksWrapperStyled,
  LogoNTextContainerStyled,
  LinkTextStyled,
  Img as LogoImage,
  HeaderDialog,
  DialogNavStyled,
  MenuIconStyled,
  CloseIconStyled,
  ImageWrapperStyled,
} from "./styled.js";
//   ======  IMPORTING Common Container  ======
import ContentContainer from "../Common/Container/Container";

const data = {
  navigateOptions: [
    ["Home", "/home"],
    ["How we work", "/how-we-work"],
    ["About us", "/about-us"],
    ["Contact us", "/contact-us"],
  ],
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const descriptionElementRef = React.useRef(null);
  const [logged, setLogged] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  React.useEffect(()=>{
  var isLoggedId = localStorage.getItem('logged')
    setLogged(Boolean(isLoggedId))
  },[])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MenuIconStyled
        onClick={handleClickOpen}
        style={logged ? { fontSize: "40px" ,color:"#fff"} : { fontSize: "40px" }}
      ></MenuIconStyled>

      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        scroll={"paper"}
        TransitionComponent={Transition}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <HeaderDialog ref={descriptionElementRef}>
          <ContentContainer className="main__container">
            <NavStyled className="navigation" justify="space-between">
              <LogoNTextContainerStyled>
                <ImageWrapperStyled>
                  <LogoImage
                    src={logo}
                    alt="bless chef logo"
                    width={"100%"}
                    height={"100%"}
                  />
                </ImageWrapperStyled>
              </LogoNTextContainerStyled>
              <CloseIconStyled
                onClick={handleClose}
                style={{ fontSize: "40px" }}
              />
            </NavStyled>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <DialogNavStyled>
                <NavLinksWrapperStyled direction="column">
                  {data.navigateOptions.map((item, index) => {
                    return (
                      <NavLinkContainer key={index}>
                        <Link to={item[1]} style={{ textDecoration: "none" }}>
                          <LinkTextStyled color="black">
                            {item[0]}
                          </LinkTextStyled>
                        </Link>
                      </NavLinkContainer>
                    );
                  })}
                  <Person style={{ fontSize: "30px" }} />
                </NavLinksWrapperStyled>
              </DialogNavStyled>
            </div>
          </ContentContainer>
        </HeaderDialog>
      </Dialog>
    </>
  );
}
