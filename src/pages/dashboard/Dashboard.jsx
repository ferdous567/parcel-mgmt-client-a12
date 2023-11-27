import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useDeliveryMen from "../../hooks/useDeliveryMen";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isDeliveryMen] = useDeliveryMen();
    console.log(isAdmin);
    // console.log(isDeliveryMen);

    console.log(user)

    return (
        <div className="w-full  border pt-20">
            <div>
                <h2 className="text-3xl font-bold text-center underline py-10">User Dashboard</h2>
                <div className=" flex">
                    <div className="w-1/3 p-8">

                        {
                            isAdmin ? <>
                            <NavLink to='/dashboard/allParcels'>
                                <button className="btn btn-outline btn-ghost w-full mb-5">All Parcels</button>
                            </NavLink>
                            <NavLink to='/dashboard/allUsers'>
                                <button className="btn btn-outline btn-ghost w-full mb-5">All Users</button>
                            </NavLink>
                            <NavLink to='/dashboard/allDeliveryMen'>
                                <button className="btn btn-outline btn-ghost w-full mb-5">All Delivery Men</button>
                            </NavLink>
                            <NavLink to='/dashboard/statistics'>
                                <button className="btn btn-outline btn-ghost w-full mb-5">Statistics</button>
                            </NavLink>
                        </> : isDeliveryMen ? <>
                                <NavLink to='/dashboard/deliveryList'>
                                    <button className="btn btn-outline btn-ghost w-full mb-5">My Delivery List</button>
                                </NavLink>
                                <NavLink to='/dashboard/reviews'>
                                    <button className="btn btn-outline btn-ghost w-full mb-5">My Reviews</button>
                                </NavLink>
                            </>  : <>
                                    <NavLink to='/dashboard/myProfile'>
                                        <button className="btn btn-outline btn-ghost w-full mb-5">My Profile</button>
                                    </NavLink>
                                    <NavLink to='/dashboard/bookPercel'>
                                        <button className="btn btn-outline btn-ghost w-full mb-5">Book Percel</button>
                                    </NavLink>
                                    <NavLink to='/dashboard/myPercel'>
                                        <button className="btn btn-outline btn-ghost w-full mb-5">My Percel</button>
                                    </NavLink>
                                    <NavLink to='/logOut'>
                                        <button className="btn btn-outline btn-ghost w-full mb-5">Logout</button>
                                    </NavLink>
                                </>
                        }
                        
                       
                    </div>
                    <div className="w-2/3 px-10 ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;