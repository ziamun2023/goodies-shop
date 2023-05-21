import React from 'react';
import img1 from '../../../public/pexels-adhitya-rizky-5652249.jpg'
import img2 from '../../../public/pexels-el-gringo-photo-12361139.jpg'
import img3 from '../../../public/pexels-eva-bronzini-5501994.jpg'
import img4 from '../../../public/pexels-igor-photic-3801089.jpg'
import img5 from '../../../public/pexels-karen-laårk-boshoff-7489746.jpg'
import img6 from '../../../public/pexels-nikita-nikitin-15057238.jpg'

const BannerFirst = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="h-96 carousel carousel-vertical  w-full">
  <div className="carousel-item h-full">
    <img className='h-96' src={img1} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img2} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img3} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img4} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img5} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img6} />
  </div> 
  <div className="carousel-item h-full">
  <img className='h-96' src={img1} />
  </div>
</div>
    <div>
      <h1 className="text-5xl font-bold  text-start">Welcome to <span className='text-yellow-300'>Toy Land</span></h1>
      <p className="py-6 text-start">Welcome to our amazing car toy website! Here, you will find the most fantastic and exciting selection of cars, trucks, and other vehicles your child will love. All our products are carefully handpicked to ensure the best quality and durability, making them perfect for endless hours of fun. Whether your child loves racing, adventure, or imaginative play, we have everything they need to explore their passion. Come and visit us now to discover our fantastic range of car toys!</p>
     <div className='flex justify-items-start'> <button className="btn btn-primary ">Get Started</button></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BannerFirst;