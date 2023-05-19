import { Link } from "react-router-dom";
import MoreDetails from "./MoreDetails";
import EditToy from "./EditToy";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id,name,email,description,quantity,price,proname,category,photo} = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
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
           
            <td><MoreDetails name={name} email={email} description={description}></MoreDetails></td>
            <td><EditToy name={name} email={email} description={description}></EditToy></td>
            {/* <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th> */}
        </tr>
    );
};

export default BookingRow;