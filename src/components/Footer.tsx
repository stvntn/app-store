import React, { Fragment } from 'react';
import Image from 'next/image';
import { Button, Divider, Typography } from '@mui/material';

export const Footer: React.FC = () => { 

    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', padding:'50px 60px', alignItems:'center'}}>
                <Image src="/assets/footer/1.png" alt="1" width={355} height={747}/>
                <div style={{textAlign:'center'}}>
                    <Typography sx={{fontSize:'46px', fontWeight:'400', fontFamily:'Volkhov', lineHeight:'50px'}}>
                        Subscribe To Our Newsletter
                    </Typography>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#8A8A8A', mt:'20px', mb:'30px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                        ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                    </Typography>
                    <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#8A8A8A', display:'flex', mb:'20px'}}>
                        michael@ymail.com
                    </Typography>
                    <Button style={{backgroundColor:'black', color:'white', borderRadius:'10px', width:'207px', height:'56px', textTransform:'none'}}>
                        Subscribe Now
                    </Button>
                </div>
                <Image src="/assets/footer/2.png" alt="2" width={337} height={747}/>
            </div>
            <Divider />
            <div style={{display:'flex', padding:'50px 70px'}}>
                <div style={{flexGrow:'1'}}>
                    <Image src="/assets/footer/FASCO.png" alt="FASCO" width={110} height={28}/>
                </div>
                <div>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        Support Center
                    </Button>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        Invoicing
                    </Button>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        Contract
                    </Button>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        Careers
                    </Button>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        Blog
                    </Button>
                    <Button variant='text' sx={{color:'#484848', fontSize:'16px'}}>
                        FAQ,s
                    </Button>
                </div>
            </div>
            <Typography sx={{fontSize:'12px', fontWeight:'400', color:'#8A8A8A', textAlign:'center'}}>
                Copyright © 2022 Xpro . All Rights Reseved.
            </Typography>            
        </div>
    )
}