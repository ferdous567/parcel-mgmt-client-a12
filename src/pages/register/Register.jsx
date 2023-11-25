import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7wIT6aTvubsI-sn92uK71kfseZuIYdROfXw&usqp=CAU')] 
        h-full bg-no-repeat bg-cover m-10 p-10  md:flex justify-around">
            <Helmet>
                <title>
                    ProShop Percel Mgmt | Login
                </title>
            </Helmet>
           

            <div className=" w-full md:w-[40%] m-10 border 
            bg-gradient-to-r from-black/20 via-black/10 to-black/20 rounded-xl ">

                <h3 className="text-5xl font-bold text-pink-500 text-center">Registration Form</h3>
                <div className="pl-36 mt-3">
                <img className="h-[150px] w-[150px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRHg07AXas55VfI8f75uZbNOSIcyTKXcN7g&usqp=CAU" alt="" />
                </div>
                <form  className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-white">Forgottten password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-gradient-to-r from-pink-500 to-orange-400 hover:from-green-400 hover:to-blue-500 text-white font-bold " type="submit" value="Login" />

                    </div>
                    <h2 className="text-xl text-white">Have an acount? Please
                        <Link className="text-yellow-500 hover:underline" to='/login'> Login</Link></h2>
                </form>


                <div className="text-center space-y-3 mb-2">
                    <h2 className="text-xl text-white font-bold">----Or Login With----</h2>
                    <button
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