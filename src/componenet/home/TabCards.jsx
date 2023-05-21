import React from 'react';

const TabCards = ({item}) => {
  const   {sellerName,selleremail,productName,category,price,quantity,description,pphoto,Ratings}=item

    return (
        <div>
            <div className="card w-96  bg-neutral-500 shadow-xl">
  <figure><img src={pphoto} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{productName}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{quantity}</div>
      <div className="badge badge-outline">{price}</div>
      <div className="badge badge-outline">{Ratings}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabCards;