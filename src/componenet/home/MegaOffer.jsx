import React from 'react';

const MegaOffer = () => {
    return (
        <div className='grid justify-items-center'>
               <h1 className="text-5xl font-bold text-center my-5">Mega Offer for <span className=' text-yellow-300'>Eid</span>!</h1>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-10">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":44}}></span>
    </span>
    sec
  </div>
</div>

<div className='flex'>

<div>
<img className='w-80 mx-10 my-16 rounded-xl' src="../../../public/pexels-rdne-stock-project-7249348.jpg" alt="" />
</div>
 <div>
 <img className='w-80 mx-10 my-16 rounded-xl' src="../../../public/pexels-tatiana-syrikova-3975655.jpg" alt="" />
 </div>
 <div>
 <img className='w-80 mx-10 my-16 rounded-xl' src="../../../public/pexels-eren-li-7169634.jpg" alt="" />
 </div>





</div>
            
        </div>
    );
};

export default MegaOffer;