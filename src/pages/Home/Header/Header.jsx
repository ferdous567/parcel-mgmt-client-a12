import SimpleSlider from "../Banner/Banner";
import { motion } from "framer-motion";
<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />


const Header = () => {
    return (
        <div className="relative">

            <SimpleSlider></SimpleSlider>
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
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center" >
                            <div className="stat-title">Users</div>
                            <div className="stat-value text-secondary">4,200</div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center " >
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;