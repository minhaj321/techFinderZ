import React from "react";
import {
  InfoCardWrapperStyled,
  IconWrapperStyled,
  SectionHeadingStyled,
  InformationTextStyled,
} from "./styled";

function InfoCard({ imgSrc, headingText, paraText }) {
  return (
    <InfoCardWrapperStyled>
      <IconWrapperStyled>
        <img width="100%" height="100%" src={imgSrc} alt="icon" />
      </IconWrapperStyled>

      <SectionHeadingStyled component="h4">{headingText}</SectionHeadingStyled>
      <InformationTextStyled variant="infoText" component="p">
        {paraText}
      </InformationTextStyled>
    </InfoCardWrapperStyled>
  );
}

export default InfoCard;
