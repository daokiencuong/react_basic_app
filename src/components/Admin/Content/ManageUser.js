import ModalCreateUser from "./ModalCreateUser";
import React, { useState, useEffect } from "react";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { getAllUsers } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";

import { FaPlus } from "react-icons/fa6";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});

    const handleShow = () => setShowModalCreateUser(true);

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        } else {
            console.error("Error: ", res.EM);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    }

    return (
        <>
            <div className="manage-user-container">
                <div className="title">Manage User</div>
                <div className="users-content">
                    <div className="btn-add-new">
                        <button className="btn btn-primary btn-md" onClick={handleShow}><FaPlus /> Add new users</button>
                    </div>
                    <div className="table-user-container">
                       <TableUser listUsers={listUsers} handleClickBtnUpdate={handleClickBtnUpdate}/>
                    </div>
                    <ModalCreateUser show={showModalCreateUser} setShow={setShowModalCreateUser} fetchListUsers={fetchListUsers}/>
                    <ModalUpdateUser show={showModalUpdateUser} setShow={setShowModalUpdateUser} dataUpdate={dataUpdate}/>
                </div>
            </div>
        </>
    );
};

export default ManageUser;
