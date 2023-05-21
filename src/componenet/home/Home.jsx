import React, { useEffect } from 'react';
import Banner from '../banner/Banner';
import BannerFirst from '../banner/BannerFirst';
import ReactTab from './ReactTab';
import MegaOffer from './MegaOffer';
import { PhotoAlbum } from 'react-photo-album';


const Home = () => {

  

    return (
        <div>
            <BannerFirst/>
        
            <MegaOffer/>
            <ReactTab/>
            <Banner/>
          
      
        </div>
    );
};

export default Home;