import React from 'react';

const TableRow = ({item}) => {
//   const   {sellerName,sellerEmail,ProductName,Category,description,Quantity,price,photourl}=item
    return (
        <tbody>
               
    <tr>
      
        <td>{ProductName}</td> 
        <td>{Category}</td> 
        <td>{price}</td> 
        <td>{Quantity}</td> 
        <td>{description}</td> 
        <td><div className=''>
            <div><small>{sellerName}</small></div>
           <div> <small>{sellerEmail}</small></div></div></td>
      </tr>
        </tbody>
    );
};

export default TableRow;