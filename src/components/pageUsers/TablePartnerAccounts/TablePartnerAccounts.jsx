/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./../userRoll.styles.scss";
import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import DotStatus from "../../dotStatus/DotStatus";
import BoxBorderColour from "../../BoxBorderColour/BoxBorderColour";
import BoxFullColour from "../../BoxFullColour/BoxFullColour";
import CheckBoxFilter from "./../CheckBoxFilter/CheckBoxFilter";
import HeaderTable from "./../HeaderTable/HeaderTable";
import MenuItem from '@mui/material/MenuItem';
import "../TableUserAccounts/TableUserAccounts.styles.scss";
import { useState } from "react";
import Button from "../../button/button.component";
import { FormLabel, Modal, SvgIcon } from "@mui/material";
import checkIcon from "../../../assets/Icons/Check-Icon.svg";
import clouseIcon from "../../../assets/Icons/Clouse-Icon.svg";
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import { RadioGroup, FormControl, } from "@mui/joy";
import { Title } from "../title/Title";
import FormRow from "../formRow/FormRow";
import FormGroup from "../formGroup/FormGroup";
import RadioButton from "../../RadioButton/RadioButton";

function createData(
  id,
  partner,
  connectivity,
  saasc,
  netStatus,
  scan,
  vulnerability,
  status
) {
  return {
    id,
    partner,
    connectivity,
    saasc,
    netStatus,
    scan,
    vulnerability,
    status,
  };
}

const rows = [
  createData(
    0,
    "partner.name.001",
    "Online",
    "-",
    "Red",
    "2023-03-10 14:30:14",
    "80%",
    "Suspended"
  ),
  createData(
    1,
    "long.partner.name.002",
    "Online",
    "128",
    "Yellow",
    "2023-03-5 14:18:14",
    "50%",
    "Suspended"
  ),
  createData(
    2,
    "very.long.partner.name.003",
    "Offline",
    "-",
    "Red",
    "-",
    "100%",
    "Not active"
  ),
  createData(
    3,
    "partner.name.004",
    "Offline",
    "384",
    "Red",
    "-",
    "100%",
    "Not active"
  ),
  createData(
    4,
    "partner.name.005",
    "Online",
    "-",
    "Green",
    "2023-03-10 14:30:14",
    "25%",
    "Active"
  ),
  createData(
    5,
    "long.partner.name.006",
    "Offline",
    "-",
    "Green",
    "2023-03-5 14:18:14",
    "25%",
    "Active"
  ),
  createData(
    6,
    "very.long.partner.name.007",
    "Offline",
    "-",
    "Green",
    "2023-04-15 13:30:14",
    "25%",
    "Active"
  ),
  createData(
    7,
    "partner.name.008",
    "Online",
    "192",
    "Green",
    "2023-02-11 20:30:14",
    "25%",
    "Active"
  ),
];

