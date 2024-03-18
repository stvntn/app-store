import React, { useState } from 'react';
import Image from 'next/image';
import ImageGallery from './ImageGallery';
import { Button, Chip, Divider, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import LinearProgress from '@mui/material/LinearProgress';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AllInboxIcon from '@mui/icons-material/AllInbox';

const imagenes = [
    {
        src: '/assets/section1-threePage/1.jpg', alt:'1'
    },
    {
        src: '/assets/section1-threePage/2.jpg', alt:'2'
    },
    {
        src: '/assets/section1-threePage/3.jpg', alt:'3'
    },
    {
        src: '/assets/section1-threePage/4.jpg', alt:'4'
    },
    {
        src: '/assets/section1-threePage/5.jpg', alt:'5'
    },
    {
        src: '/assets/section1-threePage/6.jpg', alt:'6'
    },
    {
        src: '/assets/section1-threePage/7.jpg', alt:'7'
    }
]

const labels: { [index: string]: string } = {
    1: '(1)',    
    2: '(2)',
    3: '(3)',
    4: '(4)',
    5: '(5)',
  };

const size = [
    { size:'M' },
    { size:'L' },
    { size:'XL' },
    { size:'XXL' }
];

const color = [
    {
        name:'Blue',
        color:'#8DB4D2'
    },
    {
        name:'Black',
        color:'#000000'
    },
    {
        name:'Pink',
        color:'#FFD1DC'
    },
]

export const FirstSection: React.FC = () => {
    const value = 3;
    const [progress, setProgress] = React.useState(10);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    
    const handleSizeSelection = (size: string) => {
        setSelectedSize(size);
    };
    const handleColorSelection = (color: string) => {
        setSelectedColor(color);
    };

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    
    return (
        <div style={{display:'flex', padding: '50px 100px 100px 100px'}}>
            <ImageGallery images={imagenes} />
            <div>
                <Typography sx={{fontSize:'14px', fontWeight:'400', fontFamily:'Volkhov', color:'#666666'}}>
                    FASCO
                </Typography>
                <Typography sx={{fontSize:'30px', fontWeight:'400', fontFamily:'Volkhov'}}>
                    Denim Jacket
                </Typography>
                <Box
                    sx={{
                        width: 200,
                        display: 'flex',
                        alignItems: 'center',
                        mb:"10px"
                    }}
                    >
                    <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} />}
                    />
                    <Box sx={{ ml: 1 }}>{labels[value]}</Box>
                </Box>
                <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                    <Typography sx={{fontSize:'24px', fontWeight:'400', fontFamily:'Volkhov'}}>
                        $39.00
                    </Typography>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost', color:'#666666', textDecoration: 'line-through', mx:'10px'}}>
                        $59.00
                    </Typography>
                    <Chip label="SAVE 33%"  sx={{backgroundColor:'#DA3F3F', color:'white !important'}}/>
                </div>
                <div style={{display:'flex', alignItems:'center', marginBottom:'20px'}}>
                    <Image src='/assets/section1-threePage/Vector.svg' alt='Vector' width={20} height={12.7}/>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#8A8A8A', ml:'10px'}}>
                        24 people are viewing this right now
                    </Typography>
                </div>
                <div 
                    style={{borderRadius:'4px', border:'1px solid', backgroundColor:'#FDEFEE', borderColor:'#F8CCCC', width:'500px', height:'54px', boxShadow:'0', display:'flex', justifyContent:'space-between', padding:'0 20px', alignItems:'center', marginBottom:'20px'}}>
                    <Typography sx={{fontSize:'18px', fontWeight:'400', fontFamily:'Volkhov', color:'#FF706B'}}>
                        Hurry up! Sale ends in:
                    </Typography>
                    <Typography sx={{fontSize:'20px', fontWeight:'600', fontFamily:'Jost', color:'#FF706B'}}>
                        00  :   05  :   59  :   47
                    </Typography>
                </div>
                <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost', color:'#666666', mb:'10px'}}>
                    Only 9 item(s) left in stock!
                </Typography>
                <Box sx={{ width: '100%', mb:'20px' }}>
                    <LinearProgress variant="determinate" value={progress} sx={{backgroundColor:'#DEDEDE', "& .MuiLinearProgress-bar":{backgroundColor:'#EF2D2D'},}}/>
                </Box>
                <div style={{marginBottom:'20px'}}>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Volkhov', mb:'10px'}}>
                        Size: {selectedSize}
                    </Typography>
                    <div style={{display:'flex'}}>
                        {size.map((item, index) => (
                            <Button 
                                key={index} 
                                variant='contained' 
                                disableElevation 
                                style={{
                                    marginRight: '10px',
                                    backgroundColor: selectedSize === item.size ? 'black' : 'white',
                                    color: selectedSize === item.size ? 'white' : 'black',
                                    border: '1px solid',
                                    borderColor: '#EEEEEE',
                                    height:'50px',
                                }}
                                onClick={() => handleSizeSelection(item.size)}
                                >
                                <Typography sx={{fontSize:'15px', fontWeight:'400'}}>
                                    {item.size}
                                </Typography>
                            </Button>
                        ))}
                    </div>
                </div>
                <div style={{marginBottom:'20px'}}>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Volkhov', mb:'10px'}}>
                        Color: {selectedColor}
                    </Typography>
                    <div style={{display:'flex'}}>
                        {color.map((item, index) => (
                            <Button 
                                key={index} 
                                variant='contained' 
                                disableElevation 
                                style={{
                                    marginRight: '10px',
                                    backgroundColor: item.color, 
                                    borderRadius:'50%',
                                    width:'70px',
                                    height:'60px',
                                    boxShadow: selectedColor === item.name ? '0 0 0 5px white, 0 0 0 6px black' : 'none'
                                }}
                                onClick={() => handleColorSelection(item.name)}
                            >
                                
                            </Button>
                        ))}
                    </div>
                </div>
                <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Volkhov', mb:'10px'}}>
                    Quantity
                </Typography>
                <Paper elevation={0} sx={{display:"flex", alignItems:"center", width:'120px', height:'46px', justifyContent:'space-around', border:'1px solid', borderColor:'#EEEEEE', mb:'10px'}}>
                    <Button variant="text" onClick={handleDecrement} style={{color:'black'}}>-</Button>                    
                        <Typography>
                            {quantity}
                        </Typography>                    
                    <Button variant="text" onClick={handleIncrement} style={{color:'black'}}>+</Button>
                </Paper>
                <div>
                    <Button variant='text' startIcon={<SyncAltIcon style={{ transform: 'rotate(90deg)'}} />} style={{color:'black', textTransform:'none'}}>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost'}}>
                            Compare
                        </Typography>
                    </Button>
                    <Button variant='text' startIcon={<HelpOutlineIcon />} style={{color:'black', textTransform:'none'}}>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost'}}>
                            Ask a question
                        </Typography>
                    </Button>
                    <Button variant='text' startIcon={<ShareIcon />} style={{color:'black', textTransform:'none'}}>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost'}}>
                            Share
                        </Typography>
                    </Button>
                </div>
                <Divider sx={{mb:'20px'}}/>
                <div style={{display:'flex', marginBottom:'10px'}}>
                    <LocalShippingIcon />
                    <Typography sx={{fontSize:'16px', fontWeight:'700', fontFamily:'Volkhov', mx:'5px'}}>
                        Estimated Delivery:
                    </Typography>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Jost'}}>
                        Jul 30 - Aug 03
                    </Typography>
                </div>
                <div style={{display:'flex'}}>
                    <AllInboxIcon />
                    <Typography sx={{fontSize:'16px', fontWeight:'700', fontFamily:'Volkhov', mx:'5px'}}>
                        Free Shipping & Returns: 
                    </Typography>
                    <Typography sx={{fontSize:'16px', fontWeight:'400', fontFamily:'Volkhov'}}>
                        On all orders over $75
                    </Typography>
                </div>
            </div>
        </div>
    )
}