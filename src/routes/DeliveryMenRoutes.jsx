import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useDeliveryMen from "../hooks/useDeliveryMen";


const DeliveryMenRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isDeliveryMen, isDeliveryMenLoading] = useDeliveryMen();
   
    
    const location = useLocation();

    if(loading || isDeliveryMenLoading){
        return <div className=" text-center items-center">
            
            <h2 className="text-xl font-bold ">
            <span className="loading loading-spinner loading-md mt-24 "></span>Loading...</h2>
        </div>
    }

    if(user && isDeliveryMen){
        return children;
    }

    return <Navigate to = '/' state={{from: location}} replace></Navigate>
};

export default DeliveryMenRoutes;