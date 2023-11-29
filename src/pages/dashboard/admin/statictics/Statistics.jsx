import BarChart from "../BarChart";
import LineChart from "../LineChart";
// import ReactChart from "../BarChart";

const Statistics = () => {
    return (
        <div>
            <div>
                <h3 className="text-xl text-blue-500   py-6">Bar Chart By Date and Price</h3>
            <BarChart></BarChart>
            </div>
            <h3 className="text-xl text-blue-500  py-6">Line Chart By Email and Weight</h3>
            <LineChart></LineChart>
        </div>
    );
      
    };


export default Statistics;