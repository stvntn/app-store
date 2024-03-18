import { NavbarShop } from '@/components/NavbarShop';
import { FirstSection } from '@/components/SecondPage/FirstSection';
import { FourSection } from '@/components/FirstPage/FourSection';
import { FivetSection } from '@/components/FirstPage/FiveSection';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {

    return ( 
        <main>
            <NavbarShop />
            <FirstSection />
            <FourSection />
            <FivetSection />
            <Footer />
        </main> 
    );
};

export default Home;