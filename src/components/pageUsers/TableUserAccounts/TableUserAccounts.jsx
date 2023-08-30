import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HeaderTable from '../HeaderTable/HeaderTable';
import DotStatus from '../../dotStatus/DotStatus';
import './TableUserAccounts.styles.scss'
function createData(user, connectivity,status, role, email, issues,created,createdBy) {
  return { user, connectivity, status, role, email,issues ,created,createdBy};
}

const rows = [
  createData('Sherlock Holmes', 'Online', "Active", "Administrador", "sherlock.holmes@pinky.ai","Review issues", "2022-02-20", "Andrew Doe"),
  createData('Mrgarethe Holmes', 'Online', "Active", "Administrador", "margarethe.holmes@pinky.ai","Review issues", "2022-02-20", "Andrew Doe"),
  createData('Jhon Doe', 'Offline', "Deleted", "Partner user", "jhon.doe@partner.ai","Review issues", "2022-02-20", "Andrew Doe"),
  createData('Jane', 'Online', "Active", "Partner user", "jane.doe@partner.ai","Review issues", "2022-02-20", "Andrew Doe"),
  
];

 const TableUserAccounts = ()=> {
  return <>
    <TableContainer component={Paper}>
        <HeaderTable labelButton="Add user" linkTo="/add-partner-account" form="user"/>  
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead> 
              
          <TableRow className='user-table-row'>
            <TableCell align="left" className='user-table-row'>User</TableCell>
            <TableCell align="left" className='user-table-row'>Status</TableCell>
            <TableCell align="left" className='user-table-row'>Connectivity</TableCell>
            <TableCell align="left" className='user-table-row'>Role</TableCell>
            <TableCell align="left" className='user-table-row'>Email</TableCell>
            <TableCell align="left" className='user-table-row'>Reported issues</TableCell>
            <TableCell align="left" className='user-table-row'>Created</TableCell>
            <TableCell align="left" className='user-table-row'>Created by</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}

export default TableUserAccounts;