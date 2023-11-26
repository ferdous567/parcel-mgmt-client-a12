import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    console.log(user)

    return (
        <div className="w-full  border pt-20">
            <div>
                <h2 className="text-3xl font-bold text-center underline py-10">User Dashboard</h2>
                <div className=" flex">
                    <div className="w-1/3 p-8">
                        <Link to='/dashboard/myProfile'>
                            <button className="btn btn-outline btn-ghost w-full mb-5">My Profile</button>
                        </Link>
                        <Link to='/dashboard/bookPercel'>
                            <button className="btn btn-outline btn-ghost w-full mb-5">Book Percel</button>
                        </Link>
                        <Link to='/dashboard/myPercel'>
                            <button className="btn btn-outline btn-ghost w-full mb-5">My Percel</button>
                        </Link>
                        <Link to='/logOut'>
                            <button className="btn btn-outline btn-ghost w-full mb-5">Logout</button>
                        </Link>
                    </div>
                    <div className="2/3 px-10 ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;