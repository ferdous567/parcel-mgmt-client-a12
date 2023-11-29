import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import MuiTable from "./MuiTable";



const MyDeliveryList = () => {
    const {user} = useContext(AuthContext);

    const axiosSecure = useAxiosSecure();

     const {data: deliveryMen = {}} = useQuery({
        queryKey: ['singleDeliveryMen'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/getSingleDeliveryMen/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })
    const {data: myBookingList = []} = useQuery({
        queryKey: ['myBookingList'],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/deliveryMenWiseBooking/${deliveryMen._id}`)
            console.log(res.data);
            return res.data;
        }
    })



    return (
        <div>
            <h3 className="text-3xl">My Delivery List : {myBookingList.length} </h3>

            <MuiTable myBookingList = {myBookingList}></MuiTable>
            

        </div>
    );
};

export default MyDeliveryList;