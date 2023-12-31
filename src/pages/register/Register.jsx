import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
// import { updateProfile } from "firebase/auth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const hanldeGoogleSignIn =() =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            Swal.fire({
                title: "Good job!",
                text: "Youre successfully Logged In!",
                icon: "success"
            });
            navigate('/');
        })
        .catch(err => console.error(err))
    }

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)

                    .then(() => {
                        const newUser = {
                            name: data.name,
                            email: data.email,
                            role: data.role,
                            image: data.photo
                        }
                        axiosPublic.post('/users', newUser)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        title: "Good job!",
                                        text: "Registration succesfully please login!",
                                        icon: "success"
                                    });
                                    navigate('/login')
                                }
                            })


                    })
                    .catch(error => console.error(error.message));


            })

    }

    return (
        <div className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wIT6aTvubsI-sn92uK71kfseZuIYdROfXw&usqp=CAU')] 
        h-full bg-no-repeat bg-cover m-10 p-10  md:flex justify-around">
            <Helmet>
                <title>
                    ProShop Percel Mgmt | Sign Up
                </title>
            </Helmet>


            <div className=" w-full md:w-[40%] m-10 border 
            bg-gradient-to-r from-black/20 via-black/10 to-black/20 rounded-xl ">

                
                <div className="pl-36 mt-3">
                    <img className="h-[150px] w-[150px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRHg07AXas55VfI8f75uZbNOSIcyTKXcN7g&usqp=CAU" alt="" />
                </div>
                <h3 className="text-5xl font-bold text-pink-500 text-center">Registration Form</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" {...register("password", {
                            required: true,
                            maxLength: 20, minLength: 6, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                        })}
                            placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'minLength' && <span className="text-red-500">Password is must 6 character</span>}
                        {errors.password?.type === 'pattern' && <span className="text-red-500">Password is must have one uppercase
                            , one lowercase, one number and a special character.</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="text" name="photo" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                        {errors.photo && <span className="text-red-500">PhotoURL is required</span>}
                    </div>
                    

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <label className="input-group">

                            <select name='role' {...register("role", { required: true })} className="w-full p-2"  >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="deliveryMen">Delivery Men</option>


                            </select>
                        </label>
                        {errors.role && <span className="text-red-500">Role is required</span>}
                    </div>

                    {/* { {...register("role")} === 'deliveryMen' && <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input type="text" name="phone" {...register("phone", { required: true })} placeholder="User?/Deliveryman?" className="input input-bordered" />
                        {errors.phone && <span className="text-red-500">Phone is required</span>}
                    </div>} */}

                    <div className="form-control mt-6">
                        <input className="btn bg-gradient-to-r from-pink-500 to-orange-400 hover:from-green-400 hover:to-blue-500 text-white font-bold " type="submit" value="Sign Up" />

                    </div>
                    <h2 className="text-xl text-white">Have an acount? Please
                        <Link className="text-yellow-500 hover:underline" to='/login'> Login</Link></h2>
                </form>


                <div className="text-center space-y-3 mb-2">
                    <h2 className="text-xl text-white font-bold">----Or Login With----</h2>
                    <button onClick={hanldeGoogleSignIn}
                        className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-violet-400 hover:to-cyan-300 text-white font-bold w-1/2">GOOGLE</button>
                </div>
            </div>
            <div className="mt-20 ">
                <img className="h-[400px] w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0kkOk3GF5pas7qUwOj8ymXZckR9_OiTmRQ&usqp=CAU" alt="" />
            </div>
        </div>
    );
};

export default Register;