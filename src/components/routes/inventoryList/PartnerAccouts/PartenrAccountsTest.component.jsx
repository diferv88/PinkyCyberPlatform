import HeaderComponent from "../../../header/header.component"
import "./../inventoryList.styles.scss";
import FormGroup from "../formGroup/FormGroup";
import FormRow from "../formRow/FormRow";
import { Title } from "../title/Title";
import CustomizedAccordions from "../customizeAcordeon/CustomizedAccordions";
import { useParams } from 'react-router-dom';

const AddPartnerAccount = () => {

  const { id } = useParams();

  return (
    <>
      <HeaderComponent links={""}>Add {id} accounts</HeaderComponent>
      <form>

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
        <CustomizedAccordions/>
        
      </form>
    </>
  );
};

export default AddPartnerAccount;