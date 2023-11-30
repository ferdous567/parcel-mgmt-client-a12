
import {
    TableContainer, Table, TableHead, TableBody,
    TableRow, TableCell, Paper, Button
} from "@mui/material";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";




const MuiTable = ({ myBookingList }) => {

    const { refetch } = useForm();

    const axiosSecure = useAxiosSecure();

    const handleSend = async(data) =>{
        const manageHandleSend = {
            status: 'Delivered',

        }
        const manageData = await axiosSecure.patch(`/manageHandleSend/${data._id}`, manageHandleSend);

        console.log(manageData.data)

       
    }

    const handleDelete = (data) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
              axiosSecure.delete(`/deleteMyBookings/${data._id}`)
              .then(res =>{
                console.log(res.data);
                if(res.data.deletedCount > 0){
                  refetch();
                  console.log('data deleted');
    
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
    
                }
                
              })
            }
          });
    }
    

    return <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>Booked User Name</TableCell>
                    <TableCell>Booked User Phone</TableCell>
                    <TableCell>Recivers Name</TableCell>
                    <TableCell>Recivers Phone</TableCell>
                    <TableCell>Request Date</TableCell>
                    <TableCell>Approximate Date</TableCell>
                    <TableCell>Recivers Location</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    myBookingList.map(data => <TableRow key={data._id}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>{data.receiverName}</TableCell>
                        <TableCell>{data.receiverPhone}</TableCell>
                        <TableCell>{data.reqDate}</TableCell>
                        <TableCell>{data.date}</TableCell>
                        <TableCell>{data.address}</TableCell>
                        <TableCell>{data.status}</TableCell>
                        { data.status === 'Delivered' ? <Button onClick={() => handleDelete(data)} variant="contained">
                            Delete</Button> 
                        : <Button onClick={() => handleSend(data)} variant="contained">
                        Delivered</Button> }
                        
                    </TableRow>)
                }

            </TableBody>
        </Table>
    </TableContainer>
};

export default MuiTable;