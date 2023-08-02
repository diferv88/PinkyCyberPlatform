import "./../PartnerAccount.styles.scss";
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



function createData(partner, connectivity, saasc, netStatus, scan,vulnerability,status) {
    return {
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
    createData('partner.name.001', "Online", "-", "Red", "2023-03-10 14:30:14", "80%", "Suspended"),
    createData('long.partner.name.002', "Online", "128", "Yellow", "2023-03-5 14:18:14", "50%" , "Suspended"),
    createData('very.long.partner.name.003', "Offline", "-", "Red", "2023-04-15 13:30:14", "25%", "Not active"),
    createData('partner.name.004', "Offline", "384", "Green", "2023-02-11 20:30:14","100%", "Not active"),
    createData('partner.name.005', "Online", "-", "Green", "2023-03-10 14:30:14", "20%", "Active"),
    createData('long.partner.name.006', "Offline", "-", "Red", "2023-03-5 14:18:14", "10%" , "Active"),
    createData('very.long.partner.name.007', "Offline", "-", "Green", "2023-04-15 13:30:14", "65%", "Active"),
    createData('partner.name.008', "Online", "192", "Yellow", "2023-02-11 20:30:14","98%", "Active"),
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
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Partner',
    },
    {
      id: 'Connectivity',
      numeric: true,
      disablePadding: false,
      label: 'Connectivity',
    },
    {
      id: 'SaaS Clients',
      numeric: true,
      disablePadding: false,
      label: 'SaaS Clients',
    },
    {
      id: 'Network',
      numeric: true,
      disablePadding: false,
      label: 'Network status',
    },
    {
      id: 'aoutomated',
      numeric: true,
      disablePadding: false,
      label: 'Last automated scan',
    },
    {
      id: 'vulnerability',
      numeric: true,
      disablePadding: false,
      label: 'Last vulnerability assesment',
    },
    {
      id: 'Status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
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
            <label className="label-checkbox">Connecting status filter:</label>
            <CheckBoxFilter label="Online"></CheckBoxFilter>
            <CheckBoxFilter label="Offline"></CheckBoxFilter>
            <label className="label-checkbox">Network status filter: </label>
            <CheckBoxFilter label="Red"></CheckBoxFilter>
            <CheckBoxFilter label="Yellow"></CheckBoxFilter>
            <CheckBoxFilter label="Green"></CheckBoxFilter>      
            <label className="label-checkbox">Status filter:</label>
            <CheckBoxFilter label="Not active"></CheckBoxFilter>
            <CheckBoxFilter label="Active"></CheckBoxFilter>
            <CheckBoxFilter label="Suspended"></CheckBoxFilter>
            <CheckBoxFilter label="Deleted"></CheckBoxFilter>
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
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
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
                    <TableCell align="left"><span className='span-link'>{row.partner}</span></TableCell>
                    <TableCell align="left">
                      <DotStatus status={row.connectivity}></DotStatus>
                      {row.connectivity}</TableCell>
                    <TableCell align="left">{row.saasc}</TableCell>
                    <TableCell align="left">
                      <BoxBorderColour label={row.netStatus}></BoxBorderColour>
                    </TableCell>
                    <TableCell align="left">{row.scan}</TableCell>
                    <TableCell align="left">
                      <div className="div-vulnerability">
                        <BoxFullColour percent={row.vulnerability}></BoxFullColour>  
                        <div>{row.scan}</div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <BoxBorderColour label={row.status}></BoxBorderColour>  
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
  