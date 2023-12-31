/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.styles.scss";
const HeaderComponent = ({ children, links, overview, logo, percent }) => {
  return (
    <header className={`header-container`}>
      <div className="header-container-text">
        <div className="header-container-text-title">
          <h1>
            {children}
            {overview && <span>:{overview}</span>}
          </h1>
          {percent && (
            <div className={"percent " + ((parseInt(percent) > 80)?"red":"green")}>{percent}%</div>
          )}
        </div>
        {Link && (
          <div className="container-links">
            {Object.keys(links).map((key) => (
              <>
                <Link key={links[key]} to={"../" + key}>
                  {links[key].replace("", "")}
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
      {logo && (
        <div className="header-container-logo">
          <Link to="/">
            <img src={logo} alt="Logo MGRINDER ( MG )" />
          </Link>
        </div>
      )}
      
    </header>
  );
};

export default HeaderComponent;
