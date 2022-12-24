import { styled, Typography } from "@mui/material";

const SectionHeadingMainStyled = styled(Typography)(({ theme, ...props }) => ({
  // padding: "14px 60px",
  color: theme.palette.common.black,
  fontFamily: "Poppins",
  fontWeight: 700,
  textTransform: "uppercase",
  textAlign: "center",
  paddingTop: "60px",
}));

const SectionStyled = styled("section")(({ theme, ...props }) => ({
  // padding: "14px 60px",
  paddingBottom: "200px",
  paddingTop: "60px",
}));

export { SectionHeadingMainStyled, SectionStyled };
