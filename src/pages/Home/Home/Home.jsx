import { Helmet } from "react-helmet";
import Features from "../Features/Features";
import Header from "../Header/Header";
import TopDeliveryMen from "../topDeliveryMen/TopDeliveryMen";

const Home = () => {



    return (
        <div>
            <Helmet>
        <title>ProShip Parcel Mgmt. | Home</title>
      </Helmet>
            <Header></Header>
            <Features></Features>
            <TopDeliveryMen></TopDeliveryMen>
        </div>
    );
};

export default Home;