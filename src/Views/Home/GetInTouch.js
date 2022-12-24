import React from "react";
import { Grid, TextField, Button, styled, Typography } from "@mui/material";
import ContentContainer from "../../Components/Common/Container/Container";
import ButtonStyled from "../../Components/Common/Button/Button";



const TextFieldStyled = styled(TextField, {
  name: "TextFieldStyled",
})(({ theme, ...props }) => ({
  width: "100%",
  backgroundColor: "#EEEEEE",
  "& .MuiFormLabel-root-121.MuiFormLabel-focused-122": {
    color: "#000",
  },

  "& .MuiInputBase-root": {
    // backgroundColor: "#EEEEEE",
    color: "#707070",
    // padding: "50px 10px",
    // paddingBottom: "30px",
    // height: "100px",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "5px",
    paddingBottom: "5px",
    height: props.height && `${props.height}px`,
    paddingLeft: "20px",
    paddingRight: "10px",
    fontSize: "24px",
    fontFamily: "Poppins",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      paddingLeft: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1,
      fontSize: "14px",
      paddingLeft: "18px",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    // height: "100%",
    color: "#000000",
  },

  "& legend": { display: "none" },
  "& fieldset": { top: 0 },
}));

const FormWrapper = styled("div")(({ theme, ...props }) => ({
  padding: "50px 40px 50px 40px",
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: {
    padding: "28px 20px 28px 20px",
  },
}));

const FlexColumnContainer = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
const SectionHeading = styled(Typography)(({ theme, ...props }) => ({
  fontFamily: "Poppins",
  color: theme.palette.common.black,
  marginBottom: "22px",
  textTransform: "uppercase",
  fontWeight: 600,
}));
function GetInTouch() {
  return (
    <div className="get-in-touch">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={5} xl={3}>
            <FormWrapper>
              <SectionHeading variant="h3">Get in Touch</SectionHeading>
              <FlexColumnContainer>
                <TextFieldStyled
                  placeholder="Name"
                  variant={"standard"}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextFieldStyled
                  placeholder="Email"
                  variant={"standard"}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextFieldStyled
                  placeholder="Phone"
                  variant={"standard"}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextFieldStyled
                  placeholder="Message"
                  multiline
                  maxRows={4}
                  variant={"standard"}
                  height={218}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <ButtonStyled
                  fullWidth={true}
                  variant="contained"
                  color="common"
                  sx={{
                    backgroundColor: (theme) => theme.palette.common.black,
                    color: (theme) => theme.palette.common.white,
                    padding: {
                      xs: "16px 8px",
                      sm: "18px 8px",
                      md: "18px 8px",
                      lg: "18px 8px",
                      xl: "18px 8px",
                    },
                  }}
                >
                  Submit
                </ButtonStyled>{" "}
              </FlexColumnContainer>
            </FormWrapper>
          </Grid>
        </Grid>
    </div>
  );
}

export default GetInTouch;
