import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextProvider/AuthProvider';
// import MOdal from './MOdal';
const AllToyRow = ({item}) => {

    
    const {user}=useContext(AuthContext)

            const {_id,sellerName,selleremail,productName,category,price,quantity,description,Ratings}=item


    return (
        <div>
          
          
            <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>selleremail</th>
        <th>productName</th>
        <th>category</th>
        <th>Quantity</th>
        <th>price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{sellerName}</th>
        <th>{productName}</th>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><Link to={`/viewFetails/${_id}`}> details </Link></td>
     
       
            </tr>
            
            
            
       
  
      {/* row 2 */}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToyRow;