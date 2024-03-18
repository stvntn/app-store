import React from 'react';
import Image from 'next/image';
import { Button, IconButton, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NorthIcon from '@mui/icons-material/North';

export const FirstSection: React.FC = () => { 

    const router = useRouter()

    return (
        <div style={{padding:'40px 50px 0px 50px'}}>
                <div style={{display:'flex', justifyContent:'center', position:'relative'}}>
                    <Image src='/assets/section1-firstPage/1.jpg' alt='1' width={305} height={606} style={{padding:'0 10px'}}/>
                    <div style={{flexDirection: 'column', display: 'flex', alignItems:'center'}}>
                        <Image src='/assets/section1-firstPage/2.jpg' alt='2' width={399} height={150}/>
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <Typography sx={{fontSize:'70px', fontWeight:'500'}}>ULTIMATE</Typography>
                            <Typography style={{fontSize:'150px', lineHeight:'125px', fontWeight:'500', color: 'white', textShadow: '1px 1px black, -1px -1px black'}}>SALE</Typography>
                            <Typography sx={{fontSize:'20px', fontWeight:'400'}}>NEW COLLECTION</Typography>
                            <Button 
                                onClick={()=>{router.push('/Shop')}} 
                                variant='contained' 
                                style={{width:'160px', height:'45px', backgroundColor:'black'}} >SHOP NOW</Button>
                        </div>
                        <Image src='/assets/section1-firstPage/4.jpg' alt='4' width={399} height={150}  style={{paddingTop:'10px'}}/>
                    </div>                    
                    <Image src='/assets/section1-firstPage/3.jpg' alt='3' width={305} height={606} style={{padding:'0 10px'}}/>
                    <div style={{position:'absolute', top:'90%', right:'-2%'}}>
                        <IconButton style={{color:'white', backgroundColor:'black', borderRadius:'50%'}}>
                            <ShoppingCartIcon />
                        </IconButton>
                        <IconButton style={{color:'black', border:'1px solid #000', marginLeft:'10px'}}>
                            <NorthIcon />
                        </IconButton>
                    </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', flexGrow: '1', justifyContent: 'space-between', alignItems: 'center', padding:'40px 60px'}}>
                    <Image src='/assets/section1-firstPage/logo.svg' alt='logo' width={156} height={33} style={{marginRight:'20px'}} />
                    <Image src='/assets/section1-firstPage/logo1.svg' alt='logo' width={156} height={25} style={{marginRight:'20px'}} />
                    <Image src='/assets/section1-firstPage/logo2.svg' alt='logo' width={156} height={32} style={{marginRight:'20px'}} />
                    <Image src='/assets/section1-firstPage/logo3.svg' alt='logo' width={156} height={33} style={{marginRight:'20px'}} />
                    <Image src='/assets/section1-firstPage/logo4.svg' alt='logo' width={156} height={27} style={{marginRight:'20px'}} />
                </div>  
        </div>
    )
}