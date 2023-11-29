import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const TopDeliveryMen = () => {

    const axiosPublic = useAxiosPublic();
    const {data: deliveryMen = []} = useQuery({
        queryKey: ['deliveryMens'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/users')
            const exist = res.data.filter(item => item.role === 'deliveryMen')
            console.log(exist);
            return exist;
           
        }
        
    })

    return (
        <div className="max-w-screen-md mx-auto my-10">
             <h3 className="text-4xl font-bold text-center underline pb-10 text-cyan-600">Top Delivery Men</h3>

            <div className="grid grid-cols-3 gap-6 text-white">
            
                {
                    deliveryMen.slice(0, 5).map(singlePerson => <div key={singlePerson._id} data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div className="p-6 m-4 rounded w-full bg-gradient-to-r from-purple-500 to-pink-500"
                    key={singlePerson._id}>
                        <img className="h-[200px] w-[200px]" src={singlePerson.image} alt="" />
                        <h3 className="text-2xl font-bold">{singlePerson.name}</h3>
                        <h4 className="text-xl">{singlePerson.email}</h4>
                    </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default TopDeliveryMen;