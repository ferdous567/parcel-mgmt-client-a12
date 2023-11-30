import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
// import Modal from "../Modal";

const ParcelRow = ({ user, index}) => {

    const { refetch } = useForm();

    const axiosSecure = useAxiosSecure();

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
                refetch();
              axiosSecure.delete(`/deleteMyBookings/${user._id}`)
              .then(res =>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
               
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
        <>
            <tr key={user._id}>



                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.price}</td>
                <th>{user.orderDate}</th>
                <td>{user.reqDate}</td>
                <td>{user.status}</td>
                <td>
                {
                    user.status === 'Delivered' ? <button onClick={() => handleDelete(user)} className="btn btn-sm">Cancel</button>
                    : <Link to={`/dashboard/manageAdmin/${user._id}`}>
                    <button className="btn btn-sm">Manage</button>
                </Link>
                }
                    

                </td>


            </tr>
            
        </>
    );
};

export default ParcelRow;