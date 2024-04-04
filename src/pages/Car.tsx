import type { NextPage } from 'next';
import React from 'react';
import { Footer } from '@/components/Footer';
import { NavbarShop } from '@/components/NavbarShop';
import { FirstSection } from '@/components/FourPage/FirstSection';

const Home: NextPage = () => {

    return ( 
        <main>
            <NavbarShop />
            <FirstSection />
            <Footer />
        </main> 
    );
};

export default Home;