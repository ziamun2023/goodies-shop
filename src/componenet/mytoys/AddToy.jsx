import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { Authcontext } from '../providers/Authprovider';
import { AuthContext } from '../../contextProvider/AuthProvider';

const AddToy = () => {
  const {user}=useContext(AuthContext)
  // const service=useLoaderData()
  // const {title,price}=service
  // console.log(service)

    const handlebookservice=(event)=>{
        event.preventDefault()
        const form=event.target 
        const name=form.name.value
        const email=form.email.value 
        const category=form.category.value 
        const photo=form.photo.value 
        const quantity=form.quantity.value
        const price=form.price.value
        const description=form.description.value
        const proname=form.proname.value
        const order={name,
        email,description,quantity,category,photo,price,proname}
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
           
              
        
       
          <form onSubmit={handlebookservice}  className='grid lg:grid-cols-2'>
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" />
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" name='quantity' placeholder="phone number" className="input input-bordered" />
        
        </div>
       
      </div>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">description</span>
          </label>
          <input type="text" name='description' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">product name</span>
          </label>
          <input type="text" name='proname'  className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name='category'  className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">product price</span>
          </label>
          <input type="text" name='price'  className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">photo</span>
          </label>
          <input type="text" name='photo'  className="input input-bordered" />
          
        </div>
   
          </div>
        <div className='grid col-span-2'>
        <input  type="submit" value="submit" />
        </div>
      </form>
 
     
        
            
        </div>
    );
};

export default AddToy;