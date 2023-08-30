/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import "./../partnerAccount.styles.scss";
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
import BoxBorderColour from "../../../BoxBorderColour/BoxBorderColour";
import BoxFullColour from "../../../BoxFullColour/BoxFullColour";
import CheckBoxFilter from "./../CheckBoxFilter/CheckBoxFilter";
import HeaderTable from "./../HeaderTable/HeaderTable";
import "../TableUserAccounts/TableUserAccounts.styles.scss"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import MoreSquare from "../../../../assets/images/moreSquare.svg"
import { Link } from 'react-router-dom';
function createData(partner, connectivity, saasc, netStatus, scan,vulnerability,status,more) {
    return {
      partner,
      connectivity,
      saasc,
      netStatus,
      scan,
      vulnerability,
      status,
      more,
    };
  }
  const opciones =[{label: "Fast"},
            {label: "Deep"},
            {label: "Ultra"}
  ];
  const opcionesTypeScan =[{label: "Inventory list"},
                    {label: "Vulnerability assessment"},
];
const opcionesLastScan =[{label: "2023-04-15"},
                    {label: "2023-03-5"},
];
const opcionesNextScan =[{label: "2023-04-15"},
                    {label: "2023-03-5"},
];
  const rows = [
    createData('inqueue','partner.name.001', "Inventory list", "2023-03-10 14:30:14", "2023-03-10 14:30:14", "512","32", "Technical settings"),
    createData('inqueue','long.partner.name.002', "Inventory list", "2023-03-5 14:18:14", "2023-03-5 14:18:14", "512","24", "Technical settings"),
    createData('inqueue','very.long.partner.name.003', "Inventory list", "2023-04-15 13:30:14", "---", "384","24", "Technical settings"),
    createData('inprogress','partner.name.004', "Vulnerability assessment", "2023-02-11 20:30:14","---", "384","16", "Technical settings"),
    createData('inprogress','partner.name.005', "Vulnerability assessment", "2023-03-10 14:30:14", "---", "256","16", "Technical settings"),
    createData('inprogress','long.partner.name.006', "Vulnerability assessment", "2023-03-5 14:18:14", "---", "128","8", "Technical settings"),
    createData('done','very.long.partner.name.007', "Vulnerability assessment", "2023-04-15 13:30:14", "---", "128","8", "Technical settings"),
    createData('done','partner.name.108', "Vulnerability assessment", "2023-02-11 20:30:14","---", "64","4", "Technical settings"),
    createData('done','very.long.partner.name.077', "Vulnerability assessment", "2023-04-15 13:30:14", "2023-04-15 13:30:14", "64","4", "Technical settings"),
    createData('done','partner.name.008', "Inventory list", "2023-02-11 20:30:14","---", "64","4", "Technical settings")
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
      id: 'status',
      numeric: false,
      disablePadding: true,
      label: 'Pinky Status',
    },
    {
      id: 'partners',
      numeric: false,
      disablePadding: false,
      label: 'Partners',
    },
    {
      id: 'typeofscan',
      numeric: false,
      disablePadding: false,
      label: 'Type of scan',
    },
    {
      id: 'Lastscan',
      numeric: false,
      disablePadding: false,
      label: 'Last scan',
    },
    {
      id: 'NextScan',
      numeric: false,
      disablePadding: false,
      label: 'Next scan',
    },
    {
      id: 'totalassets',
      numeric: true,
      disablePadding: false,
      label: 'Total assets',
    },
    {
      id: 'needattention',
      numeric: true,
      disablePadding: false,
      label: 'Need attention',
    },
    {
      id: '...',
      numeric: false,
      disablePadding: false,
      label: '...',
    },
    {
      id: 'scannowbutton',
      numeric: false,
      disablePadding: false,
      label: '',
    }
  ];
  
  function EnhancedTableHead() {
  
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
  
  function EnhancedTableToolbar({ numSelected, typeScan, setTypeScan, lastScan, setLastScan, nextScan, setNextScan, impactRisk, setImpactRisk, search, setSearch, handleClearFilters}) {

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
        <Box
          component="form"
          noValidate
          autoComplete="off"
        >
          <div >
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
              <div>
                <button className="gear-button">
                  <FontAwesomeIcon icon={faCog} />
                </button>
                <input type="text" className="input-search" placeholder="Search..." onChange={(event)=>{setSearch(event.target.value)}}/>
              </div>
              <div className="text-auto">

                <Autocomplete
                  disablePortal
                  id="type-of-scan"
                  value = {typeScan}
                  options={opcionesTypeScan}
                  onChange={(event)=>{setTypeScan(event.target.outerText)}}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Type of scan" />}
                />
                <Autocomplete
                  disablePortal
                  id="last-scan"
                  value={lastScan}
                  options={opcionesLastScan}
                  onChange={(event)=>{setLastScan(event.target.outerText)}}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Last scan" />}
                />
                <Autocomplete
                  disablePortal
                  id="next-scan"
                  value={nextScan}
                  options={opcionesNextScan}
                  onChange={(event)=>{setNextScan(event.target.outerText)}}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Next scan" />}
                />
                <Autocomplete
                  disablePortal
                  id="impact-risk"
                  options={opciones}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Risk impact" />}
                />
                <div className="label" onClick={handleClearFilters}>
                  <div className="textWrapper">Clear all</div>
                </div>
              </div>
            
              </Typography>
            )}
            </div>
          </Box>
       
  
        
      </Toolbar>
    );
  }

  const TablePartnerAccount = (props) => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const redirectToOtraRuta = () => {
      props.history.push('/InventoryList');
    };

    const [typeScan, setTypeScan] = React.useState("");
    const [lastScan, setLastScan] = React.useState("");
    const [nextScan, setNextScan] = React.useState("");
    const [impactRisk, setImpactRisk] = React.useState("");
    const [filtro,setFiltro] = React.useState(rows);
    const [search, setSearch] = React.useState("");
    
    const handleFilter = () => {
      const filteredData = rows.filter(dato => {
        const matchTypeScan = typeScan === undefined ? true : dato.saasc.toLowerCase().includes(typeScan.toLowerCase());
        const matchLastScan = lastScan === undefined ? true : dato.netStatus.toLowerCase().includes(lastScan.toLowerCase());
        const matchNextScan = nextScan === undefined ? true : dato.scan.toLowerCase().includes(nextScan.toLowerCase());
        const matchSearch = search === "" ? true : dato.connectivity.toLowerCase().includes(search.toLowerCase());
        return matchTypeScan && matchLastScan && matchNextScan && matchSearch;
      });
    
      setFiltro(filteredData);
    };
    React.useEffect(() => {
      handleFilter();
    }, [typeScan, lastScan, nextScan, search]);

    const handleClearFilters = () => {
      setTypeScan("");
      setLastScan("");
      setNextScan("");
      setSearch("");
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

    return <>

<Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar typeScan={typeScan} setTypeScan={setTypeScan} lastScan={lastScan} setLastScan={setLastScan} nextScan={nextScan} setNextScan={setNextScan} impactRisk={impactRisk} setImpactRisk={setImpactRisk} search={search} setSearch={setSearch} handleClearFilters={handleClearFilters}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead/>
            <TableBody>
              {filtro.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="left">
                      <div className="firstRow">
                        <div className="box">
                        </div>
                        <svg className="options" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M15.9965 12H16.0054" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M11.9955 12H12.0045" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M7.99451 12H8.00349" stroke="#A4AEB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        </div>
                      
                    </TableCell>
                    <TableCell align="left" >
                      <BoxBorderColour label={row.partner}></BoxBorderColour>
                    </TableCell>
                    <TableCell align="left" className='span-link'>
                      {row.connectivity}
                    </TableCell>
                    <TableCell align="left">{row.saasc}</TableCell>
                    <TableCell align="left">
                     {row.netStatus}
                      
                    </TableCell>
                    <TableCell align="left">{row.scan}</TableCell>
                    <TableCell align="left">
                      <div className="div-vulnerability">
                        {row.vulnerability}
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <BoxBorderColour label={row.status}></BoxBorderColour>  
                    </TableCell>
                    <TableCell align="left" className='span-link'>
                      {row.more}
                    </TableCell>
                    <TableCell align="left">
                      <div className="frame" onClick={()=>redirectToOtraRuta()}>
                        <div className="text-wrapper"><Link to={"/InventoryList"}>Scan now</Link></div>
                      </div>
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
  