import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaTruck, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount  > 0){
                refetch();
                Swal.fire({
                    title: "Congratulations!",
                    text: "You are admin now.",
                    icon: "success"
                  });
            }
        })
    }
    const handleMakeDeli = user =>{
        axiosSecure.patch(`/users/deliveryMen/${user._id}`)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount  > 0){
                refetch();
                Swal.fire({
                    title: "Greate!",
                    text: "Now you are a Delivery Men.",
                    icon: "success"
                  });
            }
        })
    }

    const handleDelete = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              axiosSecure.delete(`/users/${user._id}`)
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
        <div>

            <div >
                <div className="flex justify-around">
                    <h3 className="text-2xl font-bold">All Users</h3>
                    <h3 className="text-2xl font-bold">Total Users : {users.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Delivery Men</th>
                                <th>Make Admin</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    
                                    <td>
                                       { user?.role === 'DeliveryMen' ? "Delivery Men" : <button onClick={() => handleMakeDeli(user)}
                                         className="btn btn-outline">
                                            <FaTruck className="text-xl font-bold text-orange-500 "></FaTruck></button>}
                                    </td>
                                    <td>
                                        { user?.role === 'Admin' ? "Admin" : <button onClick={() => handleMakeAdmin(user)}
                                         className="btn btn-outline">
                                            <FaUsers className="text-xl font-bold text-green-500 "></FaUsers></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(user)}
                                         className="btn btn-outline">
                                            <FaTrashAlt className="text-xl font-bold text-red-500 "></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;