import { styled, Typography, TextField } from "@mui/material";

const SectionWrapperStyled = styled("section")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  margin: "0px",
  width: "100% !important",
  minHeight:'100vh',
  backgroundImage: `url(${props.img_url})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  // overflow: "hidden",
  padding: "130px 0px 116px 0px",
  // marginBottom: "100px",
}));

const FormSectionContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  maxWidth: "1180px",
  margin: "0 auto",
}));

const SectionHeadingStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  fontWeight: 600,
  color: theme.palette.common.white,
  textTransform: "capitalize",
  fontFamily: "Nunito",
  margin: "0px",
  marginTop: "30px",
  marginBottom: "18px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "18px",
    marginBottom: "16px",
  },
}));

const SectionParaStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  fontWeight: 500,
  color: theme.palette.common.white,
  margin: "0px",
  padding: "0px",
  fontFamily: "Nunito",
}));

const FormContainerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  padding: "64px 70px 20px 70px",
  backgroundColor: theme.palette.common.white,

  [theme.breakpoints.down("md")]: {
    padding: "48px 70px 60px 70px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "34px 14px 48px 14px",
  },
}));

const DividerStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  width: "0px",
  height: "24px",
  borderRight: "1px solid #000000",
}));

const HeadingFormTypeStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  fontWeight: 600,
  color: theme.palette.primary.dark,
  fontFamily: "Nunito",
}));

const FlexContainerFormTypeSectionStyled = styled("div")(
  ({ theme, ...props }) => ({
    // padding: "14px 60px",
    display: "flex",
    alignItems: "center",
    gap: "30px",

    [theme.breakpoints.down("sm")]: {
      gap: "14px",
    },
  })
);

const FlexContainerInputStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  display: "flex",
  flexDirection: "column",
  gap: props.new_password ? "54px" : "24px",
  marginTop: "60px",
  marginBottom: "12px",

  [theme.breakpoints.down("sm")]: {
    gap: props.new_password ? "34px" : "16px",
  },
}));

const InputFieldNLabelContainerStyled = styled("div")(
  ({ theme, ...props }) => ({
    // padding: "14px 60px",
    display: "flex",
    flexDirection: "column",
    gap: "18px",

    [theme.breakpoints.down("sm")]: {
      gap: "10px",
    },
  })
);

const LabelTextStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",

  fontFamily: "Nunito",
  textTransform: "uppercase",
  color: theme.palette.primary.dark,
  fontWeight: 700,
}));

const TextFieldStyled = styled(TextField, {
  name: "TextFieldStyled",
})(({ theme, ...props }) => ({
  width: "100%",
  backgroundColor: "#F9FAFF",
  borderRadius: "5px",
  border: "2px solid #D4DCFF",
  "& .MuiFormLabel-root-121.MuiFormLabel-focused-122": {
    color: "#000",
  },

  "& .MuiInputBase-root": {
    // backgroundColor: "#EEEEEE",
    color: "#000000",
    // padding: "50px 10px",
    // paddingBottom: "30px",
    // height: "100px",
    display: "flex",
    alignItems: "flex-start",
    paddingTop: "10px",
    paddingBottom: "10px",
    height: props.height && `${props.height}px`,
    paddingLeft: "20px",
    paddingRight: "10px",
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      paddingLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      lineHeight: 1,
      fontSize: "14px",
      paddingLeft: "12px",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    // height: "100%",
    color: "#000000",
  },

  "& legend": { display: "none" },
  "& fieldset": { top: 0 },
}));

const ForgetPasswordTextStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",

  fontFamily: "Nunito",
  textTransform: "capitalize",
  color: "#0000FF",
  fontWeight: 700,
  cursor: "pointer",
}));

const DividerHorizontalStyled = styled("div")(({ theme, ...props }) => ({
  // padding: "14px 60px",

  borderTop: "1px solid #707070",
  height: "0px",
  width: "100%",
}));

const PasswordSectionFormHeadingStyled = styled(Typography)(
  ({ theme, ...props }) => ({
    // padding: "14px 60px",
    fontFamily: "Nunito",
    fontWeight: 600,
    textAlign: "center",
    width: "100%",
    color: theme.palette.common.black,
    marginBottom: "40px",
  })
);

export {
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
  PasswordSectionFormHeadingStyled,
};
