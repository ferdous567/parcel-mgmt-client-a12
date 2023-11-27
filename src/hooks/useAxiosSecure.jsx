import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://parcel-mgmt-server-gm4mzoy5m-khaledas-projects.vercel.app'
})

const useAxiosSecure = () => {
    
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);

    // request interceptor
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stoped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)
    });

    //    intercepts 401 and 403
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptors', status);
        if(status === 401 || status === 403 ){
           await logOut();
            navigate('/login');
        }
        return Promise.reject(error); 
    })
    return axiosSecure;

};

export default useAxiosSecure;