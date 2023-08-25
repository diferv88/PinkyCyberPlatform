import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


function createData(devices, ipaddress, macaddress, status, issue, detectiondate,recommendation) {
    return {devices, ipaddress, macaddress, status, issue, detectiondate,recommendation};
  }

  const rows = [
    createData('device-name-001', "192.4.240.232:2048", "192.4.240.232:2048", "Blocked","Threat detected", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-002', "192.4.240.232:2048", "192.4.240.232:2048", "Malfunctioning","---", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-003', "192.4.240.232:2048", "192.4.240.232:2048", "Malfunctioning","---", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-004', "192.4.240.232:2048", "192.4.240.232:2048", "Malfunctioning","---", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-005', "192.4.240.232:2048", "192.4.240.232:2048", "Blocked","Threat detected", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-006', "192.4.240.232:2048", "192.4.240.232:2048", "Blocked","Threat detected", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-007', "192.4.240.232:2048", "192.4.240.232:2048", "Blocked","Threat detected", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-008', "192.4.240.232:2048", "192.4.240.232:2048", "Malfunctioning","---", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-009', "192.4.240.232:2048", "192.4.240.232:2048", "Malfunctioning","---", "2022-02-20 14:30:24", "Learn more"),
    createData('device-name-010', "192.4.240.232:2048", "192.4.240.232:2048", "Blocked","Threat detected", "2022-02-20 14:30:24", "Learn more"),
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
    <section className='modal'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
  
          <TableHead>
  
            <TableRow className='user-table-row'>
              <TableCell align="left" className='user-table-row'></TableCell>
              <TableCell align="left" className='user-table-row'>Devices</TableCell>
              <TableCell align="left" className='user-table-row'>IP address</TableCell>
              <TableCell align="left" className='user-table-row'>MAC address</TableCell>
              <TableCell align="left" className='user-table-row'>Status</TableCell>
              <TableCell align="left" className='user-table-row'>Issue</TableCell>
              <TableCell align="left" className='user-table-row'>Detection date</TableCell>
              <TableCell align="left" className='user-table-row'>Recomendation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="left"><span className='span-link'>{row.devices}</span></TableCell>
                <TableCell align="left">{row.ipaddress}</TableCell>
                <TableCell align="left">{row.macaddress}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">{row.issue}</TableCell>
                <TableCell align="left">{row.detectiondate}</TableCell>
                <TableCell align="left"><span className='span-link'>{row.recommendation}</span></TableCell>
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
      </section>
      </>
  };
const ProblemDevices = (props) => {
    return(
        <>
            <div className='headtable'>
              <h4 className="title-partner">Problem devices (48)</h4>
              <span className='cerrar' onClick={(event)=>(props.setModal())}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#EA3829" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#EA3829" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#EA3829" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <div>
                <button className="gear-button">
                  <FontAwesomeIcon icon={faCog} />
                </button>
                <input type="text" className="input-search" placeholder="Search..."/>
            </div>
            <TableUserAccounts/>
        </>
    )
};

export default ProblemDevices;