import '../partnerAccount.styles.scss'

const FormGroup = ({ label, placeholder, width, type, value, onChange}) => {
  return (
    <div className={`form-group ${width}-width`}>
      <label>{label}:</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default FormGroup;