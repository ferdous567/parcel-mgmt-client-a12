import SimpleSlider from "../Banner/Banner";

<link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
 

const Header = () => {
    return (
        <div className="relative">
            
            <SimpleSlider></SimpleSlider>
            <div data-aos="fade-up"  data-aos-anchor-placement="top-center">
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