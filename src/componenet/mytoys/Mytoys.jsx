import React, { useContext, useEffect, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../contextProvider/AuthProvider';
import TableRow from './TableRow';
import { AuthContext } from '../../contextProvider/AuthProvider';

const Mytoys = () => {
  // const [userstoy,setUserstoy]=usseState([])
  const {user}=useContext(AuthContext)
  const [usertoy,setUsertoy]=useState([])
  // const loader=useLoaderData()
  // console.log(loader)

  const url=`http://localhost:5000/bookings?email=${user?.email}`
  useEffect(()=>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>setUsertoy(data))
      console.log(usertoy)

  },[url])
  // console.log(userstoy)

  // useEffect(()=>{
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>setUserstoy(data))
  // },[url])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Make the API request to retrieve data by email ID
  //     const response = await fetch(`https://joycar-server.vercel.app/addtoy?email=${user?.email}`);
  //     const data = await response.json();
  
  //     setUserstoy(data);
  //   };
  
  //   fetchData();
  // }, [user.email]);



// const [alldata,setAlldata]=useState([])
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
        <th>seller info</th>
        
        <th></th>
      </tr>
    </thead>
  
    
 {
     usertoy.map(item=><TableRow key={item._id} item={item}></TableRow>)  
 }
     
    
 


    
  </table>
</div>


</div>


    
    );
};

export default Mytoys;