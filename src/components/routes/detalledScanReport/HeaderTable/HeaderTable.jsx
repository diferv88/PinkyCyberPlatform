import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";


const HeaderTable = (
  // {labelButton, linkTo,form}
  ) =>{

    return<>
        <div className="div-add">
          <div className="search-bar">
            
              <button className="gear-button">
              <FontAwesomeIcon icon={faCog} />
              </button>
            
            <input type="text" className="input-search" placeholder="Search..."/>
          </div>
          {/* <Link to={`${linkTo}/${form}`}>
            <button className="button-add"> &#43; {labelButton}</button>
          </Link> */}
         </div>
         <hr />
         </>
}
export default HeaderTable;