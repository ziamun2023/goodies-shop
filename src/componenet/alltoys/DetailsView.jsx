import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsView = () => {
    // const {_id,sellerName,selleremail,productName,category,price,quantity,description,Ratings}=item
    const [alldata,setAlldata]=useState([])
// console.log(alldata)
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res=>res.json())
        .then(data=>setAlldata(data))
    },[])





    const {id}=useParams()
    console.log(id)
    
    const findOneData=alldata.find(item=>item._id===id)
    // console.log(findOneData)
    return (
        <div>
               <h1 className="text-5xl font-bold text-center">Details</h1>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '>product name</span> <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.sellerName}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span> Category<span className='font-normal tracking-wide text-zinc-400'>{findOneData?.category}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span>price :  <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.price}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span>Seller Name <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.sellerName}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span>seller email <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.selleremail}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span>quantity <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.quantity}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '>description</span> <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.description}</span></p>
<p className='text-start'><span className='font-medium tracking-wide mx-5 '></span>Ratings <span className='font-normal tracking-wide text-zinc-400'>{findOneData?.Ratings}</span></p>


            
        </div>
    );
};

export default DetailsView;