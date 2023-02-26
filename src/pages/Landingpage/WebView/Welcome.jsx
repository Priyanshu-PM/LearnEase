import React from 'react';
import BelowMain from '../../../Components/BelowMain';
import CardsContainer from '../../../Components/CardsContainer';
import CTA from '../../../Components/CTA';
import Features from '../../../Components/Features';
import Footer from '../../../Components/Footer';
import MainBody from '../../../Components/MainBody';
import Navbar from '../../../Components/Navbar';

const Welcome = () => {
  return (
    <div className='bg-gradient-to-r from-green-400 to-blue-500'>
        <Navbar/>
        <MainBody/>
        <BelowMain/>
        <Features/>
        <CardsContainer/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Welcome;