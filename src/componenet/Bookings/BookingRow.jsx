import { Link } from "react-router-dom";
import MoreDetails from "./MoreDetails";
import EditToy from "./EditToy";



const BookingRow = ({ booking, handleDelete, handleUpdate ,index}) => {
    const { _id,name,email,description,quantity,price,proname,category,photo} = booking;

    return (
        <tr>
          
            <td>
                {index+1}
            </td>
            <td>
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                       <img src={photo} alt="" />
                    </div>
                </div>
            </td>
          
            <td>
                {proname}
            </td>
            <td>
                {category}
            </td>
            <td>
                {price}
            </td>
            <td>{quantity}</td>
           
            <td><Link to='/moredetail'>more detail</Link></td>
            <td><EditToy price={price} proname={proname} quantity={quantity} name={name} handleUpdate={handleUpdate} email={email} description={description}></EditToy></td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm ">
                delete    
                </button>
            </th>
            {/* <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th> */}
        </tr>
    );
};

export default BookingRow;