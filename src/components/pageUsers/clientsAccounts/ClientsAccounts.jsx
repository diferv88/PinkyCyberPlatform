import HeaderComponent from "../../header/header.component"
import "./../userRoll.styles.scss";
import FormGroup from "../formGroup/FormGroup";
import FormRow from "../formRow/FormRow";
import Button from "../../button/button.component";
import checkIcon from "../../../assets/Icons/Check-Icon.svg";
import clouseIcon from "../../../assets/Icons/Clouse-Icon.svg";
import { Title } from "../title/Title";
import CustomizedAccordions from "../customizeAcordeon/CustomizedAccordions";
import { Link, useParams } from 'react-router-dom';

const AddClientsAccount = () => {

  const { id } = useParams();

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

  return (
    <>
      <HeaderComponent links={{"":"Pinky.ai", "./Client-Account":"Clients accounts", "./add-client-account/":"Add client account"}}>Add {id} accounts</HeaderComponent>
      <form className="form-content">

        {/* Company information section */}
        <Title title="Company information" />
        <FormRow>
          <FormGroup label="Company name" width="half" value={dataClient.CompanyN}/>
          <FormGroup label="Company IDNO"  width="quarter" value={dataClient.CompanyI}/>
        </FormRow>
        <FormRow>
          <FormGroup label="Business email"  width="half" value={dataClient.BusinessE}/>
          <FormGroup label="Business phone number" placeholder="+373 XX XXX XXX" width="quarter" />
        </FormRow>


        {/* Company adress section */}
        <Title title="Company adress" />
        <FormRow>
          <FormGroup label="Country" width="quarter" value={dataClient.Country}/>
          <FormGroup label="Region" width="quarter" value={dataClient.Region}/>
          <FormGroup label="City"  width="quarter" value={dataClient.City}/>
          <FormGroup label="Postal code" width="quarter" value={dataClient.PostalC}/>
        </FormRow>
        <FormRow>
          <FormGroup label="Adress line #1" width="half" value={dataClient.Address1}/>
          <FormGroup label="Adress line #2" placeholder="Street, building, appartment"  width="half" />
        </FormRow>


        {/* Billing address section*/}
        <Title title="Billing address" />
        <div className="check-box-div">
          <input type="checkbox" className="check-box"/>
          <label htmlFor='sameAsCompanyAddress' >Billing adress is the same as company adress.</label>
        </div>


        {/* Contract details section*/}
        <Title title="Contract details" />
        <FormRow>
          <FormGroup label="Contract number"  width="quarter" value={dataClient.ContractN}/>
          <FormGroup label="Type of client"  width="quarter" value={dataClient.TypeC}/>
          <FormGroup label="Connection date"  width="quarter" value={dataClient.ConnectionD}/>
          <FormGroup label="License expiration date"  width="quarter" value={dataClient.LicenseD}/>
        </FormRow>
        <FormRow>
          <FormGroup label="Currency"  width="quarter" value={dataClient.Currency}/>
          <FormGroup label="Monthly fee" width="quarter" value={dataClient.Monthly}/>
        </FormRow>


        {/* Contract primary contact section*/}
        <Title title="Contract primary contact" />
        <FormRow>
          <FormGroup label="First name"  width="quarter" value={dataClient.First} />
          <FormGroup label="Middle name"  width="quarter" value={dataClient.MiddleN}/>
          <FormGroup label="Last name" width="quarter" value={dataClient.LastN}/>
          <FormGroup label="IDNP" width="quarter" value={dataClient.IDNP}/>
        </FormRow>
        <FormRow>
          <FormGroup label="Email" width="half" value={dataClient.Email} />
          <FormGroup label="Phone number" width="quarter" value={dataClient.PhoneN}/>
        </FormRow>


        {/* Contract secondary contact section*/}
        <Title title="Contract secondary contact" />
        <FormRow>
          <FormGroup label="First name"  width="quarter" value={dataClient.First2} />
          <FormGroup label="Middle name"  width="quarter" value={dataClient.MiddleN2}/>
          <FormGroup label="Last name" width="quarter" value={dataClient.LastN2}/>
          <FormGroup label="IDNP" width="quarter" value={dataClient.IDNP2}/>
        </FormRow>
        <FormRow>
          <FormGroup label="Email" width="half" value={dataClient.Email2}/>
          <FormGroup label="Phone number" width="quarter" value={dataClient.PhoneN2}/>
        </FormRow>


        {/* Name and locations of company sites /Acordeon */}
        <Title title="Name and locations of company sites" />
        <CustomizedAccordions userRolAccount={"Client"} typeLocation="First site location" title="Str. 31 August 24, Chișinău, Moldova, Republic of" />
        <FormRow>
            <a style={{textDecoration: 'revert', color:'blue', marginBottom:'1rem', marginTop:'1rem'}} href="#">
              Add another location
            </a>
        </FormRow>
        <FormRow >
          <Link to='/Partner-Account'>
            <Button 
              type={"succes"}
              size="medium"
              position={"left"}
              style={{marginRight:10}}
              // onClick={handleClose}
              // style={confirmButton}
              icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
            >
              Add account
            </Button>
          </Link>
          <Link to='/Partner-Account'>
            <Button 
              // onClick={routeChange(step.testNavigation)}
              type={"discard"}
              size="medium"
              position={"left"}
              icons={<img style={{marginRight:"5px"}} src={clouseIcon} alt="clouse" />}
            >
              Discard changes
            </Button>
          </Link>
        </FormRow>
      </form>
    </>
  );
};

export default AddClientsAccount;