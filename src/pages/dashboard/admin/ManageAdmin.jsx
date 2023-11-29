
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";




const ManageAdmin = () => {

    // const axiosSecure = useAxiosSecure();
    // const { data: deliveryMenId = [] } = useQuery({
    //     queryKey: ['deliveryMenId'],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get('/users')
    //         const exist = res.data.filter(item => item.role === 'deliveryMen')
    //         console.log(exist);
    //         return exist;

    //     }

    // })

    

    return (
        <div className="w-full">

            <div className="bg-[#f4f3f0] w-full mx-auto p-8">

                <h2 className="text-3xl font-extrabold text-center mb-10">Manage</h2>
                <form  className="w-full mx-auto">

                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="date" name="photo"  placeholder="PhotoURL" className="input input-bordered" />
                        {/* {errors.photo && <span className="text-red-500">PhotoURL is required</span>} */}
                    </div>

                <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <label className="input-group">

                            <select  className="w-full p-2"  >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="deliveryMen">Delivery Men</option>


                            </select>
                        </label>
                        {/* {errors.role && <span className="text-red-500">Role is required</span>} */}
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