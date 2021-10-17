import { Modal } from 'react-bootstrap';
import './MyModal.css';

const MyModal = (props) => {
  const { showModal, handleModal, modalTitle, children } = props;
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => handleModal(false)}
        className="myModalDialog"
      >
        <div className="myModal">
          <Modal.Header closeButton>
            <Modal.Title><h3 className="myModalTitle">{modalTitle}</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default MyModal;
