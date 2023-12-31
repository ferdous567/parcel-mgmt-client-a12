import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
// import { Link } from "react-router-dom";
// import Modal from "../Modal";
import ParcelRow from "./ParcelRow";

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
                            allPercel.map((user, index) => <ParcelRow  key={user._id} 
                           
                            user={user} index={index}></ParcelRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPercels;