/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../button/button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  succes: "btn-success",
  sucessOutline: "btn-success-outline",
  danger: "btn-danger",
  dangerOutline: "btn-danger-outline",
  warning: "btn-warning",
  warningOutline: "btn-warning-outline",
};
const BUTTON_SIZE_CLASSES = {
  small: "btn-small",
  medium: "btn-medium",
  large: "btn-large",
  default: "btn-default",
};

const Button = ({ children, type, size, icons, position, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[type]} ${BUTTON_SIZE_CLASSES[size]}  `}
      {...otherProps}
    >
      {position === "left" && (
        <>
          {icons}
          {children}
        </>
      )}
      {position === "right" && (
        <>
          {children}
          {icons}
        </>
      )}
      {!position && <>{children}</>}
    </button>
  );
};
export default Button;
