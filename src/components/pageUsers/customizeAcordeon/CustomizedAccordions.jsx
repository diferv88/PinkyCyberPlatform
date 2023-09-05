/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import checkIcon from "../../../assets/Icons/Check-Icon.svg";
import clouseIcon from "../../../assets/Icons/Clouse-Icon.svg";
import Button from "../../button/button.component";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import FormRow from '../formRow/FormRow';
import FormGroup from '../formGroup/FormGroup.jsx';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  marginBottom: '0px',
  fontFamily: "'Sora', sans-serif",
  borderRadius: '5px',
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: '#e1e5e8',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(0),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#eef1f4',
  }));

export default function CustomizedAccordions({userRolAcount, isActive, isNew, typeLocation, title,}) {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event,newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const dataClientAcordeon = {
    Location:'First site location',
    Website:'https://www.websitedomain.com',
    Country:'Moldova, Republic of',
    Region :'Mun. Chișinău',
    City:'Chișinău',
    Postal:'MD-0001',
    Address1:'Str. 31 August 24',
    Address2:'Street, building, appartment',
    Associated1:'255.255.255.0',
    Associated2:'255.255.255.1',
    Associated3:'255.255.255.2',
    Associated4:'XXX.XXX.XXX.X',
  }

  return (
    <div>
      <Accordion expanded={expanded === isActive} onChange={handleChange(isActive)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className='span-acordeon'>{typeLocation}</div>
          <div className='htitle'>{title}</div>
        </AccordionSummary>
        <AccordionDetails>
            <FormRow>
                <FormGroup label="Location name" width="half" value={dataClientAcordeon.Location} />
                <FormGroup label="Website domain"  width="half" value={dataClientAcordeon.Website} />
            </FormRow>
            <h5 className='title-partner'>Physical site location</h5>
            <FormRow>
                <FormGroup label="Country" width="quarter" value={dataClientAcordeon.Country} />
                <FormGroup label="Region" width="quarter" value={dataClientAcordeon.Region} />
                <FormGroup label="City"  width="quarter" value={dataClientAcordeon.City} />
                <FormGroup label="Postal code" width="quarter" value={dataClientAcordeon.Postal}/>
            </FormRow>
            <FormRow>
                <FormGroup label="Adress line #1" width="half" value={dataClientAcordeon.Address1}/>
                <FormGroup label="Adress line #2" placeholder="Street, building, appartment"  width="half" value={dataClientAcordeon.Address2}/>
            </FormRow>
            <h5 className='title-partner'>Associated external IPs</h5>
            <FormRow>
                <FormGroup label="ssociated external IP #1" width="quarter" value={dataClientAcordeon.Associated1}/>
                <FormGroup label="ssociated external IP #2"  width="quarter" value={dataClientAcordeon.Associated2}/>
                <FormGroup label="ssociated external IP #3"  width="quarter" value={dataClientAcordeon.Associated3}/>
                <FormGroup label="ssociated external IP $4"  width="quarter" value={dataClientAcordeon.Associated4}/>
            </FormRow>
            <h5 className='title-partner'></h5>
            <FormRow >
              <Button 
                type={"succes"}
                size="medium"
                position={"left"}
                style={{marginRight:10}}
                // onClick={handleClose}
                // style={confirmButton}
                icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
              >
                Update
              </Button>
              <Button 
                // onClick={routeChange(step.testNavigation)}
                type={"discard"}
                size="medium"
                position={"left"}
                icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
              >
                Discard
              </Button>
            </FormRow>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}