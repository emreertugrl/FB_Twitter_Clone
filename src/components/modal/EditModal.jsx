import React from "react";
import Modal from "./index";

const EditModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <h1>Düzenleme İşleri</h1>
    </Modal>
  );
};

export default EditModal;
