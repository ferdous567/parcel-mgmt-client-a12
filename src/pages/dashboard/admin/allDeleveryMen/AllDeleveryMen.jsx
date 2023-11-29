import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AllDeleveryMen = () => {


    const axiosSecure = useAxiosSecure();
    const {data: deliveryMen = []} = useQuery({
        queryKey: ['deliveryMens'],
        queryFn: async() =>{
            const res = await axiosSecure.get('/users')
            const exist = res.data.filter(item => item.role === 'deliveryMen')
            console.log(exist);
            return exist;
           
        }
        
    })

    

   
    return (
        <div>
             <h3 className="text-3xl font-bold text-center underline">All Delivery Men</h3>

             <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Number of Parcel</th>
                                <th>Avarage Review</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                deliveryMen.map((user, index) => <tr key={user._id}>
                                    
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td></td>
                                   
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

        </div>
    );
};

export default AllDeleveryMen;