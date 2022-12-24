import React from "react";
import { TextField, styled, Typography } from "@mui/material";
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
    paddingTop: "16px",
    paddingBottom: "16px",
    height: props.height && `${props.height}px`,
    paddingLeft: "40px",
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
  backgroundColor: "white",
}));

const FlexColumnContainer = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "70px",
  marginTop: "42px",
  [theme.breakpoints.down("md")]: {
    gap: "40px",
    marginTop: "24px",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "24px",
    marginTop: "14px",
  },
}));
const SectionHeading = styled(Typography)(({ theme, ...props }) => ({
  fontFamily: "Poppins",
  color: theme.palette.common.black,
  textTransform: "uppercase",
  fontWeight: 600,
}));
function GetInTouch() {
  return (
    <div>
      <FormWrapper>
        <SectionHeading variant="h2">Get in Touch</SectionHeading>
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

      {/* <Grid container>
        <Grid container>
          <Grid item lg={12} md={12} sm={6} xs={6}>
            <Grid item lg={6} md={12} sm={6} xs={6}>
              <div className="get-in-touch-form">
                <Grid container>
                  <Grid item lg={12} md={12} sm={6} xs={12}>
                    <h2 style={{ paddingTop: "30px", marginLeft: "60px" }}>
                      GET IN TOUCH
                    </h2>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      style={{
                        width: "80%",
                        marginTop: "10px",
                        marginLeft: "60px",
                        backgroundColor: "#EEEEEE",
                      }}
                      // className="get-in-touch-textfield"
                    />
                    <TextField
                      id="outlined-basic"
                      //   label="Email"
                      placeholder="Email"
                      //   label=""
                      //   variant="outlined"
                      style={{
                        width: "80%",
                        marginTop: "20px",
                        marginLeft: "60px",
                        backgroundColor: "#EEEEEE",
                      }}
                      sx={{
                        "& legend": { display: "none" },
                        "& fieldset": { top: 0 },
                      }}
                      className="get-in-touch-textfield"
                      inputProps={{ sx: { padding: "20px 10px" } }}
                    />

                    <TextFieldStyled
                      placeholder="testing"
                      multiline
                      maxRows={4}
                      variant={"standard"}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Mobile Number"
                      variant="outlined"
                      style={{
                        width: "80%",
                        marginTop: "20px",
                        marginLeft: "60px",
                        backgroundColor: "#EEEEEE",
                      }}
                      className="get-in-touch-textfield"
                    />
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Message"
                      multiline
                      rows={4}
                      style={{
                        width: "80%",
                        marginTop: "20px",
                        marginLeft: "60px",
                        backgroundColor: "#EEEEEE",
                      }}
                      className="get-in-touch-textfield"
                    />
                    <Button
                      variant="contained"
                      style={{
                        marginTop: "20px",
                        width: "80%",
                        height: "50px",
                        marginBottom: "20px",
                        marginLeft: "60px",
                        backgroundColor: "black",
                      }}
                      className="btn-get-in-touch"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default GetInTouch;
