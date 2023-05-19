import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../providers/Authprovider';

const AddToy = () => {
  const {user}=useContext(Authcontext)
  // const service=useLoaderData()
  // const {title,price}=service
  // console.log(service)

    const handlebookservice=(event)=>{
        event.preventDefault()
        const form=event.target 
        const sellerName=form.sellerName.value
        const sellerEmail=form.sellerEmail.value
        const ProductName=form.ProductName.value 
        const Category=form.Category.value
        const description=form.description.value
        const Quantity=form.Quantity.value
        const price=form.price.value
        const order={name,
        email,date,number,value,proname}
        console.log(order)
        fetch('http://localhost:5000/bookings',{
    method :'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(order)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.insertedId){
      alert('service book successfully')
  }
})
    }



    return (
        <div>
            <h1 className='text-5xl text-white text-center'>book service</h1>
           <h1 className='text-2xl font-semibold text-black bg-yellow-100 rounded-md'></h1>
           
              
        
       
          <form onSubmit={handlebookservice}  className='grid lg:grid-cols-3'>
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" name='sellerName'  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="text" name='sellerEmail'  defaultValue={user?.email}  className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="email" name='ProductName'   className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="email" name='price'   className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="email" name='Category'   className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input type="text" name='description' className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name='Quantity' className="input input-bordered" />
        
        </div>
       
      </div>
      
        <div className='grid col-span-2'>
        <input className='col-span-3'  type="submit" value="submit" />
        </div>
      </form>
 
     
        
            
        </div>
    );
};

export default AddToy;