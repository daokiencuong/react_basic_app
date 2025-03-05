import ModalCreateUser from "./ModalCreateUser";
import React, { useState, setShow } from "react";
import "./ManageUser.scss";

import { FaPlus } from "react-icons/fa6";

const ManageUser = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <div className="manage-user-container">
                <div className="title">Manage User</div>
                <div className="users-content">
                    <div className="btn-add-new">
                        <button className="btn btn-primary btn-md" onClick={handleShow}><FaPlus /> Add new users</button>
                    </div>
                    <div className="table-user-container">
                       table user
                    </div>
                    <ModalCreateUser show={show} setShow={setShow}/>
                </div>
            </div>
        </>
    );
};

export default ManageUser;
