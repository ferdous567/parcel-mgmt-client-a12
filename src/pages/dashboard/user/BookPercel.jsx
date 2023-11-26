import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const BookPercel = () => {

    const axiosPublic = useAxiosPublic();
    const [price, setPrice] = useState(0);

    const { register, handleSubmit  } = useForm();
    const {user} = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data)
        
        const bookItems = {
            name: user?.displayName,
            email: user?.email,
            phone: data.phone,
            type: data.type,
            weight: data.weight,
            price: data.prices,
            receiverName: data.receiversName,
            receiverPhone: data.receiversPhone,
            address: data.address,
            reqDate: data.date,
            orderDate: new Date()
        }

        axiosPublic.post('/bookings', bookItems)
        .then(res => {
            if (res.data.insertedId) {
                console.log('booking added to the database');
               
                Swal.fire({
                    title: "Good job!",
                    text: "Your booking is received successfully.",
                    icon: "success"
                });
               
            }
        })
        
    }

    const handleWeightCalc = (e) =>{
        const weight = parseInt(e.target.value);
        if(weight <= 3){
            setPrice(weight*50);
        }
       

    }
    


    return (
        <div className="w-full">
            
            <div className="bg-[#f4f3f0] w-full mx-auto p-8">

                <h2 className="text-3xl font-extrabold text-center mb-10">Book Percel</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
                    {/* row 1 */}
                    <div className=" flex w-full gap-4">
                        <div className="form-control flex-[1]">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={user?.displayName} 
                                {...register("name", { required: true })} placeholder=" Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control flex-[1]">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">

                                <input type="text" defaultValue={user?.email}  {...register("email", { required: true })} placeholder="Email"
                                    className="input input-bordered w-full" />
                            </label>
                        </div> 
                    </div>

                    {/* row 2 */}

                    <div className="md:flex w-full">
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <label className="input-group">

                                <input type="text" {...register("phone", { required: true })} placeholder="Phone"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  md:ml-8 mb-5">
                            <label className="label">
                                <span className="label-text">Percel Type</span>
                            </label>
                            <label className="input-group">

                                <input type="text" {...register("type", { required: true })} placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control  md:ml-8 mb-5">
                            <label className="label">
                                <span className="label-text">Weight (kg.)</span>
                            </label>
                            <label className="input-group">

                                <input type="number" 
                                {...register("weight", { required: true })} 
                                onChange={handleWeightCalc} min={0}
                                placeholder="Weight" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row 3 */}
                    <div className="md:flex w-full">
                        <div className="form-control md:w-1/3">
                            <label className="label">
                                <span className="label-text">Receivers Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" {...register("receiversName", { required: true })} placeholder="Receivers Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/3 md:ml-8 mb-5">
                            <label className="label">
                                <span className="label-text">Receivers Phone</span>
                            </label>
                            <label className="input-group">

                                <input type="text" {...register("receiversPhone", { required: true })} placeholder="Receivers Phone" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/3 md:ml-8 mb-5">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                           
                                <input type="number" {...register("prices", { required: true })} placeholder="Price" value={price} className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* row 4 */}
                    <div className="md:flex w-full">
                        <div className="form-control w-1/2 mr-5">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <label className="input-group">

                                <input type="text" {...register("address", { required: true })}  placeholder="Address"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Requested Date</span>
                            </label>
                            <label className="input-group">

                                <input type="date" {...register("date", { required: true })}  placeholder="Address"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                     {/* row 5 */}
                     <div className="md:flex w-full">
                      

                        <div className="form-control md:w-1/2 mb-5">
                            <label className="label">
                                <span className="label-text">Delivery Address Latitude </span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="i.e 21.121365496" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-8 mb-5">
                            <label className="label">
                                <span className="label-text">Delivery Address longitude</span>
                            </label>
                            <label className="input-group">

                                <input type="text"  placeholder="i.e 21.121365496" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* row 6 */}
                    <div className="my-5 ">
                        <input type="submit" value="Book Now" className="btn btn-success w-full" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookPercel;