import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyPercel = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: myPercels = [] } = useQuery({
        queryKey: ['myPercels'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })

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
                                <td></td>
                                <td>{user.orderDate} </td>
                                <td></td>
                                <td>{user.status}</td>
                                <td>
                                {user?.status === 'pending' ? <button className="btn btn-sm btn-secondary">Update</button>
                                    : <button className="btn btn-sm btn-disabled">Update</button>}
                                </td>
                                <td>
                                    {user?.status === 'pending' ? <button className="btn btn-sm btn-primary">Cancel</button>
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