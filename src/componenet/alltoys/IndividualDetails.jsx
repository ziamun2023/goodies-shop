import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthProvider';
// import { AuthContext } from '../../contextProvider/AuthProvider';
// import { useLoaderData } from 'react-router-dom';

const IndividualDetails = () => {
    // const loader=useLoaderData()

const {details}=useContext(AuthContext)
console.log(details)
//   console.log(loader)
    // const {proname,Subcategory,Price,detailDescription,AvailableQuantity,photourl,name,email}=details


// setDataa(load)
// console.log(load)
    return (
        <div>
          
{details.map(item=>{
    <p>{item.price}</p>
})}
      
              {/* <td>
<label htmlFor="my-modal"  className="btn">view details</label>


<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{proname?proname:""}</h3>
  
    <p className="py-4"> <span className=' font-medium text-white tracking-wide'>Description </span>:<span className=' mx-2'>{detailDescription}</span></p>
    <p className="py-4"><span  className='font-medium text-white tracking-wide'>Available Quantity</span> :<span className=' mx-2'>{AvailableQuantity}</span></p>
    <p className="py-4"><span className='font-medium text-white tracking-wide'>Category</span>: <span className=' mx-2'>{Subcategory}</span></p>
    <p className="py-4"><span className='font-medium text-white tracking-wide'>Price</span>:<span className=' mx-2'>{Price}</span></p>
    <p className="py-4"><span className='font-medium text-white tracking-wide'> Seller Name</span >:<span className=' mx-2'>{name}</span></p>
    <p className="py-4"><span className='font-medium text-white tracking-wide'>Seller email</span>:<span className=' mx-2'>{email}</span></p>

    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">ok!</label>
    </div>
  </div>
</div></td>  */}
        </div>
    );
};

export default IndividualDetails;