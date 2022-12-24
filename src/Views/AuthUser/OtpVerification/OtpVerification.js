import { Button, Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import {
  SectionWrapperStyled,
  CardContainerOtpStyled,
  CardHeadingStyled,
  CardSubtitleStyled,
  HeadingSubtitleFlexContainerStyled,
  ButtonVerifyStyled,
} from "./styled";
import ContentContainer from "../../../Components/Common/Container/Container";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otpInput, setOtpInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (otp) => {
    console.log(otp);
    setOtpInput({ otp });
  };
  return (
    <SectionWrapperStyled>
        <CardContainerOtpStyled>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: {
                xs: "64px",
                sm: "120px",
                md: "120px",
                lg: "120px",
                xl: "120px",
              },
            }}
          >
            <HeadingSubtitleFlexContainerStyled>
              <CardHeadingStyled variant="h2">
                OTP Verification
              </CardHeadingStyled>
              <CardSubtitleStyled variant="p">
                Code send to your mobile number
              </CardSubtitleStyled>
            </HeadingSubtitleFlexContainerStyled>
          </Box>
          <OtpInput
            value={otpInput.otp}
            onChange={handleChange}
            numInputs={4}
            
            //   separator={<span>-</span>}
            placeholder={"****"}
            inputStyle={{
              border: "none",
              borderBottom: "2px solid #707070",
              width: "100%",
              fontSize: "40px",
              fontFamily: "Poppins",
              padding: "0px 0px",
            }}
            containerStyle={{ width: "100%", display: "flex", gap: "20px" }}
          />

          <Box sx={{ display: "flex", gap: "5px", marginTop: "5px" }}>
            <Typography
              variant="p"
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              29 sec{" "}
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#5400FF",
                fontFamily: "Poppins",
                fontWeight: 300,
              }}
            >
              resend code
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: {
                xs: "40px",
                sm: "100px",
                md: "100px",
                lg: "100px",
                xl: "100px",
              },
            }}
          >
            <ButtonVerifyStyled
            onClick={()=>{navigate('/home')}}
              variant="contained"
              sx={{
                fontSize: "20px",
                fontFamily: "Open Sans",
                fontWeight: 600,
              }}
              fullWidth={true}
            >
              Verify
            </ButtonVerifyStyled>
          </Box>
        </CardContainerOtpStyled>
    </SectionWrapperStyled>
  );
};
export default OtpVerification;
