/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
// import SearchBar from "material-ui-search-bar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Paper from '@mui/material/Paper';
import HeaderTable from '../HeaderTable/HeaderTable';
import DotStatus from '../../../dotStatus/DotStatus';
import './TableUserAccounts.styles.scss'
import { Button } from '@mui/material';
import { useEffect } from 'react';

function createData(user, connectivity,status, role, email, issues,created,createdBy,rImpact,rLevel) {
  return { user, connectivity, status, role, email,issues ,created,createdBy,rImpact,rLevel};
}


const rows = [
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Legal & compliance","High","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Reputational","Medium","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Reputational","Low","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Reputational","Medium","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Legal & compliance","Low","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Reputational","Critical","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Medium","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Legal & compliance","High","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Medium","Assign level"),
  createData('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Operational","Low","Assign level"),
];

const riskTypeData = [
  "Operational",
  "Legal & compliance",
  "Reputational",
]
const riskImpactData = [
  "Critical",
  "High",
  "Medium",
  "Low",
]
const riskLevelData = [
  "Assign level"
]

 const TableUserAccounts = ()=> {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searched, setSearched] = React.useState("");


  const [testRt, setTestRt] = React.useState("");
  const [testRL, setTestRl] = React.useState("");
  const [testRI, setTestRI] = React.useState("");
  //Control Select's
  const handleChangeRT = (event, i) => {
    rows[i].createdBy = event.target.value;
    setTestRt(`${event.target.value}${i}`);
  };
  const handleChangeRL = (event, i) => {
    rows[i].rLevel = event.target.value
    setTestRl(`${event.target.value}${i}`);
  };
  const handleChangeRI = (event, i) => {
    rows[i].rImpact = event.target.value
    setTestRI(`${event.target.value}${i}`);
  };

  function stableSort(array) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  //Controls rowsPerPage
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );

  

  return <>
    {/* <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
    /> */}
    <TableContainer component={Paper}>
        <HeaderTable labelButton="Add user" linkTo="/add-partner-account" form="user"/>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>

          <TableRow className='user-table-row'>
            <TableCell align="left" className='user-table-row'></TableCell>
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
          {visibleRows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button variant="outlined" size="small">
                  {row.user}
                </Button>
              </TableCell>
              <TableCell align="left">
                <DotStatus status={row.connectivity}/>
                {row.connectivity}
              </TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left"><span className='span-link'>{row.issues}</span></TableCell>
              <TableCell align="left">{row.created}</TableCell>
              <TableCell align="left">
                <Select
                  value={row.createdBy}
                  // defaultValue={row.createdBy}
                  onChange={(e) => handleChangeRT(e, index)}
                  autoWidth
                  style={{backgroundColor: "rgba(235, 244, 254, 1)", fontWeight: 700, fontSize: "14px", fontFamily: "Sora", maxWidth:"10rem"}}
                >
                  {riskTypeData.map((rType, i) =>(
                    <MenuItem key={i} value={rType}>{rType}</MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell align="left">
                <Select
                  value={row.rImpact}
                  onChange={e => handleChangeRI(e,index)}
                  autoWidth
                  style={{backgroundColor: ( row.rImpact == "Low" ? "rgba(15, 181, 174, 0.2)" : row.rImpact == "Critical" ? "rgba(234, 56, 41, 0.2)" : row.rImpact === "Medium" ? "rgba(246, 133, 17, 0.2)" : row.rImpact === "High" ? "rgba(249, 178, 8, 0.2)" : "rgba(240, 242, 243, 1)"), fontWeight: 700, fontSize: "14px", fontFamily: "Sora"}}
                >
                  {riskImpactData.map((rImpact, i) => (
                    <MenuItem key={i} value={rImpact}>
                      {rImpact}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell align="left">
                <Select
                  value={row.rLevel}
                  onChange={e => handleChangeRL(e,index)}
                  autoWidth
                  style={{backgroundColor: "rgba(240, 242, 243, 1)", fontWeight: 700, fontSize: "14px", fontFamily: "Sora"}}
                >
                  {riskLevelData.map((rLevel, i) => (
                    <MenuItem key={i} value={rLevel}>
                      {rLevel}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
    </>
}

export default TableUserAccounts;