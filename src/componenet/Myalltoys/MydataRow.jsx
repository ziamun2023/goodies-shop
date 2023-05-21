import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MydataRow = ({item,handleDelete}) => {


    
// const [final,setFinal]=useState([])
// console.log(final)

    const {sellerName,selleremail,productName,category,price,quantity,description,Ratings,_id}=item

    



    return (
        <>
         <tr>
        <th>{productName}</th>
        <td>{category}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td><small>{description}</small></td>
        <td><Link to={`/editMytoy/${_id}`}>Edit</Link></td>
        <td><button onClick={()=>handleDelete(_id)}>delete</button></td>
      </tr>
    
        </>
    );
};

export default MydataRow;