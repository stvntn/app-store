import type { NextPage } from 'next';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { FirstSection }  from '@/components/FirstPage/FirstSection';
import { SecondSection } from '@/components/FirstPage/SecondSection';
import { ThreeSection } from '@/components/FirstPage/ThreeSection';
import { FourSection } from '@/components/FirstPage/FourSection';
import { FivetSection } from '@/components/FirstPage/FiveSection';
import { SixSection } from '@/components/FirstPage/SixSection';
import { Footer } from '@/components/Footer';

const Home: NextPage = () => {

    return ( 
        <main>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThreeSection />
            <FourSection />
            <FivetSection />
            <SixSection />
            <Footer />
        </main> 
    );
};

export default Home;