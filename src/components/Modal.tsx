import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  return (
    // <div className="modal-container">
    <div className="modal-container">
      <div className="modal">
        <div className="modal-title">
          <div className="title-text">
            <div className="modal-font">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            {title}
          </div>
          <div className="close-modal" onClick={onClose}>
            x
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
