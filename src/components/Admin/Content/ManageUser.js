import ModalCreateUser from "./ModalCreateUser";
import React, { useState, useEffect } from "react";
import "./ManageUser.scss";
import TableUser from "./TableUser";
import { getAllUsers, getUserWithPaginate } from "../../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

import { FaPlus } from "react-icons/fa6";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);

    const [showModalViewUser, setShowModalViewUser] = useState(false);

    const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);

    const [dataUpdate, setDataUpdate] = useState({});

    const [dataDelete, setDataDelete] = useState({});

    const LIMIT_USER = 5;
    const [pageCount, setPageCount] = useState(0);

    const resetUpdateData = () => {
        setDataUpdate({});
    };

    const handleShow = () => setShowModalCreateUser(true);

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        // fetchListUsers();
        fetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers();
        if (res && res.EC === 0) {
            setListUsers(res.DT);
        } else {
            console.error("Error: ", res.EM);
        }
    };

    const fetchListUsersWithPaginate = async (Page) => {
        let res = await getUserWithPaginate(Page, LIMIT_USER);
        if (res && res.EC === 0) {
            console.log("List users: ", res.DT.users);
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        } else {
            console.error("Error: ", res.EM);
        }
    };

    const handleClickBtnUpdate = (user) => {
        setShowModalUpdateUser(true);
        setDataUpdate(user);
    };

    const handleClickBtnView = (user) => {
        setShowModalViewUser(true);
        setDataUpdate(user);
    };

    const handleClickBtnDelete = (user) => {
        setShowModalDeleteUser(true);
        setDataDelete(user);
    };

    return (
        <>
            <div className="manage-user-container">
                <div className="title">Manage User</div>
                <div className="users-content">
                    <div className="btn-add-new">
                        <button
                            className="btn btn-primary btn-md"
                            onClick={handleShow}
                        >
                            <FaPlus /> Add new users
                        </button>
                    </div>
                    <div className="table-user-container">
                        {/* <TableUser
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                        /> */}
                        <TableUserPaginate
                            listUsers={listUsers}
                            handleClickBtnUpdate={handleClickBtnUpdate}
                            handleClickBtnView={handleClickBtnView}
                            handleClickBtnDelete={handleClickBtnDelete}
                            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
                            pageCount={pageCount}
                        />
                    </div>
                    <ModalCreateUser
                        show={showModalCreateUser}
                        setShow={setShowModalCreateUser}
                        fetchListUsers={fetchListUsers}
                    />
                    <ModalUpdateUser
                        show={showModalUpdateUser}
                        setShow={setShowModalUpdateUser}
                        fetchListUsers={fetchListUsers}
                        dataUpdate={dataUpdate}
                        resetUpdateData={resetUpdateData}
                    />
                    <ModalViewUser
                        show={showModalViewUser}
                        setShow={setShowModalViewUser}
                        dataUpdate={dataUpdate}
                        resetUpdateData={resetUpdateData}
                    />
                    <ModalDeleteUser
                        show={showModalDeleteUser}
                        setShow={setShowModalDeleteUser}
                        dataDelete={dataDelete}
                        fetchListUsers={fetchListUsers}
                    />
                </div>
            </div>
        </>
    );
};

export default ManageUser;
