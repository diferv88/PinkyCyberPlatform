const FormGroup = ({ label, placeholder, width }) => {
    return (
      <div className={`form-group ${width}-width`}>
        <label>{label}:</label>
        <input type="text" placeholder={placeholder} />
      </div>
    );
  };
  
  export default FormGroup;