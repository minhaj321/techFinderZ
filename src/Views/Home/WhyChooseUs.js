import React from "react";
import { Grid, styled, useMediaQuery, useTheme } from "@mui/material";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Technician from "../../Asset/image-4.png";
import ContentContainer from "../../Components/Common/Container/Container";
import { MainSectionHeadingStyled } from "./styled";
import InfoCard from "../../Components/Common/InfoCard/InfoCard";

const SectionWCUStyled = styled("section")(({ theme, ...props }) => ({
  maxHeight: "1579px",
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  padding: "150px 0",

  [theme.breakpoints.down("sm")]: {
    maxHeight: "100%",
  },
}));
const FlexContainerDesktopStyled = styled("section")(({ theme, ...props }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "50px",
  flexDirection: "row",
  maxHeight: "1080px",
}));
const FlexContainerCards = styled("section")(({ theme, ...props }) => ({
  display: "flex",
  gap: "60px",
  flexDirection: "column",
}));

const data = {
  cardsData1: [
    {
      headingText: "Integrity",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/honesty.png",
    },
    {
      headingText: "Collboration",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/support.png",
    },
    {
      headingText: "Result Orientation",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/notepad-1.png",
    },
  ],

  cardsData2: [
    {
      headingText: "Respect",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/notepad-1.png",
    },
    {
      headingText: "Innovation",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/tools.png",
    },
    {
      headingText: "Experience",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/experience.png",
    },
  ],

  cardsDataMerge: [
    {
      headingText: "Integrity",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/honesty.png",
    },
    {
      headingText: "Collboration",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/support.png",
    },
    {
      headingText: "Result Orientation",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/notepad-1.png",
    },
    {
      headingText: "Respect",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/notepad-1.png",
    },
    {
      headingText: "Innovation",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/tools.png",
    },
    {
      headingText: "Experience",
      paraText:
        "It is a long established fact that a reader will be distracted d by the readable content of a page when looking at its layout.",
      imgSrc: "/Assets/experience.png",
    },
  ],
};

function WhyChooseUs() {
  const theme = useTheme();
  const showOnlyCard = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(showOnlyCard);
  return (
    <>
      <MainSectionHeadingStyled
        variant="h1"
        style={{ textAlign: "center", marginTop: "83px", marginBottom: "74px" }}
      >
        WHY CHOOSE US
      </MainSectionHeadingStyled>

      <SectionWCUStyled style={{ backgroundColor: "#EEEEEE" }}>
        <ContentContainer>
          {showOnlyCard ? (
            <Grid
              container
              justifyContent={"center"}
              rowSpacing={4}
              columnSpacing={2}
              style={{ margin: "0px" }}
            >
              {data.cardsDataMerge.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <InfoCard
                        key={index}
                        imgSrc={item.imgSrc}
                        headingText={item.headingText}
                        paraText={item.paraText}
                      />
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <FlexContainerDesktopStyled>
              <FlexContainerCards>
                {data.cardsData1.map((item, index) => {
                  return (
                    <InfoCard
                      key={index}
                      imgSrc={item.imgSrc}
                      headingText={item.headingText}
                      paraText={item.paraText}
                    />
                  );
                })}
              </FlexContainerCards>

              <div style={{ maxWidth: "600px" }}>
                <img
                  width="100%"
                  height="100%"
                  src={Technician}
                  alt="technician"
                />
              </div>

              <FlexContainerCards>
                {data.cardsData2.map((item, index) => {
                  return (
                    <InfoCard
                      imgSrc={item.imgSrc}
                      headingText={item.headingText}
                      paraText={item.paraText}
                      key={index}
                    />
                  );
                })}
              </FlexContainerCards>
            </FlexContainerDesktopStyled>
          )}

          {/* <Grid container>
            <div className="home-section-11">
              <Grid item md={3} className="home-section-11">
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "270px",
                      height: "290px",
                      backgroundColor: "white",
                      marginLeft: "50px",
                      marginTop: "100px",
                    }}
                    className="home-section-5"
                  >
                    <AccessTimeIcon
                      style={{
                        width: "100px",
                        height: "100px",
                        marginTop: "30px",
                      }}
                    />
                    <h5>Respect</h5>
                    <p style={{ padding: "10px" }} className="home-paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                  </div>
                </Grid>

                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "270px",
                      height: "290px",
                      backgroundColor: "white",
                      marginLeft: "50px",
                      marginTop: "100px",
                    }}
                    className="home-section-6"
                  >
                    <AccessTimeIcon
                      style={{
                        width: "100px",
                        height: "100px",
                        marginTop: "30px",
                      }}
                    />
                    <h5>Respect</h5>
                    <p style={{ padding: "10px" }} className="home-paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                  </div>
                </Grid>

                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  style={{ textAlign: "center" }}
                >
                  <div
                    style={{
                      width: "270px",
                      height: "290px",
                      backgroundColor: "white",
                      marginLeft: "50px",
                      marginTop: "100px",
                    }}
                    className="home-section-7"
                  >
                    <AccessTimeIcon
                      style={{
                        width: "100px",
                        height: "100px",
                        marginTop: "30px",
                      }}
                    />
                    <h5>Respect</h5>
                    <p style={{ padding: "10px" }} className="home-paragraph">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            <Grid item md={6} className="home-section-12">
              <img
                src={Technician}
                alt="img"
                width={"70%"}
                height={"1090px"}
                style={{ marginTop: "90px", marginLeft: "105px" }}
                className="home-img"
              />
            </Grid>
            <Grid item md={3} className="home-section-13">
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "270px",
                    height: "290px",
                    backgroundColor: "white",
                    marginLeft: "10px",
                    marginTop: "100px",
                  }}
                  className="home-section-8"
                >
                  <AccessTimeIcon
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "30px",
                    }}
                  />
                  <h5>Respect</h5>
                  <p style={{ padding: "10px" }} className="home-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                </div>
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "270px",
                    height: "290px",
                    backgroundColor: "white",
                    marginLeft: "10px",
                    marginTop: "100px",
                  }}
                  className="home-section-9"
                >
                  <AccessTimeIcon
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "30px",
                    }}
                  />
                  <h5>Respect</h5>
                  <p style={{ padding: "10px" }} className="home-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                </div>
              </Grid>

              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: "270px",
                    height: "290px",
                    backgroundColor: "white",
                    marginLeft: "10px",
                    marginTop: "100px",
                  }}
                  className="home-section-10"
                >
                  <AccessTimeIcon
                    style={{
                      width: "100px",
                      height: "100px",
                      marginTop: "30px",
                    }}
                  />
                  <h5>Respect</h5>
                  <p style={{ padding: "10px" }} className="home-paragraph">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                </div>
              </Grid>
            </Grid>
          </Grid> */}
        </ContentContainer>
      </SectionWCUStyled>
    </>
  );
}

export default WhyChooseUs;
