import React, { useEffect } from 'react';
import Banner from '../banner/Banner';
import BannerFirst from '../banner/BannerFirst';
import ReactTab from './ReactTab';
import MegaOffer from './MegaOffer';
import { PhotoAlbum } from 'react-photo-album';
import CustomerReview from '../customerreview/CustomerReview';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Home = () => {

  

    return (
        <>

 
   <div data-aos="fade-right">  <BannerFirst/></div>
   <div data-aos="zoom-in-right">  <MegaOffer/></div>
   <div data-aos="fade-left"><ReactTab/></div>
   <div data-aos="fade-up-left">         <CustomerReview/></div>
   <div data-aos="zoom-in">  <Banner/></div>
         
        
          
      
        </>
    );
};

export default Home;