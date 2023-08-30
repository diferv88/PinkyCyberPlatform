/* eslint-disable react/prop-types */
import "./CheckBoxFilter.styles.scss"

const CheckBoxFilter = ({label, onChange, htmlfor}) => <div className="container-checkbox"><label><input onChange={onChange} value={htmlfor} type="checkbox"/>{label}</label></div>

export default CheckBoxFilter