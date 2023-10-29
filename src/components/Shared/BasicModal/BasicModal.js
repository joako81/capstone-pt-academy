import React from "react";
import { Modal, ModalContent } from "semantic-ui-react";

export function BasicModal(props) {
  const { show, close, title, size, children } = props;

  return (
    <Modal closeIcon open={show} onClose={close} size={size}>
      {title && <Modal.Header> {title}</Modal.Header>}
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

BasicModal.defaultProps = {
  size: "tiny",
};
