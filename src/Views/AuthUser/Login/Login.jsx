import React from "react";
import { Grid } from "@mui/material";
// import { Link } from "react-router-dom";
import {
  SectionWrapperStyled,
  FormSectionContainerStyled,
  SectionHeadingStyled,
  SectionParaStyled,
  FormContainerStyled,
  DividerStyled,
  HeadingFormTypeStyled,
  FlexContainerFormTypeSectionStyled,
  FlexContainerInputStyled,
  InputFieldNLabelContainerStyled,
  LabelTextStyled,
  TextFieldStyled,
  ForgetPasswordTextStyled,
  DividerHorizontalStyled,
} from "../styled";
import ButtonStyled from "../../../Components/Common/Button/Button";
import ContentContainer from "../../../Components/Common/Container/Container";
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const submit = () => {
    localStorage.setItem("email", 22);
  };

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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <FlexContainerFormTypeSectionStyled>
                      <HeadingFormTypeStyled variant="h6" onClick={()=>navigate('/register')}>
                        Sign up
                      </HeadingFormTypeStyled>
                      <DividerStyled />

                      <HeadingFormTypeStyled
                        variant="h6"
                        sx={{ color: (theme) => theme.palette.common.black }}
                      >
                        Sign in
                      </HeadingFormTypeStyled>
                    </FlexContainerFormTypeSectionStyled>
                  </div>
                  <FlexContainerInputStyled>
                    <InputFieldNLabelContainerStyled>
                      <LabelTextStyled variant="infoText">
                        Email address or username
                      </LabelTextStyled>
                      <TextFieldStyled
                        variant={"standard"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </InputFieldNLabelContainerStyled>

                    <InputFieldNLabelContainerStyled>
                      <LabelTextStyled variant="infoText">
                        Password
                      </LabelTextStyled>
                      <TextFieldStyled
                        variant={"standard"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </InputFieldNLabelContainerStyled>
                  </FlexContainerInputStyled>
                  <ForgetPasswordTextStyled variant="p"
                  onClick={()=>navigate('/forgot-password')}
                  >
                    Forgot password?
                  </ForgetPasswordTextStyled>
                  <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <ButtonStyled
                    onClick={()=>{
                      localStorage.setItem('logged',true)
                      navigate('/home')
                    
                    }
                  }
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
                      Login
                    </ButtonStyled>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      justifyContent: "center",
                    }}
                  >
                    <DividerHorizontalStyled />
                    <div style={{ width: "fit-content" }}>
                      <HeadingFormTypeStyled
                        variant="h6"
                        sx={{
                          color: (theme) => theme.palette.common.black,
                          width: "100%",
                          whiteSpace: "nowrap",
                          fontWeight: 600,
                        }}
                        align="center"
                      >
                        Or Sign in
                      </HeadingFormTypeStyled>
                    </div>
                    <DividerHorizontalStyled />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "40px",
                    }}
                  >
                    <ButtonStyled
                      variant="contained"
                      color="common"
                      sx={{
                        backgroundColor: (theme) => theme.palette.common.white,
                        color: (theme) => theme.palette.common.black,
                        border: "1px solid #C9C9C9",
                        borderRadius: "10px",
                        padding: {
                          xs: "10px 25px",
                          sm: "12px 44px",
                          md: "14px 24px",
                          lg: "14px 44px",
                          xl: "14px 44px",
                        },
                      }}
                      startIcon={
                        <img
                          src="/Assets/sign-up-login-select/icon-google.png"
                          alt="google icon"
                          width={"30px"}
                          height="30px"
                        />
                      }
                    >
                      Google
                    </ButtonStyled>


                    <ButtonStyled
                      variant="contained"
                      color="common"
                      sx={{
                        backgroundColor: (theme) => theme.palette.common.white,
                        color: (theme) => theme.palette.common.black,
                        border: "1px solid #C9C9C9",
                        borderRadius: "10px",
                        padding: {
                          xs: "10px 25px",
                          sm: "12px 44px",
                          md: "14px 24px",
                          lg: "14px 44px",
                          xl: "14px 44px",
                        },
                      }}
                      startIcon={
                        <AppleIcon
                        style={{height:30,width:30}}
                        />
                      }
                    >
                      Apple
                    </ButtonStyled>

                  </div>
                </FormContainerStyled>
              </Grid>
            </Grid>
          
          
          
          </FormSectionContainerStyled>
        </ContentContainer>
      </SectionWrapperStyled>
    </>
  );
};
export default Login;
