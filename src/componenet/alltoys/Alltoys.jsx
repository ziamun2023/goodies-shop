import React, { useEffect, useState } from 'react';
import AllToyRow from './AllToyRow';


const Alltoys = () => {
    const [alltoy,setAlltoy]=useState([])
    console.log(alltoy)
    console.log(alltoy)
    useEffect(()=>{
        fetch('https://cartoy-server.vercel.app/limit')
        .then(res=>res.json())
        .then(data=>setAlltoy(data))
    },[])
    return (
        <div>
      
             
         <input type="text" name='search' /> <button>search</button>
            {
                alltoy.map(item=><AllToyRow key={item._id}  item={item}></AllToyRow>)
            }
        </div>
    );
};

export default Alltoys;