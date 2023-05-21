import { Result } from 'postcss';
import React, { useContext } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
import Swal from 'sweetalert2'

const AddNewToy = () => {
   const {user}=useContext(AuthContext)





    const handleSubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const sellerName=form.sellerName.value
        const selleremail=form.selleremail.value
        const productName=form.productName.value
        const category=form.category.value
        const price=form.price.value
        const quantity=form.quantity.value
        const description=form.description.value
        const Ratings=form.Ratings.value
        const order={sellerName,selleremail,productName,category,price,quantity,description,Ratings}

console.log(order)




        fetch('http://localhost:5000/postToy',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(result=>{
           if(result.insertedId){
            Swal.fire({
              title: 'success!',
              text: 'Successfully Added',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
           }
        })
        console.log(order)
    }
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Add New Toy!</h1>
            <form onSubmit={handleSubmit} action="">
           <div className='grid lg:grid-cols-3 gap-6'>


           <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Seller Name</span>
    
  </label>
  <input type="text" placeholder="Type here" name='sellerName' className="input input-bordered w-full max-w-xs" />

</div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Seller Email</span>
    
  </label>
  <input type="text" placeholder="Type here" defaultValue={user?.email} name='selleremail' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Name</span>
    
  </label>
  <input type="text" placeholder="Type here" name='productName' className="input input-bordered w-full max-w-xs" />

</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Product Category</span>
    
  </label>
  <input type="text" placeholder="Type here" name='category' className="input input-bordered w-full max-w-xs" />

</div>
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
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Ratings</span>
    
  </label>
  <input type="text" placeholder="Type here" name='Ratings' className="input input-bordered w-full max-w-xs" />

</div>



           </div>
           <input type="submit" className='btn' value="submit" />
            </form>
            
        </div>
    );
};

export default AddNewToy;