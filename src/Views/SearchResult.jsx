import { Grid } from '@mui/material';
import React from 'react';
import MechanicCard from '../Components/Card/MechanicCard';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import {
  SectionHeadingMainStyled,
  SectionStyled as SectionNearbyStyled,
} from "./Meachanics/styled";
import ContentContainer from "../Components/Common/Container/Container";

const SearchResult = () =>{
    return(
        <>
        <Navbar/>
        <div style={{ backgroundColor: "#F9F9F9" }}>
          <ContentContainer>
            <SectionHeadingMainStyled variant="h1">SEARCH RESULT</SectionHeadingMainStyled>
    
            <SectionNearbyStyled>
              <Grid
                container
                spacing={8}
                justifyContent="center"
                //   wrap="nowrap"
              >
                {[
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                  "",
                  false,
                  true,
                ].map((item, index) => {
                  return (
                    <Grid item xs={11} sm={6} md={6} lg={4} xl={4} key={index}>
                      <MechanicCard active={item} />
                    </Grid>
                  );
                })}
              </Grid>
            </SectionNearbyStyled>
          </ContentContainer>
        </div>
        <Footer/>

        {/* <div>
            <Navbar/>
           <Grid container>
               <Grid  item  md={12} sm={12} xs={12} >
                   <h2 style={{textAlign:"center",marginTop:'20px'}}>Search Result</h2>
               </Grid>
           </Grid>
           <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',marginTop:'20px',flexWrap:'wrap'}}>
                        <MechanicCard width={true} />
                        <div className='card12'>
                        <MechanicCard width={true} />
                        </div>
                        <div className='card11'>
                        <MechanicCard width={true} />
                        </div>
                        <div style={{display:'none'}} className='card10'>
                        <MechanicCard width={true} />
                        </div>
                      
                        </div>

                    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:'20px'}}>
                    <MechanicCard width={true} />
                    <MechanicCard width={true} />
                        <div className='card11'>
                        <MechanicCard width={true} />
                        </div>
                        <div style={{display:'none'}} className='card10'>
                        <MechanicCard width={true} />
                        </div>
                        </div>

         <div style={{width:'100%',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',marginTop:'20px',marginBottom:'20px'}}>
         <MechanicCard width={true} />
         <MechanicCard width={true} />
                        <div className='card11'>
                        <MechanicCard width={true} />
                        </div>
                       
                        <div style={{display:'none'}} className='card10'>
                        <MechanicCard width={true} />
                        </div>
                        </div>

           <Footer/>
        </div> */}
        </>
    )
}
export default SearchResult