import React from "react";

import { MainButton } from "./styled";

const Button = ({ children, size, align, height, ...props }) => {
  return (
    <MainButton size={size} align={align} height={height} {...props}>
      {children}
    </MainButton>
  );
};

export default Button;
