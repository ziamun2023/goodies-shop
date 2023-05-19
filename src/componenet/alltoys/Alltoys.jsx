    import React, { useEffect, useState } from 'react';
// import TableRow from '../mytoys/TableRow';
import AlltoyTableRow from './AlltoyTableRow';
    
    const Alltoys = () => {
 const [alldata,setAlldata]=useState([])
 console.log(alldata)
        useEffect(()=>{
            fetch('http://localhost:5000/bookings')
            .then(res=>res.json())
              .then(data=>setAlldata(data))
            //   console.log(data)
        },[])
       
// const allMYtoys=useLoaderData()
// console.log(allMYtoys)
// useEffect(()=>{
//     fetch('https://joycar-server.vercel.app/addtoy')
//     .then(res=>res.json())
//     .then(data=>setAlldata(data))
// },[])
    
        return (
            <div>
             <h1 className="text-5xl font-bold text-center">My Toys</h1>
             <div className="overflow-x-auto w-full">
  <table className="table w-full">
  <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>AvailableQuantity</th>
        <th>product description</th>
        {/* <th>seller info</th> */}
        
        <th></th>
      </tr>
    </thead>
  
    
 {
     alldata.map(item=><AlltoyTableRow key={item._id} item={item}></AlltoyTableRow>)  
 }
     
    
 


    
  </table>
</div>


</div>
        );
    };
    
    export default Alltoys;