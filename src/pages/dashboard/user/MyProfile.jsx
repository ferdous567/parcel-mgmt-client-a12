import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useDeliveryMen from "../../../hooks/useDeliveryMen";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import uploadImage from "../../../services/uploadImage";

const image_hosting_key = import.meta.env.IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isDeliveryMen] = useDeliveryMen();

    const {register, handleSubmit} = useForm();

    // const {data: myProfile = []} = useQuery({
    //     queryKey: ['myProfile'],
    //     queryFn: async(_id) =>{
    //         const res = await axiosPublic.get(`/users/${_id}`);
    //         console.log(res.data);
    //         return res.data;
           
    //     }
        
    // })
    // console.log(myProfile);

    const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);

        // const img = data.image[0]
        // const responseImg = await uploadImage(img);
        // const updateImg = await updateUserProfilePhoto(responseImg)
        // console.log(updateImg);

    }

    return (
        <div className="pt-4 bg-gradient-to-r from-purple-300 to-pink-300 p-6">
            <h2 className="text-4xl p-6 font-extrabold  underline font-serif ">My Profile</h2>
            <div className="space-y-4 font-serif">
                <img className="h-[150px] w-[150px]" src={user.photoURL} alt="" />
                <h3 className="text-3xl font-bold font-mono">Name : {user.displayName}</h3>
                <h3 className="text-xl font-bold">Email : {user.email}</h3>
                <h3 className="text-xl ">Role : {isAdmin ? 'Admin' : isDeliveryMen ? 'Delivery Men' : 'User'}</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-6">
                <input type="file" {...register('image')} className="file-input file-input-bordered w-full max-w-xs" />
            </div>
            <button className="btn btn-info">Upload Image</button>
            </form>
        </div>
    );
};

export default MyProfile;