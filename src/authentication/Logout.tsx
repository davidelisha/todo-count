import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { User } from "../types/app.types";

interface LogoutProps {
  onLogout: (email: string) => void;
  user: User;
}

const Logout: React.FC<LogoutProps> = ({ user, onLogout }) => {
  return (
    <div>
      <div className="exit" onClick={() => onLogout(user.email)}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </div>
    </div>
  );
};

export default Logout;
