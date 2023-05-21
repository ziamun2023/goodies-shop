import React from 'react';

const TabCards = ({item}) => {
  const   {sellerName,selleremail,productName,category,price,quantity,description,Ratings}=item

    return (
        <div>
            <div className="card w-96  bg-neutral-500 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{productName}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabCards;