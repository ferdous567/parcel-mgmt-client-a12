import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if(loading || isAdminLoading){
        return <div className=" text-center items-center">
            
            <h2 className="text-xl font-bold ">
            <span className="loading loading-spinner loading-md mt-24 "></span>Loading...</h2>
        </div>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to = '/' state={{from: location}} replace></Navigate>
};

export default AdminRoutes;