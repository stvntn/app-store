import React from 'react';
import Image from 'next/image';
import { Button, Paper, Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const SecondSection: React.FC = () => { 
    return (
        <div style={{display:'flex', padding:'80px 80px 80px 80px', boxShadow:'none', backgroundColor:'#FAFAFA', justifyContent:'center', alignItems:'center'}} >
            <div style={{width:'40%'}}>
                <Typography sx={{fontSize:'40px', fontWeight:'400', fontFamily:'Volkhov'}}>
                    Deals Of The Month
                </Typography>
                <Typography sx={{fontSize:'14px', fontWeight:'400', marginTop:'30px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Scelerisque duis ultrices sollicitudin aliquam sem.
                    Scelerisque duis ultrices sollicitudin 
                </Typography>
                <Button variant='contained' style={{width:'207px', height:'56px', backgroundColor:'black', marginTop:'30px'}}>
                    Buy Now
                </Button>
                <Typography sx={{fontSize:'28px', fontWeight:'500', marginTop:'30px'}}>
                    Hurry, Before It’s Too Late!
                </Typography>
                <div style={{display:'flex', justifyContent:'space-around', marginTop:'10px', paddingRight:'100px'}}>
                    <div style={{textAlign:'center'}}>
                        <Paper sx={{width:'70px', height:'70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{fontSize:'32px', fontWeight:'400', fontFamily:'digital-7'}}>02</Typography>
                        </Paper>
                        <Typography sx={{fontFamily:'24px', fontWeight:'400', marginTop:'10px'}}>Days</Typography> 
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Paper sx={{width:'70px', height:'70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{fontSize:'32px', fontWeight:'400', fontFamily:'digital-7'}}>06</Typography>
                        </Paper>
                        <Typography sx={{fontFamily:'24px', fontWeight:'400', marginTop:'10px'}}>Hr</Typography>  
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Paper sx={{width:'70px', height:'70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{fontSize:'32px', fontWeight:'400', fontFamily:'digital-7'}}>05</Typography>
                        </Paper>
                        <Typography sx={{fontFamily:'24px', fontWeight:'400', marginTop:'10px'}}>Mins</Typography>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Paper sx={{width:'70px', height:'70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography sx={{fontSize:'32px', fontWeight:'400', fontFamily:'digital-7'}}>30</Typography>
                        </Paper>
                        <Typography sx={{fontFamily:'24px', fontWeight:'400', marginTop:'10px'}}>Sec</Typography> 
                    </div>
                </div>                           
            </div>           
            <Splide options={{ rewind: true, type:'slide', perPage: '3', width:'60%', gap:'1rem', pagination: true, arrows: true, arrowsPosition: 'top-right'}}>                
                    <SplideSlide> 
                        <Image src='/assets/section2-firstPage/1.jpg' alt='1' width={404} height={582} style={{width:'100%', height:'80%'}}/>                    
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/assets/section2-firstPage/2.jpg' alt='2' width={372} height={486} style={{width:'100%', height:'70%'}}/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/assets/section2-firstPage/3.jpg' alt='3' width={372} height={486} style={{width:'100%', height:'70%'}}/>
                    </SplideSlide>
                    <SplideSlide>
                        <Image src='/assets/section2-firstPage/4.jpg' alt='4' width={372} height={486} style={{width:'100%', height:'70%'}}/>
                    </SplideSlide>
            </Splide>           
        </div>
    )
}