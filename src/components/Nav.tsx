import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="title">
          XERO<span className="orange">TODO</span>
        </div>
        <div className="exit">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
