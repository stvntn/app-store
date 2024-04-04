import React from 'react';
import Image from 'next/image';
import { Card, CardActionArea, CardContent, Divider, IconButton, Rating, Typography } from '@mui/material';

export const SixSection: React.FC = () => { 

    const [value, setValue] = React.useState<number | null>(5);

    return (
        <div style={{marginTop:'100px', backgroundColor:'#FAFAFA'}}>
            <div style={{textAlign:'center'}}>
                <Typography sx={{fontSize:'46px', fontWeight:'400', fontFamily:'Volkhov'}}>
                    This Is What Our Customers Say
                </Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#8A8A8A', mt:'10px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                </Typography>
            </div>

            <div style={{marginTop:'50px', display:'flex', justifyContent:'center'}}>
                <Card sx={{width:'60%'}}>
                    <CardActionArea>
                        <CardContent sx={{display:'flex', padding:'40px 30px'}}>
                            <Image src="/assets/section6-firstPage/1.png" alt="1" width={263} height={262}/>
                            <div style={{marginLeft:'40px'}}>
                                <Typography sx={{fontSize:'16px', fontWeight:'400'}}>
                                    You wont regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!
                                </Typography>
                                <Rating name="read-only" value={value} readOnly sx={{my:'20px'}} />
                                <Divider style={{width:'210px', borderColor: 'black'}} />
                                <Typography sx={{fontSize:'32px', fontWeight:'400', fontFamily:'Volkhov', mt:'10px'}}>
                                    James K.
                                </Typography>
                                <Typography  sx={{fontSize:'16px', fontWeight:'400'}}>
                                    Traveler
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>              
            </div>                   
        </div>
    )
}