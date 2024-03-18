import { NavbarShop } from '@/components/NavbarShop';
import { FirstSection } from '@/components/ThreePage/FirstSection';
import { FourSection } from '@/components/FirstPage/FourSection';
import { SecondSection } from '@/components/FirstPage/SecondSection';
import { Footer } from '@/components/Footer';
import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {

    return ( 
        <main>
            <NavbarShop />
            <FirstSection />
            <FourSection />
            <SecondSection />
            <Footer />
        </main> 
    );
};

export default Home;