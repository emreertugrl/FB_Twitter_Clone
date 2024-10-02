import React from "react";
import Modal from ".";

const MailModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      Mail Sıfırlama İşleri
    </Modal>
  );
};

export default MailModal;
