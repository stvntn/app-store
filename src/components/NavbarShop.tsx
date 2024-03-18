import React from 'react';
import Image from 'next/image';
import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useRouter } from 'next/router';

export const NavbarShop: React.FC = () => { 

    const router = useRouter()

    return (
        <AppBar position='static' elevation={0} sx={{color:'black', backgroundColor:'transparent', padding:'0 100px'}}>
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Image src='/assets/navbar/logo.svg' alt='logo' width={171} height={52}/>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Button 
                        onClick={()=>{router.push('/')}}
                        variant='text'  
                        style={{fontSize:'16px', color:'black', fontWeight:'400', textTransform:'none', marginRight:'20px'}}>
                        Home
                    </Button>
                    <Button
                        onClick={()=>{router.push('/Shop')}} 
                        variant='text' 
                        style={{fontSize:'16px', color:'black', fontWeight:'400', textTransform:'none', marginRight:'20px'}}>
                        Shop
                    </Button>
                    <Button 
                        onClick={()=>{router.push('/Products')}}
                        variant='text' 
                        style={{fontSize:'16px', color:'black', fontWeight:'400', textTransform:'none', marginRight:'20px'}}>
                        Products
                    </Button>
                    <Button variant='text' endIcon={<KeyboardArrowDownIcon />} style={{fontSize:'16px', color:'black', fontWeight:'400', textTransform:'none'}}>
                        Pages
                    </Button>   
                </Box>
                <Box>
                    <IconButton sx={{mr:'5px'}}>
                        <SearchIcon />
                    </IconButton>
                    <IconButton sx={{mr:'5px'}}>
                        <PersonIcon />
                    </IconButton>
                    <IconButton sx={{mr:'5px'}}>
                        <StarOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <ShoppingBagIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}