import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contextProvider/AuthProvider';
import MydataRow from './MydataRow';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const Mytoys = () => {
    const [alldata,setAlldata]=useState([])

    const {user}=useContext(AuthContext)
    console.log(user?.email)
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/mytoys/${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    const url = `http://localhost:5000/private?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [url]);


    const handleDelete = id =>  {
        Swal.fire({
          title: 'Confirm Delete',
          text: 'Are you sure you want to delete this item?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel'
        }).then(result => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/delete/${id}`, {
              method: 'DELETE'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire('Deleted', 'Deleted successfully', 'success');
                  const remaining = alldata.filter(item => item._id !== id);
                  setAlldata(remaining);
                }
              });
          }
        });
      };




    return (
        <div>
       <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>productName</th>
        <th>category</th>
        <th>price</th>
        <th>quantity</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      {
        alldata.map(item=><MydataRow handleDelete={handleDelete} key={item._id} item={item}></MydataRow>)
      }
  
    </tbody>
  </table>
</div>

            
        </div>
    );
};

export default Mytoys;

// const order={sellerName,selleremail,productName,category,price,quantity,description,Ratings}
// 