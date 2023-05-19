    import React, { useEffect, useState } from 'react';
// import TableRow from '../mytoys/TableRow';
import AlltoyTableRow from './AlltoyTableRow';
// import { stringify } from 'postcss';
    
    const Alltoys = () => {
 const [alldata,setAlldata]=useState([])
//  const [products, setProducts] = useState([]);
//  const [searchTerm, setSearchTerm] = useState("");
 


 const [search,setSearch]=useState('')

//  console.log(alldata)
        useEffect(()=>{
            fetch('http://localhost:5000/bookings')
            .then(res=>res.json())
              .then(data=>setAlldata(data))
            //   console.log(data)
        },[])

        const searchtext=(e)=>{
            const texts=e.target.value
            // const string= stringify(texts)
            setSearch(texts)
        }

     const handleSearch=()=>{
     
            fetch(`http://localhost:5000/bookings/${search}`)
            .then(res=>res.json())
            .then(data=>setAlldata(data))
   
     }
       
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
             <div><input onChange={searchtext} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /><button onClick={handleSearch}  className='btn'>search</button></div>
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
     alldata.map((item,index)=><AlltoyTableRow key={item._id} index={index} item={item}></AlltoyTableRow>)  
 }
     
    
 


    
  </table>
</div>


</div>
        );
    };
    
    export default Alltoys;