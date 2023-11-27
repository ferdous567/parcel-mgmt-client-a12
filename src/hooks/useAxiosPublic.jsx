import axios from "axios";


const axiosPublic = axios.create({

    baseURL: 'https://parcel-mgmt-server-gm4mzoy5m-khaledas-projects.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;