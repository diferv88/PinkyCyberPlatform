import './PasswordRequirementes.styles.scss'

const PasswordRequirements = () => {
    return <>
        <label>New password must contain: </label>
      <ul>
        <li><span className="checkmark">✓</span> At least 8 characters</li>
        <li><span className="checkmark">✓</span> At least 1 lowercase character</li>
        <li><span className="checkmark">✓</span> At least 1 uppercase character</li>
        <li><span className="checkmark">✓</span> At least 1 number or special character</li>
      </ul>
      </>
  }

export default PasswordRequirements