import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
// import { Authcontext } from "../providers/Authprovider";
import { AuthContext } from "../../contextProvider/AuthProvider";

const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    console.log(bookings)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }


    const handleUpdate=(data)=>{
        console.log(data)
    }

    // const handleBookingConfirm = id => {
    //     fetch(`http://localhost:5000/bookings/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'confirm' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 // update state
    //                 const remaining = bookings.filter(booking => booking._id !== id);
    //                 const updated = bookings.find(booking => booking._id === id);
    //                 updated.status = 'confirm'
    //                 const newBookings = [updated, ...remaining];
    //                 setBookings(newBookings);
    //             }
    //         })
    // }

    return (
        <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>product Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>seller name</th>
                            <th>Seller email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking,index) => <BookingRow
                                key={booking._id} index={index}
                                booking={booking} handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                              
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;