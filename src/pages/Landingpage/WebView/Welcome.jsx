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
    <div className='max-w-[2000px] mx-auto px-12'>
        <Navbar/>
        <MainBody/>
        <BelowMain/>
        <Footer/> 
        {/* 
        <Features/>
        <CardsContainer/>
        <CTA/>*/}
    </div>
  )
}

export default Welcome;