import { Helmet } from "react-helmet";
import Features from "../Features/Features";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>ProShip Parcel Mgmt. | Home</title>
      </Helmet>
            <Header></Header>
            <Features></Features>
        </div>
    );
};

export default Home;