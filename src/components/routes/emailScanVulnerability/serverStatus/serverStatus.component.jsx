/* eslint-disable react/prop-types */
import "./serverStatus.styles.scss";
const ServerStatus = ({ status, number, percentage, totalPercentage }) => {
  return (
    <li>
      <div className="server-div-container">
        <p>Server #{number}</p>
        <span className={`server-status ${status}`}></span>
      </div>
      <p className="percentage">{percentage}%</p>
      <span className="total-percentange">
        Total: <span>{totalPercentage}%</span>
      </span>
    </li>
  );
};

export default ServerStatus;
