/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import "./card.styles.scss";
const Card = ({ quantity, link, total, title, icon, status, priority, imagen, homeCard, color,button, buttonText, subtitle }) => {
  console.log(subtitle)
  return (
    <div className={homeCard ? "card-div-container-x4" : "card-div-container"}>
      <div className="card-container-text">
        {title && !priority && <h3>{title}</h3>}
        {title && priority && (
          <h3>
            {title} <span>{` (lasth 24h)`}</span>
          </h3>
        )}
        {icon && <img src={icon} alt="icon" />}
        {status && <span className={`server-status ${status}`}></span>}
      </div>
      {subtitle && (
        <div className="subtitle">
          <h4>{subtitle}</h4>
        </div>
      )}
      <p style={color ? {color:color} : {}}>{quantity}</p>
      {imagen ? (
        <img src={imagen} alt="" />
      ):""}
      {button && (
        <Link to='/Assets-Discovery'>
          <Button 
            type={"succes"}
            size="medium"
            position={"left"}
            style={{marginRight:10, marginBotom:"5px"}}
            // onClick={handleClose}
            // style={confirmButton}
            // icons={<img style={{marginRight:"5px"}} src={checkIcon} alt="check" />}
          >
            {buttonText}
          </Button>
        </Link>
      )}
      <div className="card-links">
        {total ? (<p>
          Total :<span>{total}</span>
        </p>) : ""
        }
        {
          link ? 
        (<Link to={link}>Overview</Link>
        ) : ""
        }
        {
          // todo <Link to={link}>Overview</Link>
        }
      </div>
    </div>
  );
};

export default Card;
