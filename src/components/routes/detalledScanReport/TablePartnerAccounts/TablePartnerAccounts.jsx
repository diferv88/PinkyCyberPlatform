/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./../detailedScanReport.styles.scss";
import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import DotStatus from "../../../dotStatus/DotStatus";
// import BoxBorderColour from "../../../BoxBorderColour/BoxBorderColour";
// import BoxFullColour from "../../../BoxFullColour/BoxFullColour";
import CheckBoxFilter from "./../CheckBoxFilter/CheckBoxFilter";
import HeaderTable from "./../HeaderTable/HeaderTable";
import "../TableUserAccounts/TableUserAccounts.styles.scss"
import { Button, Modal } from "@mui/material";
import { 
  FormControl,
  FormLabel, 
  InputLabel, 
  MenuItem, 
  OutlinedInput, 
  Stack,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListSubheader
} from "@mui/material";
import "./TablePartnersAccounts.styles.scss"

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


function createData(confirmed, vulnerability, Host, Protocol, port) {
    return {
      confirmed,
      vulnerability,
      Host,
      Protocol, 
      port
    };
  }
  
  const rows = [
    createData('Yes', "HTTP Strict Transport Security (HSTS) Errors and Warnings", "GET", "https://www.website.com/", "Port Value"),
    createData('Yes', "Out-of-date Version (Bootstrap)", "GET", "https://www.website.com/assets/js/bootstrap.min.js",  ""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/assets/js/vendor/jquery-3.2.1.min.js",""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/assets/js/vendor/jquery-3.2.1.min.js","Port Value"),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/css/assets/js/vendor/jquery-3.2.1.min.js", "Port Value"),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/assets/js/vendor/jquery-3.2.1.min.js",  ""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/icon/assets/js/vendor/jquery-3.2.1.min.js	", ""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/instagram/assets/js/vendor/jquery-3.2.1.min.js	",  ""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/logo/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value"),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/img/product/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value"),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/assets/js/vendor/jquery-3.2.1.min.js	",  "Port Value"),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/assets/js/vendor/jquery-3.2.1.min.js	",  ""),
    createData('No', "Out-of-date Version (jQuery)", "GET", "https://www.website.com/factura.php/etc/assets/js/vendor/jquery-3.2.1.min.js	",  ""),
    createData('No', "Weak Ciphers Enabled", "GET", "https://www.website.com/", ""),
  ];
  
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
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
  
  function EnhancedTableToolbar(props) {
    const { numSelected } = props;
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
           <HeaderTable labelButton="Add partner accounts" linkTo="/add-partner-account" form="partner"/>
           <div className="checkBoxs-div">
            <label className="label-checkbox">Severity filter:</label>
            <CheckBoxFilter label="Critical"></CheckBoxFilter>
            <CheckBoxFilter label="High"></CheckBoxFilter>
            <CheckBoxFilter label="Medium"></CheckBoxFilter>
            <CheckBoxFilter label="Low"></CheckBoxFilter>
            <CheckBoxFilter label="Information"></CheckBoxFilter>
          </div>
        
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  }

  const TablePartnerAccount = () => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState([])
    const [openList, setOpenList] = React.useState(false);

    const handleOpenList = () => {
      setOpenList(!openList);
    }

    const handleOpen = (e,i) => {
      console.log("set open modal index ==== ", i)
      console.log("set open modal index ==== ", e)
      setOpen(true)
      setModalInfo(rows[i])
    };

    const handleClose = (e,i) => {
      console.log("set CLOSE modal index ==== ", i)
      setOpen(false)
    };



    const handleClick = (event, name) => {
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
        ),
        [order, orderBy, page, rowsPerPage],
    );

    const DataListOnboardingContact = (
      <>
        <List
          sx={{ width: '100%', bgcolor: '#F0F2F3', marginBottom: 2, }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="list-container"
        >
          <ListItemButton onClick={handleOpenList}>
            <ListItemText className="text-container1" primary="Vulnerability remediation"/>
            {openList ? <p className="link-previus-modal" >Hide</p> : <p className="link-previus-modal" >Show</p>}
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText 
                  className="text-item1"
                  primary="Remedy" 
                  // secondary="Str. 31 August 24, Chișinău, Moldova, Republic of, MD-2001"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                  className="text-item1"
                  primary="Browser vendors declared:" 
                  // secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                className="text-item1"
                primary="External References" 
                secondary="HTTP Strict Transport Security (HSTS) HTTP Header
                Wikipedia - HTTP Strict Transport Security Implementation
                Check HSTS Preload status and eligibility"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* <List
          sx={{ width: '100%', bgcolor: '#F0F2F3', marginBottom: 2 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="list-container"
        >
          <ListItemButton onClick={handleOpenListSL}>
            <ListItemText className="text-container1" primary="Second site location" secondary="Bvd. Ștefan cel Mare 32, Chișinău" />
            {openListSL ? <p className="link-previus-modal" >Hide</p> : <p className="link-previus-modal" >Show</p>}
          </ListItemButton>
          <Collapse in={openListSL} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText 
                  className="text-item1"
                  primary="Physical site location" 
                  secondary="Str. 31 August 24, Chișinău, Moldova, Republic of, MD-2001"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                  className="text-item1"
                  primary="Associated external IPs" 
                  secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText 
                  className="text-item1"
                  primary="Website domain" 
                  secondary="https://www.websitedomain.com"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <List
          sx={{ width: '100%', bgcolor: '#F0F2F3', marginBottom:2 }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          className="list-container"
        >
          <ListItemButton onClick={handleOpenListTL}>
            <ListItemText className="text-container1" primary="Third site location" secondary="Bvd. Dacia 40, Chișinău" />
            {openListTL ? <p className="link-previus-modal" >Hide</p> : <p className="link-previus-modal" >Show</p>}
          </ListItemButton>
          <Collapse in={openListTL} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText 
                  className="text-item1"
                  primary="Physical site location" 
                  secondary="Str. 31 August 24, Chișinău, Moldova, Republic of, MD-2001"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText
                  className="text-item1"
                  primary="Associated external IPs" 
                  secondary="255.255.255.0;  255.255.255.1;  255.255.255.2"
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 2 }}>
                <ListItemText 
                  className="text-item1"
                  primary="Website domain" 
                  secondary="https://www.websitedomain.com"
                />
              </ListItemButton>
            </List>
          </Collapse>
        </List> */}
      </>
    )

    const bodyModal = (row) => (
      <Box sx={myModal} >
        <h2 style={titleModal}>{row.vulnerability}</h2>
        <div style={bodyModalStyle}>
          <p style={{fontSize: '14px', fontWeight: 400,}}>Pinky.ai detected errors during parsing of Strict-Transport-Security header.</p>
          <p><strong>Impact</strong></p>
          <p>The HSTS Warning and Error may allow attackers to bypass HSTS, effectively allowing them to read and modify your communication with the website. </p>
          <p><strong>Vulerabilities</strong></p>
          <p>1.1. <span style={{color: '#3892F3', fontSize: '14px'}}>https://www.website.com/</span></p>
          <p><strong>Error</strong></p>
          <p style={{fontSize: '14px', fontWeight: 400,}}>Preload directive not present	</p>
          <p><strong>Resolution</strong></p>
          <p style={{fontSize: '14px', fontWeight: 400,}}>Submit domain for inclusion in browsers' HTTP Strict Transport Security (HSTS) preload list.</p>
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

    <Box sx={{ width: '100%' }} className="Table-Accounts-Hide-Show">
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead/>
            <TableBody>
              {visibleRows.map((row, index) => {
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
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">{row.confirmed}</TableCell>
                    <TableCell align="left">
                      <span onClick={(event) => handleOpen(event,row)} className='span-link'>
                        <DotStatus status={row.vulnerability}></DotStatus>
                        {row.vulnerability}
                      </span>
                      <Modal  open={open} onClose={(event) => handleClose(event,row)}>
                        {bodyModal(row)}
                      </Modal>   
                    </TableCell>
                    <TableCell align="left">
                    <Button variant="outlined" style={{border: "1px solid #3E4852", color:"black"}} size="small">
                      {row.Host}
                    </Button>
                    </TableCell>
                    <TableCell align="left">
                      {row.Protocol}
                    </TableCell>
                    <TableCell align="left">
                      {row.port !== "" ? (
                        <Button variant="outlined" style={{border: "1px solid #3E4852", color:"black"}} size="small">
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
              })}
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
    
    
    </>

  }

  export default TablePartnerAccount;
  