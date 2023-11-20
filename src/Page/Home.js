import React from 'react';
import Navbar from '../Components/Global/Navbar/Navbar'
import Hero from '../Components/Home/Hero/Hero';
import Promo from '../Components/Home/Promo/Promo';
import Introduction from '../Components/Home/Introduction/Introduction';
import Unique from '../Components/Home/Unique/Unique';
import Staking from '../Components/Home/Staking/Staking';
import DHSExplained from '../Components/Home/DHSExplained/DHSExplained';
import Tokenomics from '../Components/Home/Tokenomics/Tokenomics';
import Faq from '../Components/Home/Faq/Faq';
import Footer from '../Components/Global/Footer/Footer';
const Home = () => {
    return (
        <div className='home-wrapper'>
            <Navbar/>
            <Hero/>
            <Promo/>
            <Introduction/>
            <Unique/>
            <Staking/>
            <DHSExplained/>
            <Tokenomics/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;