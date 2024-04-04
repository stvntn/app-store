import { NavbarShop } from '@/components/NavbarShop';
import { FirstSection } from '@/components/ThreePage/FirstSection';
import { FourSection } from '@/components/FirstPage/FourSection';
import { SecondSection } from '@/components/FirstPage/SecondSection';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import React from 'react';
import { ParsedUrlQuery } from 'querystring';
import axios from 'axios';

type HomeProps = {
    product: any;
};

export async function getServerSideProps({ params }: { params: ParsedUrlQuery }) {
    let product = null;
    await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`)
            .then(function (response) {                
                console.log('Respuesta exitosa:', response.data);
                product = response.data
            })
            .catch(function (error) {
                if (error.response) {                
                console.log('Error de respuesta:', error.response?.data);
                console.log('Código de estado:', error.response?.status);
                console.log('Encabezados:', error.response?.headers);
                } else if (error.request) {
                console.log('Error de solicitud:', error.request);
                } else {
                console.log('Error:', error.message);
            }
            })            
    return { props: { product } };
}

const Home: NextPage<HomeProps> = ({ product }) => {

    return ( 
        <main>
            <NavbarShop />
            <FirstSection product={product} />
            <FourSection />
            <SecondSection />
            <Footer />
        </main> 
    );
};

export default Home;