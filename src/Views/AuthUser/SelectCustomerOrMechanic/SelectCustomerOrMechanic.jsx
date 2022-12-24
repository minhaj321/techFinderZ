import React from "react";
import { Grid } from "@mui/material";
import {
  SectionWrapperStyled,
  SelectionBoxContainerStyled,
  SelectionCardWrapperStyled,
  CardImageContainerStyled,
  CardHeadingStyled,
  DividerTextStyled,
} from "./styled";
import ContentContainer from "../../../Components/Common/Container/Container";
import './select.css';
import { useNavigate } from "react-router-dom";

const SelectCustomerOrMechanic = () => {


  const navigate = useNavigate();

  return (
    <>
      <SectionWrapperStyled>
        <div className="selectParent">
            <Grid
              container
              alignItems={"center"}
              justifyContent="center"
              rowSpacing={{ xs: 3, sm: 6, md: 6 }}
            >
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <SelectionCardWrapperStyled>
                  <CardImageContainerStyled>
                    <img
                    onClick={()=>navigate('/login')}
                    src="/Assets/sign-up-login-select/customer-icon.png"
                      alt="customer icon"
                      width="100%"
                      height="100%"
                    />
                  </CardImageContainerStyled>

                  <CardHeadingStyled variant="h2">Customer</CardHeadingStyled>
                </SelectionCardWrapperStyled>
              </Grid>

              <Grid item xs={12} sm={12} md={1} lg={1} xl={1}>
                <DividerTextStyled variant="h2">or</DividerTextStyled>
              </Grid>

              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <SelectionCardWrapperStyled>
                  <CardImageContainerStyled>
                    <img
                    onClick={()=>navigate('/login')}
                    src="/Assets/sign-up-login-select/mechanic-icon.png"
                      alt="mechanic icon"
                      width="100%"
                      height="100%"
                    />
                  </CardImageContainerStyled>

                  <CardHeadingStyled variant="h2">Mechanic</CardHeadingStyled>
                </SelectionCardWrapperStyled>
              </Grid>
            </Grid>
            </div>
      </SectionWrapperStyled>
    </>
  );
};
export default SelectCustomerOrMechanic;
