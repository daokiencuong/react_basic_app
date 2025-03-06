import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
    const {show, setShow, dataDelete, fetchListUsers} = props;

    const handleClose = () => setShow(false);

    const handleDelete = async () => {
        let response = await deleteUser(dataDelete.id);
        if(response && response.EC === 0) {
            toast.success(response.EM);
            fetchListUsers();
            handleClose();
        } else {
            toast.error(response && response.EM? response.EM : "Delete failed");
        }
    };
  
    return (
      <>
  
        <Modal show={show} onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete the User?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete the user have email: <b>{dataDelete && dataDelete.email ? dataDelete.email : ''}</b></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};

export default ModalDeleteUser;