const dataClient = {
  CompanyN: 'Pinky Cyber Security LTD',
  CompanyI: '1002003004005',
  BusinessE: 'hello@pinky.com',
  BusinessP: '+373 XX XXX XXX',
  Country: 'Moldova, Republic of',
  Region : 'Mun. Chișinău',
  City: 'Chișinău',
  PostalC: 'MD-0001',
  Address1: 'Bvd. Stefan cel Mare și Sfânt',
  Address2: 'Street, building, appartment',
  ContractN: '20220808',
  TypeC: 'Dedicated',
  ConnectionD: '-',
  LicenseD: '-',
  Currency: 'EUR Euro',
  Monthly: '1.000.00',
  First: 'Sherlock',
  MiddleN: 'William Scott ',
  LastN: 'Holmes',
  IDNP: '1002003004005',
  Email: 'sherlock.holmes@pinky.ai',
  PhoneN: '+373 79 384',
  First2: 'Margarethe',
  MiddleN2: 'William Scott ',
  LastN2: 'Holmes',
  IDNP2: '1002003004005',
  Email2: 'margarethe.holmes@pinky.ai',
  PhoneN2: '+373 23 456 789',
}

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
  return order === "desc"
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
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Partner",
  },
  {
    id: "Connectivity",
    numeric: true,
    disablePadding: false,
    label: "Connectivity",
  },
  {
    id: "SaaS Clients",
    numeric: true,
    disablePadding: false,
    label: "SaaS Clients",
  },
  {
    id: "Network",
    numeric: true,
    disablePadding: false,
    label: "Network status",
  },
  {
    id: "aoutomated",
    numeric: true,
    disablePadding: false,
    label: "Last automated scan",
  },
  {
    id: "vulnerability",
    numeric: true,
    disablePadding: false,
    label: "Last vulnerability assesment",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

const myModal = {
  position: 'absolute',
  fontFamily: "Sora",
  width: "784px",
  height: "554px",
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
  fontWeight:"700",
  fontSize: "24px"
}; 

const paragraphModal ={
  fontFamily: "Sora",
  width: "528px",
  height: "48px",
  position: "absolute",
  top: "121px",
  left: "136px",
  fontWeight: "400",
  color: "#3E4852",
  fontSize: "16px",
};
const paragraphModalP ={
  fontFamily: "Sora",
  width: "528px",
  height: "48px",
  position: "absolute",
  top: "193px",
  left: "136px",
  fontWeight: "400",
  color: "#3E4852",
  fontSize: "16px",
};

const discardButton = {
  // position:"absolute",
  top: "458px",
  left:"285px",
  borderRadius: "8px",
}
const discardButton1 = {
  position:"absolute",
  top: "458px",
  left:"285px",
  borderRadius: "8px",
}
const confirmButton = {
  // position:"absolute",
  top: "458px",
  left:"136px",
  borderRadius: "8px",
  marginLeft: "10px",
  marginRight: "10px"
}
const confirmButton1 = {
  position:"absolute",
  top: "458px",
  left:"136px",
  borderRadius: "8px",
  marginLeft: "10px",
  marginRight: "10px"
}


function EnhancedTableHead(props) {
  const {userRoll} = props
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <>
            {userRoll == "Client accounts" && headCell.label !== "SaaS Clients" ? (
            <TableCell
              key={headCell.id}
              align="left"
              size="medium"
              padding={headCell.disablePadding ? "none" : "normal"}
            >
              <TableSortLabel className="tableSortLabel">
                {headCell.label}
              </TableSortLabel>
            </TableCell>
            ) 
            : userRoll !== "Client accounts" ? (
              <TableCell
                key={headCell.id}
                align="left"
                size="medium"
                padding={headCell.disablePadding ? "none" : "normal"}
              >
                <TableSortLabel className="tableSortLabel">
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
              ) : null}
          </>
        ))}
      </TableRow>
    </TableHead>
  );
}
function EnhancedTableToolbar(props) {
  const { numSelected, handleChange, buttondAddUser } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <HeaderTable
            labelButton={buttondAddUser}
            linkTo={
              buttondAddUser === "Add partner account"
                ? "/add-partner-account"
                : "/add-client-account"
            }
            form={
              buttondAddUser === "Add partner account" ? "partner" : "client"
            }
          />
          <div className="checkBoxs-div">
            <label className="label-checkbox">Connecting status filter:</label>
            <CheckBoxFilter
              onChange={handleChange}
              label="Online"
              htmlfor="Online"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Offline"
              htmlfor="Offline"
            ></CheckBoxFilter>
            <label className="label-checkbox">Network status filter: </label>
            <CheckBoxFilter
              onChange={handleChange}
              label="Red"
              htmlfor="Red"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Yellow"
              htmlfor="Yellow"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Green"
              htmlfor="Green"
            ></CheckBoxFilter>
            <label className="label-checkbox">Status filter:</label>
            <CheckBoxFilter
              onChange={handleChange}
              label="Not active"
              htmlfor="Not active"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Active"
              htmlfor="Active"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Suspended"
              htmlfor="Suspended"
            ></CheckBoxFilter>
            <CheckBoxFilter
              onChange={handleChange}
              label="Deleted"
              htmlfor="Deleted"
            ></CheckBoxFilter>
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

const TablePartnerAccount = (props) => {
  const { buttondAddUser, userRoll, sendButtonIcon } = props;

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [dataTableFillter, setDataTableFillter] = React.useState(rows);
  const [severityFilter, setSeverityFilter] = useState({
    Online: false,
    Offline: false,
    Red: false,
    Yellow: false,
    Green: false,
    NotActive: false,
    Active: false,
    Suspended: false,
    Deleted: false,
  });
  const [open, setOpen] = React.useState(false);
  const [openModalVE, setOpenModalVE] = React.useState(false);
  const [rowSelected, setRowSelected] = useState(null)
  const [rowModal, setRowModal] = useState(null)
  const [rowModalVE, setRowModalVE] = useState(null)
  const [typeModal, setTypeModal] = useState('')

  const handleClose = () => setOpen(false);
  const handleCloseModalVE = () => setOpenModalVE(false);

  const handleClickColor = (rowId, event) => {
    if (rowSelected == rowId) {
      setRowSelected(null)
    }else{
      setRowSelected(rowId)
    }
  }

  const handleOpenModalClic = (row) => {
    setRowModal(row);
    setOpen(true);
  }

  const handleOpenModalClick = (row,tipe) => {
    console.log('row ==== ',row);
    console.log('tipe ===== ',tipe);

    setRowModalVE(row);
    setTypeModal(tipe);
    setOpenModalVE(true);
  }

  const handleClouseModalClic = () => {
    setRowModal(null);
    setOpen(false);
  }

  const handleChangeCheckBoxFilter = (e) => {
    setSeverityFilter({
      ...severityFilter,
      [e.target.value]: e.target.checked,
    });
    if (e.target.checked) {
      const filterData = rows.filter(
        (item) =>
          item.connectivity == e.target.value ||
          item.netStatus == e.target.value ||
          item.status == e.target.value
      );
      setDataTableFillter(
        dataTableFillter.length >= 8
          ? [...filterData]
          : [...dataTableFillter, ...filterData]
      );
    } else {
      const filterData = dataTableFillter.filter(
        (item) =>
          item.netStatus !== e.target.value &&
          item.connectivity !== e.target.value &&
          item.status !== e.target.value
      );

      setDataTableFillter(filterData.length > 0 ? [...filterData] : [...rows]);
    }
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
        selected.slice(selectedIndex + 1)
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

  const handleClickDelete = (rowId) => {
    const updateRowsDelete = dataTableFillter.filter((row) => row.id !== rowId);
    setDataTableFillter(updateRowsDelete)
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const bodyModal = (
    <Box sx={myModal}>
    <br />
    <h2 style={titleModal}>Reset passWord</h2>
    <p style={paragraphModal}>After confirming client identity details via email select an option for generating and sending a single use password.</p>
    <br />
    <p style={paragraphModalP}>Select method:</p>
    <div style={{top:"225px", left:"136px", position:"absolute"}}>
      <FormControl>
        {/* <FormLabel></FormLabel> */}
        <RadioGroup defaultValue="sms" name="radio-buttons-grup">
          <RadioButton id="1"  title="Send password via SMS" subtitle="+373 12 345 123"  />
          {/* <RadioButton id="2" active={false} title="Send password via Email" subtitle="john.doe@pinky.com"  /> */}
        </RadioGroup>
      </FormControl>
    </div>
      {/* <Link to={title === "Assets discovery / inventory" ? "/Assets-Discovery" : "/Vulnerability-Assessment"}> */}
        <Button 
          type={"succes"}
          size="medium"
          position={"left"}
          onClick={handleClose}
          style={confirmButton1}
          icons={<SvgIcon>
            <svg style={{fill:"none"}} width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
              <path d="M7.39969 6.31991L15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.1104 13.6501L13.6904 10.0601" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SvgIcon>}
        >
          Send
        </Button>
      {/* </Link> */}
      <Button 
        onClick={handleClose}
        type={"discard"}
        size="medium"
        position={"left"}
        style={discardButton1}
        icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
      >
        Discard
      </Button>
  </Box>
  )

  const bodyModalVE = (type) => (
    <Box sx={myModal}>
      <form className="form-content-modal" style={{overflow:'scroll', height:'100%', display:'block'}}>
        <Title styled={{marginLeft: "20px",}} title={type == "view" ? "View details" : "Edit details"} />
        <FormRow styled={{marginLeft: "25px",}}>
          <FormGroup isDisabled={true} label="Company name" width="half" value={dataClient.CompanyN}/>
        </FormRow>
        <FormRow styled={{marginLeft: "25px",}}>
        <FormGroup isDisabled={true} label="Business email"  width="half" value={dataClient.BusinessE}/>
        </FormRow>
        <FormRow styled={{marginLeft: "25px",}}>
          <FormGroup isDisabled={true} label="Business phone number" placeholder="+373 XX XXX XXX" width="quarter" />
        </FormRow>
        <FormRow styled={{marginLeft: "25px",}}>
        <FormGroup isDisabled={true} label="Country" width="quarter" value={dataClient.Country}/>
          <FormGroup isDisabled={true} label="Region" width="quarter" value={dataClient.Region}/>
          <FormGroup isDisabled={true} label="City"  width="quarter" value={dataClient.City}/>
        </FormRow>
        <FormRow styled={{marginLeft: "25px",}}>
        <FormGroup isDisabled={true} label="Adress line #1" width="half" value={dataClient.Address1}/>
          <FormGroup isDisabled={true} label="Adress line #2" placeholder="Street, building, appartment"  width="half" />
        </FormRow>
        <Title styled={{marginLeft: "20px",}} title="Contract details" />
        <FormRow styled={{marginLeft: "25px",}}>
          <FormGroup isDisabled={true} label="Contract number"  width="quarter" value={dataClient.ContractN}/>
          <FormGroup isDisabled={true} label="Type of client"  width="quarter" value={dataClient.TypeC}/>
          <FormGroup isDisabled={true} label="Connection date"  width="quarter" value={dataClient.ConnectionD}/>
          <FormGroup isDisabled={true} label="License expiration date"  width="quarter" value={dataClient.LicenseD}/>
        </FormRow>
        <FormRow styled={{marginLeft: "25px",}}>
          <FormGroup isDisabled={true} label="Currency"  width="quarter" value={dataClient.Currency}/>
          <FormGroup isDisabled={true} label="Monthly fee" width="quarter" value={dataClient.Monthly}/>
        </FormRow>
        <FormRow>
          <Button 
            type={"succes"}
            size="medium"
            position={"left"}
            onClick={handleCloseModalVE}
            style={confirmButton}
            icons={<SvgIcon>
              <svg style={{fill:"none"}} width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                <path d="M7.39969 6.31991L15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1104 13.6501L13.6904 10.0601" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SvgIcon>}
          >
            Send
          </Button>
          <Button 
            onClick={handleCloseModalVE}
            type={"discard"}
            size="medium"
            position={"left"}
            style={discardButton}
            icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
          >
            Discard
          </Button>
        </FormRow>
      </form>
  </Box>
  )


  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar
            handleChange={handleChangeCheckBoxFilter}
            buttondAddUser={buttondAddUser}
            userRoll={userRoll}
          />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead userRoll={userRoll}/>
              <TableBody>
                {dataTableFillter.map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  return (
                    <TableRow

                      onClick={(event) => handleClick(event, row.name)}
                      id={index}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      sx={ row.status == "Suspended" 
                        ? {cursor: "pointer", borderLeft: '5px solid rgba(234, 56, 41, 1)'} 
                        : {cursor: "pointer",} 
                      }
                    >
                      <TableCell >
                        <div >
                          <Dropdown>
                            <MenuButton 
                              variant="plain"
                              slots={{ root: IconButton }}
                              sx={{width:"50px", height:"50px"}}
                              onClick={(event)=>handleClickColor(index, event)}
                              
                            >
                              <SvgIcon id={index} sx={{width:25, height: 25}}>
                                <svg id={index} width="30" height="30" viewBox="0 0 24 24" style={{fill:"#fff"}} xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={(rowSelected !== index || rowModal !== null ? "#A4AEB8" : "#3E4852")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M15.9965 12H16.0054" stroke={(rowSelected !== index || rowModal !== null ? "#A4AEB8" : "#3E4852")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M11.9955 12H12.0045" stroke={rowSelected !== index || rowModal !== null ? "#A4AEB8" : "#3E4852"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M7.99451 12H8.00349" stroke={rowSelected !== index || rowModal !== null ? "#A4AEB8" : "#3E4852"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </SvgIcon>
                            </MenuButton>
                            <Menu>
                              <MenuItem size="md" id="1" value="" onClick={() => handleOpenModalClick(row, "view")}>View details.</MenuItem>
                              <MenuItem size="md" id="2" value="" onClick={() => handleOpenModalClick(row, "edit")}>Edit details.</MenuItem>
                              {userRoll == "Client accounts" ? (
                                <>
                                  <MenuItem size="md" id="3" value="" onClick={() => handleOpenModalClic(row)}> Reset password</MenuItem>
                                  <MenuItem size="md" id="4" value="" onClick={()=> handleClickDelete(row.id)}>Delete</MenuItem>
                                </>
                              ) : null}
                            </Menu>
                          </Dropdown>
                        </div>  
                      </TableCell>
                      <TableCell align="left">
                        <span className="span-link">{row.partner}</span>
                      </TableCell>
                      <TableCell align="left">
                        <DotStatus status={row.connectivity}></DotStatus>
                        {row.connectivity}
                      </TableCell>
                      {userRoll == "Client accounts" ? null : (
                        <TableCell align="left">{row.saasc}</TableCell>
                      )}
                      <TableCell align="left">
                        <BoxBorderColour
                          label={row.netStatus}
                        ></BoxBorderColour>
                      </TableCell>
                      <TableCell align="left">{row.scan}</TableCell>
                      <TableCell align="left">
                        <div className="div-vulnerability">
                          <BoxFullColour
                            percent={row.vulnerability}
                          ></BoxFullColour>
                          <div>{row.scan}</div>
                        </div>
                      </TableCell>
                      <TableCell align="left">
                        <BoxBorderColour  label={row.status}></BoxBorderColour>
                      </TableCell>
                    </TableRow>
                  );
                })}
                <Modal  open={open} onClose={handleClouseModalClic}>
                  {bodyModal}
                </Modal>
                <Modal  open={openModalVE} onClose={handleClouseModalClic}>
                  {bodyModalVE(typeModal == "view" ? "view" : "edit")}
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
  );
};

export default TablePartnerAccount;
