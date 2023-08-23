/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./card.styles.scss";
const Card = ({ quantity, link, total, title, icon, status, priority, imagen, homeCard, color }) => {
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
      <p style={color ? {color:color} : {}}>{quantity}</p>
      {imagen ? (
        <img src={imagen} alt="" />
      ):""}
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
