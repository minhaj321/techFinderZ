import * as React from "react";
import logo from "../../Asset/logo.png";
import ContentContainer from "../Common/Container/Container";

import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
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
  } from "./../Navbar/styled";
import Slide from "@mui/material/Slide";



const SidebarMenuList = ({open,setOpen}) => {

const descriptionElementRef = React.useRef(null);
React.useEffect(() => {
        if (open) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [open]);

    const data = {
        navigateOptions: [
          ["Personal Information", "/personal-information"],
          ["Schedule", "/home"],
          ["My Orders", "/home"],
          ["Wallet", "/home"],
          ["Dispute", "/home"],
        ],
      };
      
      const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });
      
      
    return(
        <>
        {
            open &&
            <Dialog
            open={open}
            onClick={()=>{
                setOpen(false)
            }}
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
                    onClick={()=>{
                        // handleClose()
                        setOpen(false)
                    }
                }
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
        }
        {
            !open &&
            <></>
        }
        </>
  )

}

export default SidebarMenuList