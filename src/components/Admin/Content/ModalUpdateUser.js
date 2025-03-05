import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiService";
import _ from "lodash";

import { FcPlus } from "react-icons/fc";

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate, resetUpdateData } = props;

    const handleClose = () => {
        setShow(false);
        setEmail("");
        setPassword("");
        setUsername("");
        setRole("USER");
        setImg("");
        setPreviewImage("");
        resetUpdateData();
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("USER");
    const [image, setImg] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(dataUpdate)) {
            const {email, username, role, image} = dataUpdate;
            setEmail(email);
            setUsername(username);
            setRole(role);
            console.log(image);
            setPreviewImage(image ? `data:image/jpeg;base64,${image}` : ``);
        }
    }, [dataUpdate]);

    const handleUploadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImg(event.target.files[0]);
        } else {
            //setPreviewImage("");
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async (event) => {

        //Call API
        let data = await putUpdateUser(
            dataUpdate.id,
            username,
            role,
            image
        );

        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await props.fetchListUsers();
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                backdrop="static"
                className="modal-add-user"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputCity"
                                value={username}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Role</label>
                            <select
                                className="form-select"
                                onChange={(event) => {
                                    setRole(event.target.value);
                                }}
                                value={role}
                            >
                                <option defaultValue="USER">USER</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label
                                className="form-label label-upload"
                                htmlFor="lableUpload"
                            >
                                {" "}
                                <FcPlus /> Upload File Image
                            </label>
                            <input
                                type="file"
                                hidden
                                id="lableUpload"
                                accept="image/*"
                                onChange={(event) => {
                                    handleUploadImage(event);
                                }}
                            />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImage ? (
                                <img src={previewImage} alt="picture_preview" />
                            ) : (
                                <span>Image Preview</span>
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={(event) => {
                            handleSubmitCreateUser(event);
                        }}
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalUpdateUser;
