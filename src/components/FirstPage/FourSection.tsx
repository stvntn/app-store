import React from 'react';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';

export const FourSection: React.FC = () => {

    return (
        <div>
            <div style={{position:'relative', display:'flex'}}>
                <Image src="/assets/section4-firstPage/1.png" width={500} height={500} alt="Descripción de la imagen 1" style={{width:'50%'}}/>
                <Image src="/assets/section4-firstPage/2.png" width={500} height={500} alt="Descripción de la imagen 2" style={{position:'absolute', left:'-1%'}}/>
                <div style={{position:'relative', width:'70%'}}>
                    <Image src="/assets/section4-firstPage/3.png" width={500} height={500} alt="Descripción de la imagen 3" style={{width:'100%', zIndex:'0', position:'absolute'}}/>
                    <div style={{zIndex:'1', width:'100%', position:'relative', paddingLeft: '150px', paddingTop: '40px'}}>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#767676'}}>
                            Women Collection
                        </Typography>
                        <Typography sx={{fontSize:'46px', fontWeight:'400', color:'#484848', fontFamily:'Volkhov'}}>
                            Peaky Blinders
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'black'}}>
                            DESCRIPTION
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#767676'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                            duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Scelerisque duis.
                        </Typography>
                        <div>
                            <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#767676'}}>
                                Size:
                            </Typography>
                        </div>
                        <Typography sx={{fontSize:'24px', fontWeight:'500', color:'black'}}>
                            $100.00
                        </Typography>
                        <Button style={{width:'207px', height:'56px', backgroundColor:'black', color:'white', borderRadius:'10px'}}>
                            Buy Now
                        </Button>
                    </div>
            </div>
            </div>
            
            <div style={{display:'flex', justifyContent:'space-around', marginTop:'50px'}}>
                <div style={{display:'flex'}}>
                    <Image src="/assets/section4-firstPage/1.svg" width={51} height={50} alt='1' />
                    <div style={{marginLeft:'10px'}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#484848'}}>
                            High Quality
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#484848'}}>
                            crafted from top materials
                        </Typography>
                    </div>
                </div>
                
                <div style={{display:'flex'}}>
                    <Image src="/assets/section4-firstPage/2.svg" width={38} height={50} alt='1' />
                    <div style={{marginLeft:'10px'}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#484848'}}>
                            Warrany Protection
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#484848'}}>
                            Over 2 years
                        </Typography>
                    </div>
                </div>
                
                <div style={{display:'flex'}}>
                    <Image src="/assets/section4-firstPage/3.svg" width={46} height={50} alt='1' />
                    <div style={{marginLeft:'10px'}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#484848'}}>
                            Free Shipping
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#484848'}}>
                            Order over 150 $
                        </Typography>
                    </div>
                </div>

                <div style={{display:'flex'}}>
                    <Image src="/assets/section4-firstPage/4.svg" width={50} height={50} alt='1' />
                    <div style={{marginLeft:'10px'}}>
                        <Typography sx={{fontSize:'20px', fontWeight:'500', color:'#484848'}}>
                            24 / 7 Support
                        </Typography>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#484848'}}>
                            Dedicated support
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}