import React from 'react';

const AlltoyTableRow = ({item}) => {
    const {productName,name,Subcategory,Price,detailDescription,AvailableQuantity,photourl}=item
    return (
        <tbody>
               
        <tr>
            <th>1</th> 
            <td>{name}</td> 
            <td>{Subcategory}</td> 
            <td>{Price}</td> 
            <td>{AvailableQuantity}</td> 
            <td>{detailDescription}</td> 
            </tr>
        
            </tbody>
    );
};

export default AlltoyTableRow;