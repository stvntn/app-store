import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import Image from 'next/image';

export const Navbar: React.FC = () => { 
    return (
        <AppBar position='static' elevation={0} sx={{color:'black', backgroundColor:'transparent', padding:'0 100px'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Image src='/assets/navbar/logo.svg' alt='logo' width={171} height={52}/>
                </Box>                
                <Button variant='text' style={{textTransform:'none', fontSize:'16px', marginRight: '10px', color:'#484848' }}>
                    Home
                </Button>
                <Button style={{textTransform:'none', fontSize:'16px', marginRight: '10px', color:'#484848' }}>
                    Deals
                </Button>
                <Button style={{textTransform:'none', fontSize:'16px', marginRight: '10px', color:'#484848' }}>
                    New Arrivals
                </Button>
                <Button style={{textTransform:'none', fontSize:'16px', marginRight: '10px', color:'#484848' }}>
                    Packages
                </Button>
                <Button style={{textTransform:'none', fontSize:'16px', marginRight: '10px', color:'#484848' }}>
                    Sign in
                </Button>
                <Button variant='contained' style={{textTransform:'none', backgroundColor:'black', width:'152px', height:'46px'}}>
                    Sign Up
                </Button>                                    
            </Toolbar>
        </AppBar>      
    )
}