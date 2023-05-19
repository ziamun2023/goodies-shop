import React, { useContext, useState } from 'react';
import IndividualDetails from './IndividualDetails';
// import { Link, Navigate } from 'react-router-dom';
import PrivateRoute from '../../privateROute/PrivateRoute';
import { AuthContext } from '../../contextProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

// const [details,setDetails]=useState(null)
const AlltoyTableRow = ({item,index}) => {

    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
    const handleDetails=()=>{
        if(!user){
            Swal.fire({
                title: 'Error!',
                text: 'You Must Log in to View Details',
                icon: 'error',
                confirmButtonText: 'Cool'
              })

              navigate('/signin')
              
             
        }

    }
       
    
        //   <div>
        //          <label htmlFor="my-modal" className="btn">view details</label>
                
                
        //         <input type="checkbox" id="my-modal" className="modal-toggle" />
        //         <div className="modal">
        //           <div className="modal-box">
        //             <h3 className="font-bold text-lg">{proname}</h3>
                  
        //             <p className="py-4"> <span className=' font-medium text-white tracking-wide'>Description </span>:<span className=' mx-2'>{detailDescription}</span></p>
        //             <p className="py-4"><span  className='font-medium text-white tracking-wide'>Available Quantity</span> :<span className=' mx-2'>{AvailableQuantity}</span></p>
        //             <p className="py-4"><span className='font-medium text-white tracking-wide'>Category</span>: <span className=' mx-2'>{Subcategory}</span></p>
        //             <p className="py-4"><span className='font-medium text-white tracking-wide'>Price</span>:<span className=' mx-2'>{Price}</span></p>
        //             <p className="py-4"><span className='font-medium text-white tracking-wide'> Seller Name</span >:<span className=' mx-2'>{name}</span></p>
        //             <p className="py-4"><span className='font-medium text-white tracking-wide'>Seller email</span>:<span className=' mx-2'>{email}</span></p>
                
        //             <div className="modal-action">
        //               <label htmlFor="my-modal" className="btn">ok!</label>
        //             </div>
        //           </div>
        //         </div>
        //     </div>
  
        
    const {_id,proname,Subcategory,Price,detailDescription,AvailableQuantity,photourl,name,email}=item
    return (
        <tbody>
               
        <tr>
      
            <td>{index+1}</td> 
            <td>{proname}</td> 
            <td>{Subcategory}</td> 
            <td>{Price}</td> 
            <td>{AvailableQuantity}</td> 
            <td>{detailDescription}</td> 
            <td>{user ?<div>
                 <label htmlFor="my-modal" className="btn">view details</label>
                    
                    
               <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box">
                         <h3 className="font-bold text-lg">{proname}</h3>
                      
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
                   </div>
               </div> :<button  className="btn" onClick={()=>handleDetails(_id)}>View Details</button>  }</td> 
         
            {/* <td><button onClick={()=>handleDetails(_id)}>View Details</button></td>  */}
     {/* <Link  to={`/toydetails/${_id}`}> view details </Link> */}

   
            </tr>
        
            </tbody>
    );
};

export default AlltoyTableRow;