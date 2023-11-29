
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const BarChart = () => {
    const [category, setCategory] = useState([])
    const [data, setData] = useState([])
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const date = []
        const price = []
        
        axiosSecure.get('/bookings').then(res => {
            console.log(res.data);
            
            res.data.map(item =>{
                // const dateData = item.filter(date => date.orderDate === 'orderDate')
                console.log('item', item);
                
                date.push(item.orderDate);
                price.push(item.price)
            })
        })
        setCategory(date)
          setData(price)

    }, [axiosSecure])

    return (
        <div>
            <Chart options={{
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: category
                }
            }}
                series={[{
                    name: 'series-1',
                    data: data
                }]} type="bar" width={800} height={500} />
        </div>
    );
};

export default BarChart;


