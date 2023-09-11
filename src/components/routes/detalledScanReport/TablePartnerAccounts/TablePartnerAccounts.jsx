/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./../detailedScanReport.styles.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import DotStatus from "../../../dotStatus/DotStatus";
import IconWarning from '../../../../assets/images/warning.svg';
import IconFlagHigh from '../../../../assets/images/flag-high.svg';
import IconFlagCriticalN from '../../../../assets/images/flagCriticalNo.svg';
import IconFlagLow from '../../../../assets/images/flag-low.svg';
import IconLampCharge from '../../../../assets/images/lamp-charge.svg';
import IconError from '../../../../assets/images/close-circle.svg';
import IconAprobal from '../../../../assets/images/tick-circle.svg';
import CheckBoxFilter from "./../CheckBoxFilter/CheckBoxFilter";
import "../TableUserAccounts/TableUserAccounts.styles.scss"
import { Button, Grid, Icon, Modal } from "@mui/material";
import { 
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import "./TablePartnersAccounts.styles.scss"
import { useEffect } from "react";
import { useState } from "react";

const myModal = {
  position: 'absolute',
  fontFamily: "Sora",
  width: "1223px",
  height: "100%",
  overflow:'scroll',
  backgroundColor: 'white',
  borderRadius: "16px",
  border: '1px solid #E1E4E7',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)!important',
};

const titleModal = {
  position: "absolute",
  fontFamily: "Sora",
  top: "48px",
  left: "136px",
}; 

const bodyModalStyle = {
  position: "absolute",
  fontFamily: "Sora",
  width: "1056px",
  top: "113px",
  left: "136px",
}

const paragraphModal ={
  fontFamily: "Sora",
  width: "528px",
  height: "48px",
  position: "absolute",
  top: "121px",
  left: "136px",
  fontWeight: "400",
  color: "#3E4852",
  fontZize: "16px",
};


