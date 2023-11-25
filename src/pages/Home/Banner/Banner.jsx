
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
            autoplaySpeed: 5000,
            pauseOnHover: true
        };
        return (
            <div>

                <Slider {...settings}>
                    <div >
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrRigsbSjT23q3d-CKc4QEemqtIzTbSfSiAA&usqp=CAU" alt="" />
                    </div>
                    <div >
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGkForTeJS3NKGita4A2k58Tc4esZ2JK41A&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEX_rn00al2r_W0LCX3MvudBcsEI7zSSXBw&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0KIqmYWgA8sIRrNOYrsLxeY5xRJTRCK8yg&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JuP3DkjVTpDdwILl5wKhGPkEqOsqOHQPnA&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_r9WLDdK3I8832g0dG93bcoIEyHDnez4SlQ&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDngBqb3YqkYrJFvxZ5eoXpa6LUe1lB5qeA&usqp=CAU" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-[500px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDTY7-68rlO2nlsx83utpWIl_b-ORc9SXLQ&usqp=CAU" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

