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

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelected = rows.map((n) => n.name);
        setSelected(newSelected);
        return;
        }
        setSelected([]);
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
                console.log(row.confirmed)
                console.log(row)


                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.confirmed)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.confirmed}
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
                    <TableCell align="left"><span className='span-link'>{row.confirmed}</span></TableCell>
                    <TableCell align="left">
                      <DotStatus status={row.vulnerability}></DotStatus>
                      {row.vulnerability}</TableCell>
                    <TableCell align="left">{row.Host}</TableCell>
                    <TableCell align="left">
                      {row.Protocol}
                    </TableCell>
                    <TableCell align="left">{row.port}</TableCell>
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
  