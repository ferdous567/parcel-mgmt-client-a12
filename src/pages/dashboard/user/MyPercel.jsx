import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPercel = () => {

    // const {id: bookingsId} = useParams();
    // console.log(bookingsId);

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: myPercels = [], refetch } = useQuery({
        queryKey: ['myPercels'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    const handleDelete = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              axiosSecure.delete(`/deleteMyBookings/${user._id}`)
              .then(res =>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                  refetch();
                  console.log('data deleted');
    
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
    
                }
                
              })
            }
          });
    }

   

    return (
        <div className="w-full">
            <h2 className="text-3xl">My Percel: {myPercels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Type</th>
                            <th>Requested Date</th>
                            <th>Approximate <br /> Date</th>
                            <th>Booking Date</th>
                            <th>Delivery <br /> Men Id</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myPercels.map((user, index) => <tr key={user._id}>

                                <th>{index + 1}</th>
                                <td>{user.type}</td>
                                <td>{user.reqDate}</td>
                                <td>{user.date}</td>
                                <td>{user.orderDate} </td>
                                <td>{user.deliveryMen}</td>
                                <td>{user.status}</td>
                                <td>
                                <Link to = {`/dashboard/updateMyParcel/${user._id}`}>
                                {user?.status === 'pending' ? <button className="btn btn-sm btn-secondary">Update</button>
                                    : <button className="btn btn-sm btn-disabled">Update</button>}
                                </Link>
                                </td>
                                <td>
                                    {user?.status === 'pending' ? <button onClick={() => handleDelete(user)} className="btn btn-sm btn-primary">Cancel</button>
                                    : <button className="btn btn-sm btn-disabled">Cancel</button>}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPercel;