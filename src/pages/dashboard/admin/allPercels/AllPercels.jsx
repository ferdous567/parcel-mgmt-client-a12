import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AllPercels = () => {

    // const axiosPublic = useAxiosPublic();

    const axiosSecure = useAxiosSecure();
    const { data: allPercel = [] } = useQuery({
        queryKey: ['totalPercels'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            console.log(res.data);
            return res.data;
        }
    })

    

    return (
        <div>
            <h3 className="text-3xl">All Percels</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>User Phone</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Requested Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allPercel.map((user, index) => <tr key={user._id}>

                                

                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.price}</td>
                                <th>{user.orderDate}</th>
                                <td>{user.reqDate}</td>
                                <td>{user.status}</td>
                                <td>
                                <button className="btn btn-sm">Manage</button>
                                    {/* <Link to = '/dashboard/manageAdmin'>
                                    <button className="btn btn-sm">Manage</button>
                                    </Link> */}
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPercels;