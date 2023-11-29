import { Link } from "react-router-dom";
// import Modal from "../Modal";

const ParcelRow = ({ user, index}) => {
    return (
        <>
            <tr key={user._id}>



                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.price}</td>
                <th>{user.orderDate}</th>
                <td>{user.reqDate}</td>
                <td>{user.status}</td>
                <td>

                    <Link to={`/dashboard/manageAdmin/${user._id}`}>
                        <button className="btn btn-sm">Manage</button>
                    </Link>

                </td>


            </tr>
            {/* <Modal closeModal ={closeModal} isOpen ={isOpen} openModal = {openModal}></Modal> */}
        </>
    );
};

export default ParcelRow;