function createData(confirmed, vulnerability, Host, Protocol, port,severety) {
    return {
      confirmed,
      vulnerability,
      Host,
      Protocol, 
      port,
      severety
    };
  }
  
  const rows = [
    createData('Yes', "HTTP Strict Transport Security (HSTS) Errors and Warnings", "GET", "https://www.website.com/", "Port Value", "Critical"),
    createData('Yes', "Out-of-date Version (Bootstrap)", "GET", "https://www.website.com/assets/js/bootstrap.min.js",  "","Critical",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/assets/js/vendor/jquery-3.2.1.min.js","","Critical",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/assets/js/vendor/jquery-3.2.1.min.js","Port Value","Critical",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/css/assets/js/vendor/jquery-3.2.1.min.js", "Port Value","Critical",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/assets/js/vendor/jquery-3.2.1.min.js",  "","High",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/icon/assets/js/vendor/jquery-3.2.1.min.js	", "","High",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/instagram/assets/js/vendor/jquery-3.2.1.min.js	",  "","High",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/logo/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value","High",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/product/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value","High",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value","Medium",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/assets/js/vendor/jquery-3.2.1.min.js	",  "","Medium",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/jquery-3.2.1.min.js	",  "","Medium",),
    createData('No', "Weak Ciphers Enabled", "GET", "https://www.website.com/", "","Medium",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com//cfdi/", "","Medium",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com//cfdi/index.php", "","Medium",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/assets/js/vendor/jquery-3.2.1.min.js", "Port Value","Medium",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/assets/js/vendor/assets/js/vendor/jquery-3.2.1.min.js", "Port Value","Medium",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/jquery-3.2.1.min.js", "","Medium",),
    createData('No', "Weak Ciphers Enabled", "GET", "https://www.website.com/", "","Medium",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com/cfdi/", "Port Value","Medium",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com/cfdi/index.php", "","Low",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/assets/js/vendor/jquery-3.2.1.min.js", "Port Value","Low",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/assets/js/vendor/jquery-3.2.1.min.js", "","Low",),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/jquery-3.2.1.min.js", "","Low",),
    createData('No', "Weak Ciphers Enabled", "GET", "https://www.website.com/", "","Low",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com/cfdi/", "Port Value","Low",),
    createData('No', "[Possible] Cross-site Request Forgery", "GET", "https://www.website.com//cfdi/index.php", "","Low",),
  ];
  
  
  const headCells = [
    {
      id: 'confirmed',
      numeric: false,
      disablePadding: true,
      label: 'Confirmed',
    },
    {
      id: 'vulnerability',
      numeric: true,
      disablePadding: false,
      label: 'Vulnerability',
    },
    {
      id: 'Host',
      numeric: true,
      disablePadding: false,
      label: 'Host',
    },
    {
      id: 'Protocol',
      numeric: true,
      disablePadding: false,
      label: 'Protocol(TCP/UDP)',
    },
    {
      id: 'port',
      numeric: true,
      disablePadding: false,
      label: 'Port',
    },
  ];
  
  function EnhancedTableHead(props) {
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align='left'
              size="medium"
              padding={headCell.disablePadding ? 'none' : 'normal'}         
            >
              <TableSortLabel className="tableSortLabel" >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  const TablePartnerAccount = () => {

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [modalInfo, setModalInfo] = useState([])
    const [openList, setOpenList] = useState(false);
    const [dataTableFillter, setDataTableFillter] = useState([])
    const [dataTable, setDataTable] = useState(rows)
    const [severityFilter, setSeverityFilter] = useState({
      Critical: false,
      High: false,
      Medium: false,
      Low: false,
      Information: false,
    })
    const [open, setOpen] = React.useState(false);
    // const [selectedRow, setSelectedRow] = useState({});


    const handleOpenList = () => {
      setOpenList(!openList);
    }

    const handleOpen = (i) => {
      setOpen(true)
      setModalInfo(rows[i])
    };

    const handleClose = () => {
      setOpen(false)
    };

    const handleChangeCheckBoxFilter = (e) => {
      setSeverityFilter({
        ...severityFilter,
        [e.target.value]: e.target.checked,
      });
      if (e.target.checked) {
        const filterData = rows.filter(item => item.severety == e.target.value);
        setDataTableFillter([
          ...dataTableFillter, ...filterData
        ])
      }else{
        const filterData = dataTableFillter.filter(item => item.severety !== e.target.value);
        setDataTableFillter([...filterData])
      }
    }

    const handleClick = (name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;


    const DataListOnboardingContact = (
      <>
        <List
          sx={{ width: '100%', bgcolor: 'rgba(15, 181, 174, 0.1)', marginBottom: 2, borderRadius:'8px'}}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="list-container"
        >
          <ListItemButton onClick={handleOpenList}>
            <ListItemText className="text-container1" primary="Vulnerability remediation"/>
            {openList ? <p className="link-previus-modal" style={{textDecoration: 'underline',fontFamily:'Sora', fontSize:'14px', fontWeight:700, }} >Hide</p> : <p className="link-previus-modal" style={{textDecoration: 'underline',fontFamily:'Sora', fontSize:'14px', fontWeight:700, }}>Show</p>}
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>
                <Grid container spacing={1}>
                  <Grid item md={8}>
                    <p style={{fontFamily:'Sora', fontSize:'17px', fontWeight: 700  , color: '#000'}}>Remedy</p>
                    <p style={{fontFamily:'Sora', color:'#3E4852', fontWeight: 400, fontSize: '14px'}}>Ideally, after fixing the errors and warnings, you should consider adding your domain to the the HSTS preload list. This will ensure that browsers automatically connect your website by using HTTPS, actively preventing users from visiting your site using HTTP. Since this list is hardcoded in users&rsquo; browsers, it will enable HSTS even before they visit your page for the first time, eliminating the need for Trust On First Use (TOFU) with its associated risks and disadvantages. Unless you fix the errors and warnings your website won&rsquo;t meet the conditions required to enter the browser&rsquo;s preload list.</p>
                  </Grid>
                  <Grid item md={2}>
                    <p style={{fontFamily:'Sora', fontSize:'17px', fontWeight: 700  , color: '#000'}}>Classification</p>
                    <Grid container spacing={0.5} width={'20rem'} sx={{border: '1px solid #E1E4E7', borderRadius:"8px", backgroundColor:"#fff"}}>
                      <Grid item md={7} sx={{borderRight: 1}}>
                        <p>OWASP 2013</p>
                        <p>OWASP 2017</p>
                        <p>SANS Top 25</p>
                        <p>WASC</p>
                        <p>ISO27001</p>
                      </Grid>
                      <Grid item md={5} textAlign='end'>
                        <p style={{color:'#3892F3',display: 'flex', marginRight:'10px', justifyContent:'end'}}><u>A5</u></p>
                        <p style={{color:'#3892F3',display: 'flex', marginRight:'10px', justifyContent:'end'}}><u>A6</u></p>
                        <p style={{color:'#3892F3',display: 'flex', marginRight:'10px', justifyContent:'end'}}><u>16</u></p>
                        <p style={{color:'#3892F3',display: 'flex', marginRight:'10px', justifyContent:'end'}}><u>15</u></p>
                        <p style={{color:'#3892F3',display: 'flex', marginRight:'10px', justifyContent:'end'}}><u>A.14.1.2</u></p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                {/* <ListItemText
                  className="text-item1"
                  primary="Browser vendors declared:" 
                  // secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
                /> */}
                <Grid container spacing={1}>
                  <Grid item className="test-container-grid">
                    <p style={{fontFamily:'Sora', fontSize:'17px', fontWeight: 700  , color: '#000'}}>Browser vendors declared:</p>
                    <ul className="test-container ulContainer">
                      <li style={{listStyle:"initial",}}>Serve a valid certificate</li>
                      <li style={{listStyle:"initial",}}>If you are listening on port 80, redirect all domains from HTTP to HTTPS on the same host. Serve all subdomains over HTTPS:</li>
                      <li>
                        <ul>
                          <li style={{listStyle:"initial",}}>
                            In particular, you must support HTTPS for the www subdomain if a DNS record for that subdomain exists
                          </li>
                        </ul>
                      </li>
                      <li style={{listStyle:"initial",}}>Serve an HSTS header on the base domain for HTTPS requests:</li>
                      <li>
                        <ul>
                          <li style={{listStyle:"initial",}}>The  max-age  must be at least 31536000 seconds (1 year)</li>
                          <li style={{listStyle:"initial",}}>The  includeSubDomains  directive must be specified</li>
                          <li style={{listStyle:"initial",}}>The  preload  directive must be specified</li>
                          <li style={{listStyle:"initial",}}>
                          If you are serving an additional redirect from your HTTPS site, that redirect must have the HSTS header (rather than the page it redirects to)
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <Grid container spacing={1}>
                  <Grid item>
                    <p style={{fontFamily:'Sora', fontSize:'17px', fontWeight: 700  , color: '#000'}}>External References</p>
                    <ul>
                      <li style={{fontFamily:'Sora', fontSize:'14px', fontWeight: 400, color: '#3892F3', listStyle:'initial'}}>
                        <u>HTTP Strict Transport Security (HSTS) HTTP Header</u>
                      </li>
                      <li style={{fontFamily:'Sora', fontSize:'14px', fontWeight: 400, color: '#3892F3', listStyle:'initial' }}>
                        <u>Wikipedia - HTTP Strict Transport Security Implementation</u>
                      </li>
                      <li style={{fontFamily:'Sora', fontSize:'14px', fontWeight: 400, color: '#3892F3', listStyle:'initial' }}>
                        <u>Check HSTS Preload status and eligibility</u>
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </>
    )

    const bodyModal = (
      <Box sx={myModal} >
        <h2 style={titleModal}>Possible Cross-site Request Forgery</h2>
        <div style={bodyModalStyle}>
          <p style={{fontSize: '14px', fontWeight: 400,}}>Pinky.ai detected errors during parsing of Strict-Transport-Security header.</p>
          <p><strong>Impact</strong></p>
          <p>The HSTS Warning and Error may allow attackers to bypass HSTS, effectively allowing them to read and modify your communication with the website. </p>
          <p><strong>Vulerabilities</strong></p>
          <p>1.1. <span style={{color: '#3892F3', fontSize: '14px'}}>https://www.website.com/</span></p>
          <div style={{border:'1px solid #E1E4E7', borderRadius: '8px'}}>
            <Grid container spacing={0} style={{width: '100%'}}>
              <Grid item sx={{ml: 5,}} md={3}>
                <p ><strong>Error</strong></p>
                <p style={{fontSize: '14px', fontWeight: 400,}}>Preload directive not present	</p>
              </Grid>
              <Grid item sx={{ml: 5}} md={7.5}>
                <p><strong>Resolution</strong></p>
                <p style={{fontSize: '14px', fontWeight: 400,}}>Submit domain for inclusion in browsers&rsquo; HTTP Strict Transport Security (HSTS) preload list.</p>
              </Grid>
            </Grid>
          </div>
          <p><strong>Request</strong></p>
          <div style={{backgroundColor: "#F0F2F3", borderRadius: '0px, 8px, 8px, 8px', borderColor: '#E1E4E7'}}>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px',fontFamily:"Roboto Mono"}}>01</span>GET / HTTP/1.1</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>02</span>Host: https://www.website.com/</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>03</span>Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>04</span>Accept-Encoding: gzip, deflate</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>05</span>Accept-Language: en-us,en;q=0.5</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>06</span>Cache-Control: no-cache</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>07</span>User-Agent: Mozilla/5.0 (Windows NT 10.0; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36</p>
            <p style={{fontSize: '12px', fontWeight: 500, left: '56px'}}><span style={{fontSize: '12px', fontWeight: 500, color: "#A4AEB8", marginRight: '5px', fontFamily:"Roboto Mono"}}>08</span>X-Scanner: msgrinder</p>
          </div>
          <br />
          {DataListOnboardingContact}
        </div>
      </Box>
    )
    return <>

    <Box sx={{ width: '100%' }} className="Table-Accounts-DetailledSR">
      <Paper sx={{ width: '100%', mb: 2 }}>
        {/* <EnhancedTableToolbar/> */}
        <div className="checkBoxs-div">
            <label className="label-checkbox">Severity filter:</label>
            <CheckBoxFilter onChange={handleChangeCheckBoxFilter} label="Critical" htmlfor="Critical"></CheckBoxFilter>
            <CheckBoxFilter onChange={handleChangeCheckBoxFilter} label="High" htmlfor="High"></CheckBoxFilter>
            <CheckBoxFilter onChange={handleChangeCheckBoxFilter} label="Medium" htmlfor="Medium"></CheckBoxFilter>
            <CheckBoxFilter onChange={handleChangeCheckBoxFilter} label="Low" htmlfor="Low"></CheckBoxFilter>
            <CheckBoxFilter onChange={handleChangeCheckBoxFilter} label="Information" htmlfor="Information"></CheckBoxFilter>
        </div>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead/>
            <TableBody>
              {dataTableFillter.length == 0 ? rows.map((row, index) => {
                const isItemSelected = isSelected(row.partner);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.confirmed)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={
                      row.severety == 'Critical' && row.confirmed == 'Yes' ? 
                      {borderLeft: '5px solid rgba(234, 56, 41, 1)'} 
                      : row.severety == 'Critical' && row.confirmed == 'No' ?
                      {borderLeft: '5px solid rgba(240, 95, 29, 1) '}
                      : row.severety == 'High' ? 
                      {borderLeft: '5px solid rgba(246, 133, 17, 1)'} 
                      : row.severety == 'Medium' ? 
                      {borderLeft: '5px solid rgba(249, 178, 8, 1)'} 
                      : {borderLeft:'5px solid rgba(15, 181, 174, 1)'}}
                  >
                    <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell align="left">
                      <div style={{display:'flex', alignItems:'center'}}>
                        <Icon sx={{mr:1}}>
                          <img src={row.confirmed == 'Yes' ? IconAprobal : IconError} />
                        </Icon>
                        {row.confirmed}
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div style={{display:'flex', alignItems:'center'}}>
                        <Icon sx={{mr: 1}}>
                          <img 
                            src={
                              row.confirmed == 'Yes' && row.severety == 'Critical' ?
                              IconWarning
                              : row.confirmed == 'No' && row.severety == 'Critical' ?
                              IconFlagCriticalN
                              : row.severety == 'High' ?
                              IconFlagHigh
                              : row.severety == 'Medium' ?
                              IconFlagLow
                              : IconLampCharge
                            } width={24} height={24} />
                        </Icon>
                        <span onClick={(event) => handleOpen(event,row)} className='span-link'>
                          <DotStatus status={row.vulnerability}></DotStatus>
                          {row.vulnerability}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                    <Button variant="outlined" style={{border: "1px solid #3E4852", color:"black"}} size="small">
                      {row.Host}
                    </Button>
                    </TableCell>
                    <TableCell align="left" style={{ }}>
                      {row.Protocol}
                    </TableCell>
                    <TableCell align="left">
                      {row.port !== "" ? (
                        <Button variant="outlined" style={{width:'98px', border: "1px solid #3E4852", color:"black", fontSize:'12px'}} size="small">
                          {row.port}
                        </Button>
                      ) : (
                        <>
                          {row.port}
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              }) :  dataTableFillter.map((row, index) => {
                const isItemSelected = isSelected(row.partner);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.confirmed)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={
                      row.severety == 'Critical' && row.confirmed == 'Yes' ? 
                      {borderLeft: '5px solid rgba(234, 56, 41, 1)'} 
                      : row.severety == 'Critical' && row.confirmed == 'No' ?
                      {borderLeft: '5px solid rgba(240, 95, 29, 1) '}
                      : row.severety == 'High' ? 
                      {borderLeft: '5px solid rgba(246, 133, 17, 1)'} 
                      : row.severety == 'Medium' ? 
                      {borderLeft: '5px solid rgba(249, 178, 8, 1)'} 
                      : {borderLeft:'5px solid rgba(15, 181, 174, 1)'}}
                  >
                    <TableCell padding="checkbox">
                    </TableCell>
                    <TableCell align="left">
                      <div style={{display:'flex', alignItems:'center'}}>
                        <Icon sx={{mr:1}}>
                          <img src={row.confirmed == 'Yes' ? IconAprobal : IconError} />
                        </Icon>
                        {row.confirmed}
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div style={{display:'flex', alignItems:'center'}}>
                        <Icon sx={{mr: 1}}>
                          <img 
                            src={
                              row.confirmed == 'Yes' && row.severety == 'Critical' ?
                              IconWarning
                              : row.confirmed == 'No' && row.severety == 'Critical' ?
                              IconFlagCriticalN
                              : row.severety == 'High' ?
                              IconFlagHigh
                              : row.severety == 'Medium' ?
                              IconFlagLow
                              : IconLampCharge
                            } width={24} height={24} />
                        </Icon>
                        <span onClick={(event) => handleOpen(event,row)} className='span-link'>
                          <DotStatus status={row.vulnerability}></DotStatus>
                          {row.vulnerability}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                    <Button variant="outlined" style={{border: "1px solid #3E4852", color:"black"}} size="small">
                      {row.Host}
                    </Button>
                    </TableCell>
                    <TableCell align="left" style={{ }}>
                      {row.Protocol}
                    </TableCell>
                    <TableCell align="left">
                      {row.port !== "" ? (
                        <Button variant="outlined" style={{width:'98px', border: "1px solid #3E4852", color:"black", fontSize:'12px'}} size="small">
                          {row.port}
                        </Button>
                      ) : (
                        <>
                          {row.port}
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
              }
              <Modal  open={open} onClose={(event) => handleClose(event)}>
                {bodyModal}
              </Modal>    
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
    </>
  }

  export default TablePartnerAccount;
  