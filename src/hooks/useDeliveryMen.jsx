import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useDeliveryMen = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: isDeliveryMen = [], isPending: isDeliveryMenLoading} = useQuery({
        queryKey: [user?.email, 'isDeliveryMen'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/deliveryMen/${user.email}`);
            console.log(res.data);
            return res.data.deliveryMen;
        }
    });
    return [isDeliveryMen, isDeliveryMenLoading];
};

export default useDeliveryMen;