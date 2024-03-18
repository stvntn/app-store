import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

export const FivetSection: React.FC = () => { 
    return (
        <div style={{marginTop:'100px'}}>
            <div style={{textAlign:'center', padding:'0 320px'}}>
                <Typography sx={{fontSize:'46px', fontWeight:'400', fontFamily:'Volkhov'}}>
                    Follow Us On Instagram
                </Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#8A8A8A', marginTop:'20px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                </Typography>                
            </div>
            <div style={{display:'flex', alignItems:'center', marginTop:'50px', justifyContent:'center'}}>
                <Image src="/assets/section5-firstPage/1.jpg" alt="1" width={320} height={308} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/2.jpg" alt="2" width={256} height={380} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/3.jpg" alt="3" width={256} height={308} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/4.jpg" alt="4" width={256} height={380} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/5.jpg" alt="5" width={256} height={308} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/6.jpg" alt="6" width={256} height={380} style={{width:'14%', height:'100%'}}/>
                <Image src="/assets/section5-firstPage/7.jpg" alt="7" width={320} height={308} style={{width:'14%', height:'100%'}}/>
            </div>
        </div>
    )
}