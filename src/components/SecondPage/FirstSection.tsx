import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, Typography, IconButton, Link, Stack, Breadcrumbs, Pagination } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    window.history.back();
}

export const FirstSection: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const priceRanges = [
        {label:"$0-$50", value:'&price_min=0&price_max=50'},
        {label:"$50-$100", value:'&price_min=50&price_max=100'},
        {label:"$100-$150", value:'&price_min=100&price_max=150'},
        {label:"$150-$200", value:'&price_min=150&price_max=200'},
        {label:"$200-$300", value:'&price_min=200&price_max=300'},
        {label:"$300-$400", value:'&price_min=300&price_max=400'}
    ];

    const categories = [
        "All products",
        "Best sellers",
        "New arrivals",
        "Accessories"
    ];

    const breadcrumbs = [
        <Link underline="hover" key="1" color="text.primary" href="/" onClick={handleClick}>
            Home
        </Link>,
        <Typography key="3" color="text.primary">
            Shop
        </Typography>,
    ];

    const getProducts = async() => {
        setLoading(true)
        await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=9${
                selectedPriceRange ? selectedPriceRange : ''
            }`)
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
        getProducts();
    }, []);
    
    useEffect(() => {
        getProducts()
    }, [selectedPriceRange]);

    return (
        <div style={{ marginBottom: '100px' }}>
            <div style={{ marginTop: '50px' }}>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <Typography sx={{ fontSize: '42px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                        Fashion
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

            <div style={{ padding: '50px 0px 50px 30px', display: 'flex' }}>

                <div style={{ width: '300px', paddingLeft: '30px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <Typography sx={{ fontSize: '36px', fontFamily: 'Volkhov', fontWeight: '400' }}>
                            Filters
                        </Typography>

                        <Typography sx={{ fontSize: '18px', fontFamily: 'Volkhov', fontWeight: '400', marginTop: '10px', marginBottom: '10px' }}>
                            Prices
                        </Typography>
                        {priceRanges.map((price, index) => (
                            <Button
                                key={index}
                                onClick={() => setSelectedPriceRange(price.value)}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    color: selectedPriceRange === price.value ? '#000' : '#8A8A8A',
                                    cursor: 'pointer'
                                }}
                            >
                                {price.label}
                            </Button>
                        ))}
                    </div>
                    <Accordion sx={{ marginTop: '20px', boxShadow: 'none', display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <AccordionSummary sx={{ padding: '0' }} expandIcon={<KeyboardArrowUpIcon />} >
                            <Typography sx={{ fontSize: '18px', fontWeight: '400', fontFamily: 'Volkhov', textTransform: 'none' }}>
                                Categories
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0' }}>
                            {categories.map((category, index) => (
                                <Button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: selectedCategory === category ? '#000' : '#8A8A8A',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {category}
                                </Button>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                </div>

                <div style={{ width: '100%', padding: '0 100px 0 80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ flexGrow: '1' }}>
                            <Button endIcon={<KeyboardArrowDownIcon />} style={{ fontSize: '16px', fontFamily: 'Volkhov', fontWeight: '400', color: 'black', textTransform: 'none', padding: '0' }}>
                                Best selling
                            </Button>
                        </div>
                        <IconButton sx={{ borderRadius: '3px', backgroundColor: '#F2F2F2', marginRight: '11px' }}>
                            <Image src='/assets/section1-secondPage/1.svg' alt='1' width={12} height={12} />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '3px', backgroundColor: '#F2F2F2', marginRight: '11px' }}>
                            <Image src='/assets/section1-secondPage/2.svg' alt='2' width={12} height={12} />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '3px', backgroundColor: '#F2F2F2', marginRight: '11px' }}>
                            <Image src='/assets/section1-secondPage/3.svg' alt='3' width={12} height={12} />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '3px', backgroundColor: '#F2F2F2', marginRight: '11px' }}>
                            <Image src='/assets/section1-secondPage/4.svg' alt='4' width={12} height={12} />
                        </IconButton>
                        <IconButton sx={{ borderRadius: '3px', backgroundColor: '#F2F2F2' }}>
                            <Image src='/assets/section1-secondPage/5.svg' alt='5' width={12} height={12} />
                        </IconButton>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', flexWrap: 'wrap' }}>
                        {!loading && products.map((product: any, index) => (
                            <Card key={index} style={{ border: "none", boxShadow: "none", width: '30%', marginBottom: '30px' }}>
                                <CardActionArea>
                                    <img src={product.images[0]} alt='1' width={336} height={244} style={{ width: '100%', height: '100%' }} />
                                    <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Volkhov' }}>
                                        {product.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '16px', fontWeight: '400', fontFamily: 'Jost' }}>
                                        ${product.price}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Stack spacing={2}>
                    <Pagination count={3} />
                </Stack>
            </div>
        </div>
    )
}
