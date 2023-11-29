
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Component } from "react";

export default class SimpleSlider extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 7000,
            pauseOnHover: true
        };
        return (
            <div>

                <Slider {...settings}>
                    <div >
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM0ItQZ9xDFlwG8lGaNQmnafDIxbM2WePnpg&usqp=CAU" alt="" />
                    </div>
                    <div >
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_s9wENE2mR3xfgc_ok1nmQvJNxsPzCdr_Qg&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo-WSpm7d-HMwCfUId4c2aULNRw4OIgJtlg&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWX62uXCAJoK4y220ci4VYdAbD8m97wTQKQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcVnK_93Af-2YBF24xz0NM2Jf_vR19VuzoQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r9WLDdK3I8832g0dG93bcoIEyHDnez4SlQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px] opacity-70" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDngBqb3YqkYrJFvxZ5eoXpa6LUe1lB5qeA&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[600px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDTY7-68rlO2nlsx83utpWIl_b-ORc9SXLQ&usqp=CAU" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

