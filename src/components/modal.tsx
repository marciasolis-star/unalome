// Modal.js
import React, { useEffect } from 'react';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Optional: Close modal with the Escape key
    const handleEscape = (event: { keyCode: number; }) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]); //

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Prevent clicks inside the modal content from closing the modal */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;