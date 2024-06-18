import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { User } from "../types/app.types";

interface NavProps {
  onLogout: (email: string) => void;
  user: User | undefined;
}

const Nav: React.FC<NavProps> = ({ user, onLogout }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="title">
          XERO<span className="orange">TODO</span>
        </div>
        <div className="nav-flex">
          {user && (
            <div className="exit" onClick={() => onLogout(user.email)}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} /> logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
