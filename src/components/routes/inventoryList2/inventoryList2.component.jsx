import * as React from 'react';
import HeaderComponent from "../../header/header.component";
import Card from "../../card/card.component";
import '../../card/card.styles.scss'
import Ticket from '../../../assets/images/ticket.svg';
import ConectionYellowSvg from '../../../assets/images/conectionYellow.svg'
import ConectionRedSvg from '../../../assets/images/conectionRed.svg'
import "./inventoryList.styles.scss";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Title } from "../partnerAccount/title/Title";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Button, Grid } from '@mui/material';
import DotStatus from '../../dotStatus/DotStatus';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
const cards = [
    {
      title: "Last scan performed",
      priority: false,
      quantity: "01-01-2022 20:00:00 (UTC+02:00)",
      icon: Ticket,
      total: null,
      status: null,
      link: "/",
    },
    {
      title: "Error notifications",
      priority: false,
      quantity: 5,
      icon: null,
      total: 10,
      status: "GREEN",
      link: "/",
    },
    {
      title: "New devices",
      priority: false,
      quantity: 4,
      icon: ConectionYellowSvg,
      total: 10,
      status: null,
      link: "/",
    },
    {
      title: "Unassigned risk types",
      priority: false,
      quantity: 10,
      icon: ConectionRedSvg,
      total: 16,
      status: null,
      link: "/",
    },
];
function createDateError (errorType, errorDescription, date){
    return {errorType, errorDescription, date}
};
function createDataPrompt(id, text){
    return {id,text}
};
function createDataExternal(newButton,deviceName, physicalSite,type, os, ipAddress, macAddress,rImpact,rLevel) {
    return {newButton, deviceName, physicalSite,type, os, ipAddress, macAddress,rImpact,rLevel};
  }
  
  const rowsExternal = [
    createDataExternal('New', 'device-name-001', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048","Critical","Operational"),
    createDataExternal('New', 'device-name-002', "Placeholder", "Laptop", "Windows","192.4.240.232:2048", "192.4.240.232:2048", "High","Legal & compliance"),
    createDataExternal('New', 'device-name-003', "Placeholder", "Laptop", "Windows","192.4.240.232:2048", "192.4.240.232:2048", "Medium","Reputational"),
    createDataExternal('New', 'device-name-004', "Placeholder", "Laptop", "Windows","192.4.240.232:2048", "192.4.240.232:2048", "Low","Reputational"),
    createDataExternal('New', 'device-name-005', "Placeholder", "Phone", "iOS","192.4.240.232:2048", "192.4.240.232:2048", "Medium","Reputational"),
    createDataExternal('New', 'device-name-006', "Placeholder", "Server", "Linux","192.4.240.232:2048", "192.4.240.232:2048", "Low","Legal & compliance"),
    createDataExternal('New', 'device-name-007', "Placeholder", "Server", "Linux","192.4.240.232:2048", "192.4.240.232:2048", "Critical","Reputational"),
    createDataExternal('New', 'device-name-008', "Placeholder", "Phone", "iOS","192.4.240.232:2048", "192.4.240.232:2048", "Medium","Operational"),
    createDataExternal('New', 'device-name-009', "Placeholder", "Tablet", "iOS","192.4.240.232:2048", "192.4.240.232:2048", "High","Legal & compliance"),
    createDataExternal('New', 'device-name-0010', "Placeholder", "Tablet", "iOS","192.4.240.232:2048", "192.4.240.232:2048", "Medium","Legal & compliance"),
    createDataExternal('New', 'device-name-0011', "Placeholder", "Laptop", "MacOS","192.4.240.232:2048", "192.4.240.232:2048", "Low","Operational"),
  ];
const dataPrompt = [
    createDataPrompt("0","Starting Nmap 7.60 (https: //nmap.org ) at 2019-06-28 10:57 EDT"),
    createDataPrompt("1","Nap scan report for Vigor.router (192.168.4.1)"),
    createDataPrompt("2","Host is up (0.00039s latency)."),
    createDataPrompt("3","MAC Address: 00: 1D: AA: B8:60:B0 (DrayTek)"),
    createDataPrompt("4","Nap scan report for 192.168.4.10"),
    createDataPrompt("5","Host is up (0.00058s latency)."),
    createDataPrompt("6","MAC Address: B8:27: EB:D3:98:2D (Raspberry Pi Foundation)"),
    createDataPrompt("7","Nap scan report for 192.168.4.11"),
    createDataPrompt("8","Host is up (0.074s latency)."),
    createDataPrompt("9","MAC Address: E4:F0:42:58:FF:98 (Unknown)"),
    createDataPrompt("10","Nap scan report for 192.168.4.12"),
    createDataPrompt("11","Host is up (0.10s latency)."),
    createDataPrompt("12","MAC Address: D8:50:6:7F:7F: A7 (Asustek Computer)"),
    createDataPrompt("13","Nap scan report for 192.168.4.13"),
    createDataPrompt("14","Host is up (-0.10s latency)."),
    createDataPrompt("15","MAC Address: B4:B0:17:99:23:1C (Avaya)"),
    createDataPrompt("16","Nap scan report for 192.168.4.15"),
    createDataPrompt("17","Host is up (-0.10s latency)."),
    createDataPrompt("18","MAC Address: 44:6D:57:6E: 5F:56 (Liteon Technology)"),
    createDataPrompt("19","Nap scan report for 192.168.4.17"),
    createDataPrompt("20","Completed"),
];

const errorRows = [
    createDateError("IP not found", "Ip not found description goes here, Ip not found description goes here", "01-01-2022 20:20:00 (UTC+02:00)"),
    createDateError("Device not found", "Device not found description goes here, Device not found description goes here", "01-01-2022 20:20:00 (UTC+02:00)"),
    createDateError("Device not found", "Device not found description goes here, Device not found description goes here", "01-01-2022 20:20:00 (UTC+02:00)"),
    createDateError("IP not found", "Ip not found description goes here, Ip not found description goes here", "01-01-2022 20:20:00 (UTC+02:00)"),
    createDateError("Device not found", "Device not found description goes here, Device not found description goes here", "01-01-2022 20:20:00 (UTC+02:00)"),
    
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

  const type =[
    "Laptop",
    "Phone",
    "Server",
    "Tablet"
]
const os =[
    "MacOS",
    "Windows",
    "iOS",
    "Linux"
]
  const opciones =[{label: "Fast"},
  {label: "Deep"},
  {label: "Ultra"}
];
const InventoryList2 = () =>{
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searched, setSearched] = React.useState("");


  const [testRt, setTestRt] = React.useState("");
  const [testRL, setTestRl] = React.useState("");
  const [testRI, setTestRI] = React.useState("");

  const [searchError, setSearchError] = React.useState("");
  const [filtroError,setFiltroError] = React.useState(errorRows);

  const handleFilterError = () => {
    const filteredData = errorRows.filter(dato => {
      const matchSearch = searchError === "" ? true : dato.errorType.toLowerCase().includes(searchError.toLowerCase());
      return matchSearch;
    });
  
    setFiltroError(filteredData);
  };
  React.useEffect(() => {
    handleFilterError();
  }, [searchError]);

  const [typeDevice, setTypeDevice] = React.useState("");
  const [osType, setOsType] = React.useState("");
  const [riskType, setRiskType] = React.useState("");
  const [riskImpact, setRiskImpact] = React.useState("");
  const [filtroExternal,setFiltroExternal] = React.useState(rowsExternal);
  const [searchExternal, setSearchExternal] = React.useState("");
  
  const handleFilterExternal = () => {
    const filteredData = rowsExternal.filter(dato => {
      const matchTypeDevice = typeDevice === undefined ? true : dato.type.toLowerCase().includes(typeDevice.toLowerCase());
      const matchOsType = osType === undefined ? true : dato.os.toLowerCase().includes(osType.toLowerCase());
      const matchRiskType = riskType === undefined ? true : dato.rLevel.toLowerCase().includes(riskType.toLowerCase());
      const matchRiskImpact = riskImpact === undefined ? true : dato.rImpact.toLowerCase().includes(riskImpact.toLowerCase());
      const matchSearchExternal = searchExternal === "" ? true : dato.deviceName.toLowerCase().includes(searchExternal.toLowerCase());
      return matchTypeDevice && matchOsType && matchRiskType && matchRiskImpact && matchSearchExternal;
    });
  
    setFiltroExternal(filteredData);
  };
  React.useEffect(() => {
    handleFilterExternal();
  }, [typeDevice, osType, riskType, riskImpact, searchExternal]);

  const handleClearFiltersExternal = () => {
    setTypeDevice("");
    setOsType("");
    setRiskType("");
    setRiskImpact("");
  };

  const [typeDevice2, setTypeDevice2] = React.useState("");
  const [osType2, setOsType2] = React.useState("");
  const [riskType2, setRiskType2] = React.useState("");
  const [riskImpact2, setRiskImpact2] = React.useState("");
  const [filtroInternal,setFiltroInternal] = React.useState(rowsExternal);
  const [searchInternal, setSearchInternal] = React.useState("");
  
  const handleFilterInternal = () => {
    const filteredData = rowsExternal.filter(dato => {
      const matchTypeDevice = typeDevice2 === undefined ? true : dato.type.toLowerCase().includes(typeDevice2.toLowerCase());
      const matchOsType = osType2 === undefined ? true : dato.os.toLowerCase().includes(osType2.toLowerCase());
      const matchRiskType = riskType2 === undefined ? true : dato.rLevel.toLowerCase().includes(riskType2.toLowerCase());
      const matchRiskImpact = riskImpact2 === undefined ? true : dato.rImpact.toLowerCase().includes(riskImpact2.toLowerCase());
      const matchSearchExternal = searchInternal === "" ? true : dato.deviceName.toLowerCase().includes(searchInternal.toLowerCase());
      return matchTypeDevice && matchOsType && matchRiskType && matchRiskImpact && matchSearchExternal;
    });
  
    setFiltroInternal(filteredData);
  };
  React.useEffect(() => {
    handleFilterInternal();
  }, [typeDevice2, osType2, riskType2, riskImpact2, searchInternal]);

  const handleClearFiltersInternal = () => {
    setTypeDevice2("");
    setOsType2("");
    setRiskType2("");
    setRiskImpact2("");
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
      stableSort(rowsExternal).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [page, rowsPerPage],
  );
    const [consoleContent, setConsoleContent] = useState('');
    const writeToConsole = (message) => {
        setConsoleContent((prevContent) => prevContent + message + '\n');
    };
    const [startScan, setStartScan] = useState(false);
    const handleStartScan = () => {
        setStartScan(true);
    }

    return(
        <>
        
        <HeaderComponent links={""}>Inventory List</HeaderComponent>
        <section className="section-style">
            <Grid container spacing={1} className="card-container">
                {startScan ? cards.map((card, index) => (
                    <Grid item xs={12} md={6} lg={3}>
                        <Card
                            title={card.title}
                            priority={card.priority}
                            quantity={card.quantity}
                            icon={card.icon}
                            total={card.total}
                            status={card.status}
                            link={card.link} />
                    </Grid>
                )):null}
                
            </Grid>
        </section>
        <section className="commandPrompt">
            <h4 className="title-partner">Scaning command prompt</h4>
            {startScan ? 
            <div className="frame">
                <p>100%</p>
            </div> 
                :null}
                
        </section>
                <Paper elevation={1} className="comandos">
                    <section className="encabezado"> 
                        <div className="newDev">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 4C7.67 2.75 9.75 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 10.19 2.47999 8.48999 3.32999 7.01999L12 12" stroke="#3E4852" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001" stroke="#3E4852" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <p>New devices: 4</p>
                        </div>
                        <div className="startScan" onClick={handleStartScan}>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 11.9994V8.43941C4 4.01941 7.13 2.20941 10.96 4.41941L14.05 6.19941L17.14 7.97941C20.97 10.1894 20.97 13.8094 17.14 16.0194L14.05 17.7994L10.96 19.5794C7.13 21.7894 4 19.9794 4 15.5594V11.9994Z" stroke="white" strokeWidth="2.5" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <p>Start scan</p>
                        </div>
                    </section>
                    <div className="prompt">
                        {startScan ? 
                         <ul>
                            {dataPrompt.map((text) => (
                                <li key={text.id} className="textPrompt">{text.text}</li>
                            ))}
                       </ul>
                        :<p className="textPrompt">Press start scan button to start the process...</p>}
                    </div>
                </Paper>
                <section className="table">
                <h4 className="title-partner">Error notifications</h4>
                
                    <Paper elevation={1} className="errorNotifications"> 
                        <div>
                            <button className="gear-button">
                                <FontAwesomeIcon icon={faCog} />
                            </button>
                            <input type="text" className="input-search" placeholder="Search..." onChange={(event)=>{setSearchError(event.target.value)}}/>
                        </div>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>

                                <TableRow className='user-table-row'>
                                    <TableCell align="left" className='user-table-row'>                        
                                    </TableCell>
                                    <TableCell align="left" className='user-table-row'>Error type</TableCell>
                                    <TableCell align="left" className='user-table-row'>Error description</TableCell>
                                    <TableCell align="rigth" className='user-table-row'>Date and time</TableCell>
                                </TableRow>
                            </TableHead>
                            {startScan ? <TableBody>
                                {filtroError.map((rows,index)=>{
                                    return(
                                        <TableRow style={{borderLeft:"3px solid #ea3829"}} key={index}>
                                            
                                            <TableCell style={{borderLeftColor: "#ea3829", borderLeft:"2px"}}> 

                                                    <svg className="options" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M15.9965 12H16.0054" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M11.9955 12H12.0045" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7.99451 12H8.00349" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                
                                            </TableCell>
                                            <TableCell><span className='span-link'>{rows.errorType}</span></TableCell>
                                            <TableCell>{rows.errorDescription}</TableCell>
                                            <TableCell>{rows.date}</TableCell>
                                        </TableRow>
                                    )
                                })}
                                
                            </TableBody>
                            :<div className='Error'><p>No results to display...</p></div>}
                            
                        </Table>
                    </Paper>
                </section>
                <section className="table">
                <h4 className="title-partner">Network external IPs</h4>
                    <Paper elevation={1} className="errorNotifications">
                        <div>
                            <button className="gear-button">
                                <FontAwesomeIcon icon={faCog} />
                            </button>
                            <input type="text" className="input-search" placeholder="Search..." onChange={(event)=>{setSearchExternal(event.target.value)}}/>
                        </div>

                        <div className="text-auto">

                            <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={type}
                            value={typeDevice}
                            onChange={(event)=>{setTypeDevice(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="type-of-scan"
                            options={os}
                            value={osType}
                            onChange={(event)=>{setOsType(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Os" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="last-scan"
                            options={riskTypeData}
                            value={riskType}
                            onChange={(event)=>{setRiskType(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Risk type" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={riskImpactData}
                            value={riskImpact}
                            onChange={(event)=>{setRiskImpact(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Risk impact" />}
                            />
                            <div className="label" onClick={handleClearFiltersExternal}>
                            <div className="textWrapper">Clear all</div>
                            </div>
                        </div> 
                        <TableContainer component={Paper}>

                        <Table sx={{ minWidth: 650 }} aria-label="simple table">

                            <TableHead>

                            <TableRow className='user-table-row'>
                                <TableCell align="left" className='user-table-row'></TableCell>
                                <TableCell align="left" className='user-table-row'></TableCell>
                                <TableCell align="left" className='user-table-row'>Device name</TableCell>
                                <TableCell align="left" className='user-table-row'>Physical site</TableCell>
                                <TableCell align="left" className='user-table-row'>Type</TableCell>
                                <TableCell align="left" className='user-table-row'>OS</TableCell>
                                <TableCell align="left" className='user-table-row'>Ip Address</TableCell>
                                <TableCell align="left" className='user-table-row'>MAC address</TableCell>
                                <TableCell align="left" className='user-table-row'>Risk type</TableCell>
                                <TableCell align="left" className='user-table-row'>Risk impact</TableCell>
                            </TableRow>
                            </TableHead>
                            {startScan ? <TableBody>
                            {filtroExternal.map((row, index) => (
                                <TableRow
                                key={row.deviceName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>
                                    <svg className="options" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.9965 12H16.0054" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.9955 12H12.0045" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.99451 12H8.00349" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Button variant="outlined" size="small">
                                    {row.newButton}
                                    </Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span className='span-link'>{row.deviceName}</span>
                                </TableCell>
                                <TableCell align="left">{row.physicalSite}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.os}</TableCell>
                                <TableCell align="left">{row.ipAddress}</TableCell>
                                <TableCell align="left">{row.macAddress}</TableCell>
                                <TableCell align="left">
                                    <span className='riskType'>{row.rLevel}</span>
                                        
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
                                </TableRow>
                            ))}
                            </TableBody>:<div className='Error'><p>No results to display...</p></div>}
                            
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={errorRows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </TableContainer>
                    </Paper>
                </section>
                <section className="table">
                <h4 className="title-partner">Network internal IPs</h4>
                <Paper elevation={1} className="errorNotifications">
                        <div>
                            <button className="gear-button">
                                <FontAwesomeIcon icon={faCog} />
                            </button>
                            <input type="text" className="input-search" placeholder="Search..." onChange={(event)=>{setSearchInternal(event.target.value)}}/>
                        </div>

                        <div className="text-auto">

                            <Autocomplete
                            disablePortal
                            id="typeDevice2"
                            options={type}
                            value={typeDevice2}
                            onChange={(event)=>{setTypeDevice2(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="type-of-scan2"
                            options={os}
                            value={osType2}
                            onChange={(event)=>{setOsType2(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Os" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="last-scan2"
                            options={riskTypeData}
                            value={riskType2}
                            onChange={(event)=>{setRiskType2(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Risk type" />}
                            />
                            <Autocomplete
                            disablePortal
                            id="combo-box-demo2"
                            options={riskImpactData}
                            value={riskImpact2}
                            onChange={(event)=>{setRiskImpact2(event.target.outerText)}}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Risk impact" />}
                            />
                            <div className="label" onClick={handleClearFiltersInternal}>
                            <div className="textWrapper">Clear all</div>
                            </div>
                        </div> 
                        <TableContainer component={Paper}>

                        <Table sx={{ minWidth: 650 }} aria-label="simple table">

                            <TableHead>

                            <TableRow className='user-table-row'>
                                <TableCell align="left" className='user-table-row'></TableCell>
                                <TableCell align="left" className='user-table-row'></TableCell>
                                <TableCell align="left" className='user-table-row'>Device name</TableCell>
                                <TableCell align="left" className='user-table-row'>Physical site</TableCell>
                                <TableCell align="left" className='user-table-row'>Type</TableCell>
                                <TableCell align="left" className='user-table-row'>OS</TableCell>
                                <TableCell align="left" className='user-table-row'>Ip Address</TableCell>
                                <TableCell align="left" className='user-table-row'>MAC address</TableCell>
                                <TableCell align="left" className='user-table-row'>Risk type</TableCell>
                                <TableCell align="left" className='user-table-row'>Risk impact</TableCell>
                            </TableRow>
                            </TableHead>
                            {startScan ? <TableBody>
                            {filtroInternal.map((row, index) => (
                                <TableRow
                                key={row.deviceName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>
                                    <svg className="options" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15.9965 12H16.0054" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M11.9955 12H12.0045" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7.99451 12H8.00349" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <Button variant="outlined" size="small">
                                    {row.newButton}
                                    </Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span className='span-link'>{row.deviceName}</span>
                                </TableCell>
                                <TableCell align="left">{row.physicalSite}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.os}</TableCell>
                                <TableCell align="left">{row.ipAddress}</TableCell>
                                <TableCell align="left">{row.macAddress}</TableCell>
                                <TableCell align="left">
                                    {row.rLevel}
                                        
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
                                </TableRow>
                            ))}
                            </TableBody>:<div className='Error'><p>No results to display...</p></div>}
                            
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={errorRows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </TableContainer>
                    </Paper>
                </section>
            </>
        
    )
};

export default InventoryList2;