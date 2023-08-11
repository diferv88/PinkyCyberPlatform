/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HeaderTable from '../HeaderTable/HeaderTable';
import DotStatus from '../../../dotStatus/DotStatus';
import './TableUserAccounts.styles.scss'
function createData(user, connectivity,status, role, email, issues,created,createdBy,rImpact,rLevel) {
  return { user, connectivity, status, role, email,issues ,created,createdBy,rImpact,rLevel};
}

const rows = [
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
];

 const TableUserAccounts = ()=> {
  return <>
    <TableContainer component={Paper}>
        <HeaderTable labelButton="Add user" linkTo="/add-partner-account" form="user"/>  
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead> 
              
          <TableRow className='user-table-row'>
            <TableCell align="left" className='user-table-row'>Action</TableCell>
            <TableCell align="left" className='user-table-row'>Device name</TableCell>
            <TableCell align="left" className='user-table-row'>Physical</TableCell>
            <TableCell align="left" className='user-table-row'>Type</TableCell>
            <TableCell align="left" className='user-table-row'>OS</TableCell>
            <TableCell align="left" className='user-table-row'>Ip Address</TableCell>
            <TableCell align="left" className='user-table-row'>MAC address</TableCell>
            <TableCell align="left" className='user-table-row'>Risk type</TableCell>
            <TableCell align="left" className='user-table-row'>Risk impact</TableCell>
            <TableCell align="left" className='user-table-row'>Risk level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"><span className='span-link'>{row.user}</span></TableCell>
              <TableCell align="left">
                <DotStatus status={row.connectivity}/>
                {row.connectivity}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left"><span className='span-link'>{row.issues}</span></TableCell>
              <TableCell align="left">{row.created}</TableCell>
              <TableCell align="left"><span className='span-link'>{row.createdBy}</span></TableCell>
              <TableCell align="left"><span className='span-link'>{row.rImpact}</span></TableCell>
              <TableCell align="left"><span className='span-link'>{row.rLevel}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}

export default TableUserAccounts;