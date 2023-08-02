import "./BoxBorderColour.styles.scss";

const BoxBorderColour = ({ label }) => {
    const clase = label.replace(" ", "-");
    return <div className={`${clase}-box`}>{label}</div>;
  };

export default BoxBorderColour