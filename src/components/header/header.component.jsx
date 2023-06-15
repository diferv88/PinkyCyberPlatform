/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logo from "../../assets/images/logo.svg";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.styles.scss";
const HeaderComponent = ({ children, links, overview }) => {
  return (
    <header className={`header-container`}>
      <div className="header-container-text">
        <h1>
          {children}
          {overview && <span>:{overview}</span>}
        </h1>
        {Link && (
          <div className="container-links">
            {Object.keys(links).map((key) => (
              <>
                <span>
                  /{" "}
                  <Link key={key} to={links[key]}>
                    {links[key].replace("", "")}
                  </Link>
                </span>
              </>
            ))}
          </div>
        )}
      </div>
      <div className="header-container-logo">
        <Link to="/">
          <img src={logo} alt="Logo MGRINDER ( MG )" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
