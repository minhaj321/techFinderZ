import React from "react";
import { Grid, Box, styled } from "@mui/material";
import "../../../styles/ForgetPassword.css";
// import { Link } from "react-router-dom";
import {
  SectionWrapperStyled,
  FormSectionContainerStyled,
  SectionHeadingStyled,
  SectionParaStyled,
  FormContainerStyled,
  FlexContainerInputStyled,
  InputFieldNLabelContainerStyled,
  LabelTextStyled,
  TextFieldStyled,
  PasswordSectionFormHeadingStyled,
} from "../styled";
import ButtonStyled from "../../../Components/Common/Button/Button";
import ContentContainer from "../../../Components/Common/Container/Container";
import { useNavigate } from "react-router-dom";

const ImageContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  maxWidth: "250px",
  margin: "0 auto",
  marginBottom: "44px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "24px",
  },
}));

const ForgotPassword = () => {

const navigate = useNavigate();


  return (
    <>
      <SectionWrapperStyled img_url="/Assets/common-images/mechanic-fixing-and-smiling.png">
        <ContentContainer>
          <FormSectionContainerStyled>
            <Grid container rowSpacing={6}>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SectionHeadingStyled variant="h3">
                  Welcome !
                </SectionHeadingStyled>
                <SectionParaStyled variant="h6">
                  First time, you should login or sign up
                </SectionParaStyled>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormContainerStyled>
                  <PasswordSectionFormHeadingStyled variant="h6">
                    Forgot Password
                  </PasswordSectionFormHeadingStyled>

                  <ImageContainerStyled>
                    <img
                      src="/Assets/sign-up-login-select/icon-forgot-password.png"
                      alt="forgot password"
                      width="100%"
                      height={"100%"}
                    />
                  </ImageContainerStyled>

                  <FlexContainerInputStyled>
                    <InputFieldNLabelContainerStyled>
                      <LabelTextStyled
                        variant="infoText"
                        sx={{ fontWeight: 500 }}
                      >
                        Email Address
                      </LabelTextStyled>
                      <TextFieldStyled
                        variant={"standard"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </InputFieldNLabelContainerStyled>
                  </FlexContainerInputStyled>

                  <Box
                    sx={{
                      marginTop: {
                        xs: "24px",
                        sm: "40px",
                        md: "40px",
                        lg: "40px",
                        xl: "40px",
                      },
                      marginBottom: {
                        xs: "32px",
                        sm: "100px",
                        md: "100px",
                        lg: "100px",
                        xl: "100px",
                      },
                    }}
                  >
                    <ButtonStyled
                  onClick={()=>navigate('/new-password')}
                  fullWidth={true}
                      variant="contained"
                      sx={{
                        backgroundColor: "#8F87FF",
                        color: (theme) => theme.palette.common.white,
                        borderRadius: "5px",
                        "&:hover": {
                          backgroundColor: "#8F87FF",
                          color: (theme) => theme.palette.common.white,
                        },
                        fontSize: "20px",
                        fontFamily: "Nunito",
                        fontWeight: 700,
                        padding: {
                          xs: "10px 6px",
                          sm: "12px 8px",
                          md: "12px 8px",
                          lg: "12px 8px",
                          xl: "12px 8px",
                        },
                      }}
                    >
                      Send Reset Link
                    </ButtonStyled>
                  </Box>
                </FormContainerStyled>
              </Grid>
            </Grid>
          </FormSectionContainerStyled>
        </ContentContainer>
      </SectionWrapperStyled>
    </>
  );
};
export default ForgotPassword;
