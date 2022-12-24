import React from "react";
import { ContentContainer } from "./styled";

const Container = ({ paddingLeft, paddingRight, children }) => {
  return (
    <ContentContainer paddingLeft={paddingLeft} paddingRight={paddingRight}>
      {children}
    </ContentContainer>
  );
};

export default Container;
