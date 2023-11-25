

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Features = () => {

useEffect(() =>{
    Aos.init();
},[])


    return (
        <div className="my-20 w-3/4 mx-auto">
            <div data-aos = "fade-down">
            <h2 className="text-6xl font-extrabold text-center my-16">Our Features</h2>
            </div>
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
            <div className="flex justify-around ">
                <div className="card ml-8 bg-base-100 shadow-xl image-full w-[250px]">
                    <figure><img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvkAiLMvgQS4jxJQq00zKdi01SAxCjtifdg&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body" data-aos="fade-up" data-aos-duration="500">
                    <img className="h-[100px] w-[100px] rounded-full m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF7nHXlbHGhwMXH9Gby8XLBCw14hiot__P0Q&usqp=CAU" alt="" />
                        <h2 className="card-title">Super Fast Delivery!</h2>
                        <p>We provides you a super fast delivery services, first order fast delivered.</p>
                        
                    </div>
                </div>
                <div className="card ml-8 bg-base-100 shadow-xl image-full w-[250px]">
                    <figure><img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WQWNVDyVJnJP5vWNju9AQwAPVXMzlLHurw&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body" data-aos="fade-down" data-aos-duration="500">
                    <img className="h-[100px] w-[100px] rounded-full m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0aSJhDSwcPYFQPZiwy4IBvpFmVYBUm4TZg&usqp=CAU" alt="" />
                        <h2 className="card-title">Parcel Safety!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
                <div className="card ml-8 bg-base-100 shadow-xl image-full w-[250px]">
                    <figure><img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpPAvkbOCWneGtUYUVGKTu8Acjr26jQ14_w&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body" data-aos="fade-right" data-aos-duration="500">
                        <img className="h-[100px] w-[100px] rounded-full m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJ7A7EAInsRqgx1WdtNQxf50UyCSjpZwsnE4YZgvCkg&s" alt="" />
                        <h2 className="card-title">Door Step Delivery!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        
                    </div>
                </div>
            </div>
            </div>
         </div>
    );
};

export default Features;