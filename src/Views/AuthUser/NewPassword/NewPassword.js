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

const ForgotPassword = () => {

  const navigate = useNavigate();

  return (
    <>
      <SectionWrapperStyled img_url="/Assets/common-images/mechanic-fixing-and-smiling.png">
        <ContentContainer>
          <FormSectionContainerStyled>
            <Grid container rowSpacing={6}>
              <Grid item xs={11} sm={10} md={5} lg={6} xl={6} className='newPassMain'>
                <SectionHeadingStyled variant="h3">
                  Welcome !
                </SectionHeadingStyled>
                <SectionParaStyled variant="h6">
                  First time, you should login or sign up
                </SectionParaStyled>
              </Grid>
              <Grid item xs={11} sm={10} md={7} lg={6} xl={6} className='newPassMain'>
                <FormContainerStyled>
                  <PasswordSectionFormHeadingStyled
                    variant="h6"
                    sx={{
                      marginBottom: {
                        xs: "64px",
                        sm: "90px",
                        md: "90px",
                        lg: "90px",
                        xl: "90px",
                      },
                    }}
                  >
                    New Password
                  </PasswordSectionFormHeadingStyled>

                  <FlexContainerInputStyled new_password={"true"}>
                    <InputFieldNLabelContainerStyled>
                      <LabelTextStyled
                        variant="infoText"
                        sx={{ fontWeight: 500 }}
                      >
                        New Password
                      </LabelTextStyled>
                      <TextFieldStyled
                        variant={"standard"}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </InputFieldNLabelContainerStyled>

                    <InputFieldNLabelContainerStyled>
                      <LabelTextStyled
                        variant="infoText"
                        sx={{ fontWeight: 500 }}
                      >
                        confirm password
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
                        sm: "50px",
                        md: "50px",
                        lg: "50px",
                        xl: "50px",
                      },
                    }}
                  >
                    <ButtonStyled
                  onClick={()=>navigate('/login')}
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
                        fontWeight: 500,
                        padding: {
                          xs: "10px 6px",
                          sm: "12px 8px",
                          md: "12px 8px",
                          lg: "12px 8px",
                          xl: "12px 8px",
                        },
                      }}
                    >
                      Save New Password
                    </ButtonStyled>
                    <br/>
                    <br/>
                    <br/>
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
