import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Breadcrumbs, Button, Checkbox, Divider, FormControlLabel, Grid, Link, Paper, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const FirstSection: React.FC = () => {
    const [products, setProducts] = useState<any>([]);
    const [loaded, setLoaded] = useState(false);

    const handleIncrement = (index: number) => {
        const newProducts = products
        newProducts[index].quantity = newProducts[index].quantity + 1
        setProducts([...newProducts])        
    };

    const handleDecrement = (index: number) => {
        const newProducts = products
        newProducts[index].quantity = newProducts[index].quantity - 1
        setProducts([...newProducts])          
    };

    const removeProducts = (index: number) => {
        let newProducts = products;
        newProducts.splice(index, 1);
        setProducts([...newProducts]) 
    }

    const getSubTotal = () => {
        let subTotal = 0
        products.forEach((product: any) => {
            subTotal = subTotal + product.product.price * product.quantity
        });
        return subTotal
    }

    const breadcrumbs = [
        <Link underline="hover" key="1" color="text.primary" href="/">
            Home
        </Link>,
        <Typography key="3" color="text.primary">
            Your Shopping Cart
        </Typography>,
    ];

    useEffect(() => {
        if (loaded === true) {
            localStorage.setItem('infoCart', JSON.stringify(products))
        }        
    }, [products]);

    useEffect(() => {
        let infoCart: any = localStorage.getItem('infoCart');
        if (infoCart) {
            infoCart = JSON.parse(infoCart)
            setProducts(infoCart ? infoCart : []);
        }
        setLoaded(true)
    }, []);

    return (
        <div style={{padding:'0 120px'}}>
            <div style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <Typography sx={{ fontSize: '42px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Shopping Cart
                    </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Stack spacing={2}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="Shop"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </div>
            </div>
            <Grid container  style={{display:'flex', justifyContent:'space-between', marginTop:'50px', marginBottom:'20px'}}>
                <Grid item xs={5}>
                    <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Product
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Price
                    </Typography>
                </Grid>                
                <Grid item xs={2}>
                    <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Quantity
                    </Typography>
                </Grid>                
                <Grid item xs={2}>
                    <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Total
                    </Typography>
                </Grid>            
            </Grid>
            <Divider />            
                { products.map((productCart: any, index: number) => (
                    <Grid container key={index} style={{display:'flex', justifyContent:'space-between', marginTop:'20px', marginBottom:'20px'}}>
                        <Grid item xs={5}>
                            <div style={{display:'flex'}}>                    
                                <img src={productCart.product.images[0]} alt='' width={168} height={205} style={{borderRadius:'10px'}}/>                            
                                <div style={{marginLeft:'10px'}}>
                                    <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                                        {productCart.product.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '22px', fontWeight: '400', color:'#8A8A8A', my:'10px' }}>
                                        Color:
                                    </Typography>
                                    <Button 
                                        variant='text'
                                        onClick={() => {removeProducts(index)}}
                                    >
                                        <Typography sx={{ fontSize: '22px', fontWeight: '400', color:'#8A8A8A', textDecoration: 'underline' }}>
                                            Remove
                                        </Typography>
                                    </Button>
                                </div>                        
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                                ${productCart.product.price}
                            </Typography> 
                        </Grid>
                        <Grid item xs={2}>            
                            <Paper elevation={0} sx={{display:"flex", alignItems:"center", width:'120px', height:'46px', justifyContent:'space-around', border:'1px solid', borderColor:'#EEEEEE', mb:'10px'}}>
                                <Button 
                                    variant="text" 
                                    disabled={productCart.quantity === 1}
                                    onClick={()=>handleDecrement(index)} 
                                    style={{color:'black'}}>-</Button>                    
                                    <Typography>
                                        {productCart.quantity}
                                    </Typography>                    
                                <Button 
                                    variant="text" 
                                    onClick={()=>handleIncrement(index)} 
                                    style={{color:'black'}}>+</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={2}>  
                            <Typography sx={{ fontSize: '22px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                                ${productCart.product.price * productCart.quantity} 
                            </Typography>  
                        </Grid> 
                    </Grid>
                ))}            
            <Divider />
            <div style={{display:'flex', justifyContent:'end'}}>
                <div>
                    <div style={{display:'flex', alignItems:'center', marginTop:'20px', marginBottom:'10px'}}>
                        <Checkbox
                            {...label}
                            defaultChecked
                            sx={ {padding:'0', '& .MuiSvgIcon-root': { fontSize: 35 } }}
                        />
                        <Typography sx={{fontSize:'22px', fontWeight:'400', color:'#8A8A8A'}}>
                            For $10.00 please wrap the product
                        </Typography>
                    </div>            
                    <Divider sx={{width:'100%', marginBottom:'10px'}}/>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'10px'}}>
                        <Typography sx={{fontSize:'22px', fontFamily:'Volkhov', fontWeight:'400'}}>
                            Subtotal
                        </Typography>
                        <Typography sx={{fontSize:'22px', fontFamily:'Volkhov', fontWeight:'400'}}>
                            ${getSubTotal()}
                        </Typography>                    
                    </div>
                    <Button style={{backgroundColor:'black', color:'white', width:'100%', height:'66px'}}>
                        <Typography sx={{fontSize:'16px', fontWeight:'400', textTransform:'none'}}>
                            Checkout
                        </Typography>
                    </Button>
                </div>
            </div>
        </div>
    )
}
