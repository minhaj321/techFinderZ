import * as React from "react";
import { Button, Grid, styled, Typography, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import category from "../../Asset/avatarimage.svg";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LocationIcon from "@material-ui/icons/LocationOnOutlined";

import "../../styles/aboutus.css";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const StatusIndicator = styled("div")(({ theme, ...props }) => ({
  position: "absolute",
  top: "20px",
  left: "0px",
  padding: "15px 30px",
  backgroundColor: props.active
    ? theme.palette.success.main
    : theme.palette.error.main,
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "12px 24px",
  },
}));

const IndicatorText = styled("p")(({ theme, ...props }) => ({
  margin: 0,
  fontSize: "16px",
  lineHeight: "12px",
  fontFamily: "Raleway",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: "0.57px",
  color: props.active ? theme.palette.common.black : theme.palette.common.white,
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const MuiCardStyled = styled(Card)(({ theme, ...props }) => ({
  height: "fit-content !important",
  // maxWidth : "500px",
  borderRadius: "0px",
  backgroundColor: "white",
  boxShadow: "none",
  transition: "all 0.2s ease-in",
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "8px 16px 32px rgba(0 , 0 , 0 , 0.1)",
  },
}));

const MechanicNameStyled = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,
  textAlign: "center",
  textTransform: "capitalize",
  marginTop: "32px",
  fontFamily: "Poppins",
}));
const RatingText = styled(Typography)(({ theme, ...props }) => ({
  color: theme.palette.common.black,
  fontSize: "18px",
  textTransform: "capitalize",
  // marginTop: "32px",
  fontFamily: "Poppins",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const DividerStyled = styled("div")(({ theme, ...props }) => ({
  maxWidth: "284px",
  width: "284px",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  height: "0px",
  borderTop: "2px solid #EEEEEE",
  // opacity: 1,
  margin: "20px auto",
}));

const IconAndTextFlexContainer = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const FlexContainer = styled("div")(({ theme, ...props }) => ({
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  marginTop: "48px",
  marginBottom: "48px",
}));

const VerticalSeparator = styled("div")(({ theme, ...props }) => ({
  width: "0px",
  height: "40px",
  /* UI Properties */
  borderLeft: "1px solid #707070",
}));

const MechanicCard = ({ active,width }) => {
  const navigate = useNavigate();
  return (
    <div
    onClick={()=>navigate('/favourite')}
      style={{
        position: "relative",
        backgroundColor: "white",
      }}
      className={width ? 'cardDynamicWidth' : ''}
    >
      <MuiCardStyled>
 
        <StatusIndicator active={active}>
          <IndicatorText active={active}>
            {active ? "online" : "Offline"}
          </IndicatorText>
        </StatusIndicator>
        <CardContent sx={{ padding: "0px" }}>
          <Grid container>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              display="flex"
              justifyContent="center"
              // marginTop={"60px"}
            >
              <Avatar
                // className="avatar"s
                alt="Remy Sharp"
                src={category}
                sx={{ width: 155, height: 155, marginTop: "60px" }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <MechanicNameStyled variant="h2">Colin Munro</MechanicNameStyled>
              {/* <Divider style={{ width: "220px" }} /> */}
              <DividerStyled />
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "14px",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <RatingText>Rating</RatingText>

                <Rating
                  name="half-rating-read"
                  defaultValue={5}
                  precision={5}
                  readOnly
                />
              </Grid>
            </Grid>
          </Grid>

          <FlexContainer>
            <IconAndTextFlexContainer>
              <AccessTimeIcon
                style={{
                  fontSize: "36px",
                  color: "#000",
                }}
              />
              <RatingText>0.5 Min</RatingText>
            </IconAndTextFlexContainer>

            <VerticalSeparator />

            <IconAndTextFlexContainer>
              <LocationIcon
                style={{
                  fontSize: "36px",
                  color: "#000",
                }}
              />
              <RatingText>0.5 Min</RatingText>
            </IconAndTextFlexContainer>
          </FlexContainer>
        </CardContent>
      </MuiCardStyled>
    </div>
  );
};
export default MechanicCard;
