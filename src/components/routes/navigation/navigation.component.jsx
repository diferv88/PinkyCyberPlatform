/* eslint-disable no-unused-vars */
// navigation
// responsive design
import { useState } from "react";
import arrowleft from "../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../assets/images/arrowRight.svg";
import homeSVG from "../../../assets/images/home.svg";
import profileSVG from "../../../assets/images/profile.svg";
import dataSVG from "../../../assets/images/data.svg";
import taskSVG from "../../../assets/images/task.svg";
import settingSVG from "../../../assets/images/setting.svg";
import cardSVG from "../../../assets/images/card.svg";
import pinkyLogo from "../../../assets/images/PinkyIcon.svg";
import { NavLink, Outlet } from "react-router-dom";
import { MainContainer } from "../../../style/style";
import "./navigation.styles.scss";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import profileWEBP from "../../../assets/images/profile.png";
import Footer from "../../footer/footer.component";
import { Fragment } from "react";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "rgba(234, 56, 41, 1)",
    color: "rgba(234, 56, 41, 1)",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid rgba(234, 56, 41, 1)",
      content: '""',
    },
  },
}));
const profile = {
  img: profileWEBP,
  Name: "User Name"
};
const Navigation = () => {
  const [isToggled, setIsToggled] = useState(true);
  return (
    <Fragment>
      <section className={`container-nav ${!isToggled ? "active" : ""}`}>
        <div className="second-container-nav">
          <span
            className={`button-toogle ${!isToggled ? "active" : ""}}`}
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            {isToggled ? (
              <img src={arrowRight}></img>
            ) : (
              <img src={arrowleft}></img>
            )}
          </span>
          <div className="container-touchID">
            <img src={pinkyLogo} alt="" />
          </div>
          <nav>
            <NavLink to="/" title="Link to go to the Dash Board page">
              <img src={homeSVG} alt="DashBoard image" />
            </NavLink>
            <NavLink
              to="/Partner-Account"
              title="Link to go to the Partner Account page"
            >
              <img src={profileSVG} alt="Clients account image" />
            </NavLink>
            <NavLink to="/network" title="Link to go to the Network page">
              <img src={dataSVG} alt="Network image" />
            </NavLink>
            <NavLink
              to="/issues"
              title="Link to go to the Issues Management page"
            >
              <img src={taskSVG} alt="Issues Management image" />
            </NavLink>
            <NavLink to="/wiki" title="Link to go to the Wiki Management page">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.75 9.76136C20.3537 9.88874 19.25 11.072 19.25 12.5C19.25 13.9276 20.3529 15.1104 21.7486 15.2385C21.7238 17.2497 21.382 18.2613 20.8216 18.8216C20.2396 19.4037 19.1706 19.75 17 19.75H11.75V18.5C11.75 17.5377 10.9623 16.75 10 16.75C9.03772 16.75 8.25 17.5377 8.25 18.5V19.75H7C4.82944 19.75 3.76042 19.4037 3.17836 18.8216C2.59629 18.2396 2.25 17.1706 2.25 15V14.7386C3.64634 14.6113 4.75 13.428 4.75 12C4.75 10.572 3.64634 9.38874 2.25 9.26136V9C2.25 6.82944 2.59629 5.76042 3.17836 5.17836C3.76042 4.59629 4.82944 4.25 7 4.25H8.25V5.5C8.25 6.46229 9.03772 7.25 10 7.25C10.9623 7.25 11.75 6.46229 11.75 5.5V4.25H17C19.1706 4.25 20.2396 4.59629 20.8216 5.17836C21.4037 5.76042 21.75 6.82944 21.75 9V9.76136ZM10 15.92C10.9623 15.92 11.75 15.1323 11.75 14.17V9.83C11.75 8.86772 10.9623 8.08 10 8.08C9.03772 8.08 8.25 8.86772 8.25 9.83V14.17C8.25 15.1323 9.03772 15.92 10 15.92Z"
                  fill="white"
                  stroke="rgba(164, 174, 184, 1)"
                  strokeWidth="2"
                />
              </svg>
            </NavLink>
            <NavLink to="/payment" title="Link to go to the Payment page">
              <img src={cardSVG} alt="Payment image" />
            </NavLink>
            <NavLink to="/settings" title="Link to go to the Settings page">
              <img src={settingSVG} alt="Setting image" />
            </NavLink>
            <NavLink
              className="nav-profile"
              to="/profile"
              title="Link to go to the Profile page"
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={`User avatar ${profile.Name}`} src={profile.img} />
              </StyledBadge>
            </NavLink>
          </nav>
        </div>
      </section>

      <MainContainer>
        <Outlet />
        <Footer />
      </MainContainer>
    </Fragment>
  );
};

export default Navigation;
