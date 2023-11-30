
import {  useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";




const ManageAdmin = () => {

    const navigate = useNavigate();

    const {id: bookingsId} = useParams();
    console.log(bookingsId)

    const axiosSecure = useAxiosSecure();
    const { data: deliveryMens = [] } = useQuery({
        queryKey: ['deliveryMens'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            const exist = res.data.filter(item => item.role === 'deliveryMen')
            console.log(exist);
            return exist;

        }

    })




    const handleManage = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const deliveryMen = form.deliveryMen.value;
        const manageUpdate = {
            date: date,
            deliveryMen: deliveryMen,
            status: 'On the way'
        }

        const manageData = await axiosSecure.patch(`/manageItems/${bookingsId}`, manageUpdate);

        console.log(manageData.data)
        if(manageData.data.modifiedCount > 0){
            Swal.fire({
                title: "Lets Go!",
                text: "Booked Items is Ontheway.",
                icon: "success"
              });
              navigate( -1);
        }
        

    }

    return (
        <div>

            <div className="bg-[#f4f3f0] w-full mx-auto p-8">

                <h2 className="text-3xl font-extrabold text-center mb-10">Manage</h2>
                <form onSubmit={handleManage} className="w-full mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" />
                        
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Select Delivery Men</span>
                        </label>
                        <label className="input-group">

                            <select name = 'deliveryMen' className="w-full p-2"  >
                                <option value="">Select Delivery Men</option>
                                {
                                    deliveryMens.map(men => <option key={men._id} value={men._id}>{men.name}</option>)
                                }
                                
                                


                            </select>
                        </label>
                        
                    </div>

                    <div className="my-6">
                    <input type="submit" className="btn btn-outline btn-primary" value="Manage Book" />
                        
                    </div>

                </form>
            </div>



        </div>
    );
};

export default ManageAdmin;