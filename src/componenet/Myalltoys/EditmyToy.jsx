import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'


const EditmyToy = () => {
    const navigate=useNavigate()
    const [alldata,setAlldata]=useState([])
    // console.log(alldata)
        useEffect(()=>{
            fetch('https://cartoy-server.vercel.app/allToys')
            .then(res=>res.json())
            .then(data=>setAlldata(data))
        },[])
    
    
    
    
    
        const {id}=useParams()
        // console.log(id)
        
        const findOneData=alldata.find(item=>item._id===id)
        // console.log(findOneData)
    // console.log(id)

const handleUpdate=(event)=>{
    event.preventDefault()
        const form=event.target
        const price=form.price.value
        const quantity=form.quantity.value
        const description=form.description.value
        const chaged={price,quantity,description}

    






    fetch(`https://cartoy-server.vercel.app/updateToys/${id}`,{
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body : JSON.stringify(chaged)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            Swal.fire({
              title: 'success!',
              text: 'Successfully Updated',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            navigate('/mytoys')
          
           }
        
    })
}



    

    return (
        <div>
        <h1 className="text-5xl font-bold text-center">Add New Toy!</h1>
        <form  onSubmit={handleUpdate} action="">
       <div className='grid lg:grid-cols-3 gap-6'>


    




<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Product Price</span>

</label>
<input type="text" placeholder="Type here" name='price' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Product Quantity</span>

</label>
<input type="text" placeholder="Type here" name='quantity' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Description</span>

</label>
<input type="text" placeholder="Type here" name='description' className="input input-bordered w-full max-w-xs" />

</div>




       </div>
       <input type="submit" className='btn' value="submit" />
        </form>
        
    </div>
    );
};

export default EditmyToy;