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
  marginBottom: '50px',
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
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    backgroundColor: '#eef1f4',
  }));

export default function CustomizedAccordions(props) {
  const {userRolAcount} = props
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event,newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className='span-acordeon'>First site location</div>
          <div className='htitle'>Str. 31 August 24, Chișinău, Moldova, Republic of</div>
        </AccordionSummary>
        <AccordionDetails>
            <FormRow>
                <FormGroup label="Location name" width="half" />
                <FormGroup label="Website domain"  width="half" />
            </FormRow>
            <h5 className='title-partner'>Physical site location</h5>
            <FormRow>
                <FormGroup label="Country" width="quarter" />
                <FormGroup label="Region" width="quarter" />
                <FormGroup label="City"  width="quarter" />
                <FormGroup label="Postal code" width="quarter" />
            </FormRow>
            <FormRow>
                <FormGroup label="Adress line #1" width="half" />
                <FormGroup label="Adress line #2" placeholder="Street, building, appartment"  width="half" />
            </FormRow>
            <h5 className='title-partner'>Associated external IPs</h5>
            <FormRow>
                <FormGroup label="ssociated external IP #1" width="quarter" />
                <FormGroup label="ssociated external IP #2"  width="quarter" />
                <FormGroup label="ssociated external IP #3"  width="quarter" />
                <FormGroup label="ssociated external IP $4"  width="quarter" />
            </FormRow>
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