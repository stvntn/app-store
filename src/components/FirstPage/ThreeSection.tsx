import { Button, Card, CardContent, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import { CardActionArea } from '@mui/material';
import axios from 'axios';


export const ThreeSection: React.FC = () => { 

    const skeletons = [1, 2, 3, 4, 5, 6]

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([

    ])
    
    const handleRatingChange = (index: number, newValue: number | null) => {
        const newProducts:any = [...products]
        newProducts[index].rating=newValue
        setProducts(newProducts)
    };

    const getProducts = async() => {
        setLoading(true)
        await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=6')
            .then(function (response) {
                // Manejar la respuesta exitosa
                console.log('Respuesta exitosa:', response.data);
                response.data.forEach((element:any) => {
                    element.rating=5
                    element.images[0]=element.images[0].replace('[\"','')                        
                    if (element.images[0][element.images[0].length-1] === '"') {
                        element.images[0] = element.images[0].slice(0, -2)
                    }
                });
                setProducts(response.data)
            })
            .catch(function (error) {
                if (error.response) {
                // La solicitud se realizó y el servidor respondió con un código de estado fuera del rango de 2xx
                console.log('Error de respuesta:', error.response?.data);
                console.log('Código de estado:', error.response?.status);
                console.log('Encabezados:', error.response?.headers);
                } else if (error.request) {
                // La solicitud se realizó pero no se recibió ninguna respuesta
                console.log('Error de solicitud:', error.request);
                } else {
                // Algo sucedió al configurar la solicitud que desencadenó un error
                console.log('Error:', error.message);
                }
             })
            .finally(() => {
                // Este bloque se ejecutará independientemente del resultado de la promesa
                setLoading(false); // Detener el indicador de carga
                console.log('La solicitud ha finalizado.');
             });
            
    };

    useEffect(() => {
        getProducts()
     }, []); 
    
    return (
        <div style={{padding:'50px 100px'}}>
            <div style={{textAlign:'center', padding:'0 220px'}}>
                <Typography sx={{fontSize:'46px', fontWeight:'400', fontFamily:'Volkhov'}}>
                    New Arrivals
                </Typography>
                <Typography sx={{fontSize:'16px', fontWeight:'400', color:'#8A8A8A', marginTop:'20px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                    ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin 
                </Typography>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', margin:'50px'}}>
                <Button style={{color:'#8A8A8A', backgroundColor:'#FAFAFA', width:'18%', height:'56px'}}>Mens Fashion</Button>
                <Button style={{color:'white', backgroundColor:'black', width:'18%', height:'56px'}}>Women’s Fashion</Button>
                <Button style={{color:'#8A8A8A', backgroundColor:'#FAFAFA', width:'18%', height:'56px'}}>Women Accessories</Button>
                <Button style={{color:'#8A8A8A', backgroundColor:'#FAFAFA', width:'18%', height:'56px'}}>Men Accessories</Button>
                <Button style={{color:'#8A8A8A', backgroundColor:'#FAFAFA', width:'18%', height:'56px'}}>Discount Deals</Button>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>                
                {!loading && products.map((product:any, index) => (
                    <Card key={index} sx={{width:'30%', mb:'30px'}}>
                        <CardActionArea>
                            <CardContent>
                                <img src={product.images[0]} alt='1' width={336} height={244} style={{width:'100%', height:'100%'}}/>
                                <div style={{display:'flex', marginTop:'5px'}}>
                                    <Typography sx={{fontSize:'20px', fontWeight:'500'}} style={{flexGrow:'1'}}>{product.title}</Typography>                        
                                    <Rating
                                        name="simple-controlled"
                                        value={product.rating}
                                        onChange={(event, newValue) => handleRatingChange(index, newValue)}
                                    />
                                </div>
                                <Typography sx={{fontSize:'12px', fontWeight:'500', color:'#8A8A8A'}}>{product.category.name}</Typography>
                                <Typography sx={{fontSize:'12px', fontWeight:'500', my:'20px'}}>(4.1k) Customer Reviews</Typography>
                                <div style={{display:'flex'}}>
                                    <Typography sx={{fontSize:'24px', fontWeight:'500'}} style={{flexGrow:'1'}}>${product.price}</Typography>
                                    <Typography sx={{fontSize:'12px', fontWeight:'400', color:'red'}}>Almost Sold Out</Typography>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>        
                ))}
                {loading && skeletons.map((index) => (
                    <Card key={index} sx={{width:'30%'}}>
                        <CardActionArea>
                            <CardContent>
                                <Skeleton variant="rectangular" width={'100%'} height={118}/>
                                <Skeleton />
                                <Skeleton width="60%"/>
                            </CardContent>
                        </CardActionArea>
                    </Card>        
                ))}
            </div>                                         
        </div>
    )
}