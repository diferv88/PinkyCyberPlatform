import HeaderComponent from "../../header/header.component"
import "./../userRoll.styles.scss";
import FormGroup from "../formGroup/FormGroup";
import FormRow from "../formRow/FormRow";
import Button from "../../button/button.component";
import checkIcon from "../../../assets/Icons/Check-Icon.svg";
import clouseIcon from "../../../assets/Icons/Clouse-Icon.svg";
import { Title } from "../title/Title";
import CustomizedAccordions from "../customizeAcordeon/CustomizedAccordions";
import { Link } from 'react-router-dom/dist'; 
import { useParams } from 'react-router-dom';
import { useState } from "react";

const AcordeonData = [
  {
    title: 'Str. 31 August 24, Chișinău, Moldova, Republic of',
    typeLocation: 'First site location',
    isActive: 'panel1',
    isNew: false,
  },
  {
    title: 'Bvd. Ștefan cel Mare 32, Chișinău, Moldova, Republic of',
    typeLocation: 'Second site location',
    isActive: null,
    isNew: false
  },
  {
    title: 'Bvd. Dacia 40, Chișinău, Moldova, Republic of',
    typeLocation: 'Third site location',
    isActive: null,
    isNew: false
  },
]

const AddPartnerAccount = () => {
  const [dataAcordeon, setDataAcordeon] = useState(AcordeonData)

  const handleClickAddAcordeon = () => {

  }

  const { id } = useParams();

  return (
    <>
      <HeaderComponent links={{"":"Pinky.ai", "./Partner-Account":"Partner accounts", "./add-partner-account/":"Add partner account"}}>Add {id} accounts</HeaderComponent>
      <form className="form-content">

        {/* Company information section */}
        <Title title="Company information" />
        <FormRow>
          <FormGroup label="Company name" width="half" />
          <FormGroup label="Company IDNO"  width="quarter" />
        </FormRow>
        <FormRow>
          <FormGroup label="Business email"  width="half" />
          <FormGroup label="Business phone number" placeholder="+373 XX XXX XXX" width="quarter" />
        </FormRow>


        {/* Company adress section */}
        <Title title="Company adress" />
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


        {/* Billing address section*/}
        <Title title="Billing address" />
        <div className="check-box-div">
          <input type="checkbox" className="check-box"/>
          <label htmlFor='sameAsCompanyAddress' >Billing adress is the same as company adress.</label>
        </div>


        {/* Contract details section*/}
        <Title title="Contract details" />
        <FormRow>
          <FormGroup label="Contract number"  width="quarter" />
          <FormGroup label="Type of client"  width="quarter" />
          <FormGroup label="Connection date"  width="quarter" />
          <FormGroup label="License expiration date"  width="quarter" />
        </FormRow>
        <FormRow>
          <FormGroup label="Currency"  width="quarter" />
          <FormGroup label="Monthly fee" width="quarter" />
        </FormRow>


        {/* Contract primary contact section*/}
        <Title title="Contract primary contact" />
        <FormRow>
          <FormGroup label="First name"  width="quarter" />
          <FormGroup label="Middle name"  width="quarter" />
          <FormGroup label="Last name" width="quarter" />
          <FormGroup label="IDNP" width="quarter" />
        </FormRow>
        <FormRow>
          <FormGroup label="Email" width="half" />
          <FormGroup label="Phone number" width="quarter" />
        </FormRow>


        {/* Contract secondary contact section*/}
        <Title title="Contract secondary contact" />
        <FormRow>
          <FormGroup label="First name"  width="quarter" />
          <FormGroup label="Middle name"  width="quarter" />
          <FormGroup label="Last name" width="quarter" />
          <FormGroup label="IDNP" width="quarter" />
        </FormRow>
        <FormRow>
          <FormGroup label="Email" width="half" />
          <FormGroup label="Phone number" width="quarter" />
        </FormRow>


        {/* Name and locations of company sites /Acordeon */}
        <Title title="Name and locations of company sites" />
        {dataAcordeon?.map((itemAcordeon, index) => (
          <CustomizedAccordions 
            key= {index}
            userRolAccount={"Partner"}
            isActive={itemAcordeon.isActive}
            typeLocation={itemAcordeon.typeLocation}
            title={itemAcordeon.title}
            isNew={itemAcordeon.isNew}
          />
        ))}
        <FormRow>
            <a style={{textDecoration: 'revert', color:'blue', marginBottom:'1rem', marginTop:'1rem'}} href="#">
              Add another location
            </a>
        </FormRow>
        <Title title="" />
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

export default AddPartnerAccount;