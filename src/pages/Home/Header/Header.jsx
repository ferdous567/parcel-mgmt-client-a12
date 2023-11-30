import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SimpleSlider from "../Banner/Banner";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />


const Header = () => {


    const axiosPublic = useAxiosPublic();
    const {data: allUsers = []} = useQuery({
        queryKey: ['allUsersData'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/users')
            console.log(res.data);
            return res.data;
        }
    })

    const {data: bookedItem = []} = useQuery({
        queryKey: ['bookedItem'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/totalBookings')
            console.log(res.data);
            return res.data;
        }
    })



    return (
        <div className="relative">

            <SimpleSlider></SimpleSlider>
            <div className="absolute top-28 left-10">
                <h1 className="text-6xl font-bold text-yellow-500 mb-10"><span className="text-red-500 text-8xl font-extrabold">Welcome</span> To Our 
                <span className="text-green-500 text-8xl"> ProShop</span> <br /> Parcel Management...</h1>
                <input type="text" placeholder="Search here" className="input input-bordered input-primary w-full max-w-md" />
            </div>
            <motion.div
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }} className="absolute top-[86px] h-[120px] w-[130px] right-20 bg-gradient-to-r from-purple-500 to-pink-500">

                    <h2 className="font-bold text-white p-4 rounded-full">Get voucher to free shipping.</h2>

            </motion.div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className="text-center absolute -bottom-12 right-10 left-10">
                    <div className="stats shadow w-3/4">

                        <div className="stat place-items-center" >
                            <div className="stat-title">Booked</div>
                            <div className="stat-value">
                               <CountUp end={bookedItem.length} duration={1}> </CountUp> </div>
                            <div className="stat-desc">Total Booked Items</div>
                        </div>

                        <div className="stat place-items-center" >
                            <div className="stat-title">Users</div>
                            <div className="stat-value text-secondary">
                            <CountUp end={allUsers.length} duration={2}> </CountUp>
                                </div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center " >
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">
                            <CountUp end={100} duration={5}> </CountUp></div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;