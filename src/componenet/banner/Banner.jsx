import React from 'react';
import img1 from '../../../public/pexels-adhitya-rizky-5652249.jpg'
import img2 from '../../../public/pexels-el-gringo-photo-12361139.jpg'
import img3 from '../../../public/pexels-eva-bronzini-5501994.jpg'
import img4 from '../../../public/pexels-igor-photic-3801089.jpg'
import img5 from '../../../public/pexels-karen-laårk-boshoff-7489746.jpg'
import img6 from '../../../public/pexels-nikita-nikitin-15057238.jpg'


const Banner = () => {
    return (
        <div>
                <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">
    <img className='h-96' src={img1} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img2} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img3} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img4} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img5} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img6} alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img className='h-96' src={img1} alt="Pizza" />
  </div>
</div>
        </div>
    );
};

export default Banner;