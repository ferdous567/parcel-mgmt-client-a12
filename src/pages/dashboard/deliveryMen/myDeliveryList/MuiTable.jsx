
import {
    TableContainer, Table, TableHead, TableBody,
    TableRow, TableCell, Paper
} from "@mui/material";




const MuiTable = ({ myBookingList }) => {
    console.log(myBookingList)
    // const { name, phone, receiverName, receiverPhone, date, reqDate, address } = singleBooking;

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
                    </TableRow>)
                }

            </TableBody>
        </Table>
    </TableContainer>
};

export default MuiTable;