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

const Register = () => {
  const navigate = useNavigate();
  const submit = () => {
    localStorage.setItem("email", 22);
  };

  return (
    <>
      <SectionWrapperStyled img_url="/Assets/sign-up-login-select/sign-up-hero-image.png">
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
                      <HeadingFormTypeStyled
                        variant="h6"
                        sx={{ color: (theme) => theme.palette.common.black }}
                      >
                        Sign up
                      </HeadingFormTypeStyled>
                      <DividerStyled />
                      <HeadingFormTypeStyled variant="h6" onClick={()=>navigate('/login')}>
                        Sign in
                      </HeadingFormTypeStyled>
                    </FlexContainerFormTypeSectionStyled>
                  </div>

                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={{ xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }}
                    marginBottom="20px"
                    marginTop={"60px !important"}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                      <InputFieldNLabelContainerStyled>
                        <LabelTextStyled variant="infoText">
                          First Name
                        </LabelTextStyled>
                        <TextFieldStyled
                          variant={"standard"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </InputFieldNLabelContainerStyled>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                      <InputFieldNLabelContainerStyled>
                        <LabelTextStyled variant="infoText">
                          Last Name
                        </LabelTextStyled>
                        <TextFieldStyled
                          variant={"standard"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </InputFieldNLabelContainerStyled>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <InputFieldNLabelContainerStyled>
                        <LabelTextStyled variant="infoText">
                          Email
                        </LabelTextStyled>
                        <TextFieldStyled
                          variant={"standard"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </InputFieldNLabelContainerStyled>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <InputFieldNLabelContainerStyled>
                        <LabelTextStyled variant="infoText">
                          Mobile Phone
                        </LabelTextStyled>
                        <TextFieldStyled
                          variant={"standard"}
                          InputProps={{
                            disableUnderline: true,
                          }}
                        />
                      </InputFieldNLabelContainerStyled>
                    </Grid>
                  </Grid>

                  <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                    <ButtonStyled
                    onClick={()=>navigate('/otp-verification')}
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
                      Create New Account
                    </ButtonStyled>
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
export default Register;
