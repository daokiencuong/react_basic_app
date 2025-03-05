import SideBar from "./SideBar";
import { useState } from "react";
import "./Admin.scss";
import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

const Admin = (props) => {
    const [collapsed, setcollapsed] = useState(false);

    const handleCollapsed = (event) => {
        event.preventDefault();
        setcollapsed(!collapsed);
    };

    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <div className="sidebar-collaps" onClick={handleCollapsed}>
                        {!collapsed ? (
                            <TbLayoutSidebarLeftCollapseFilled />
                        ) : (
                            <TbLayoutSidebarRightCollapseFilled />
                        )}
                    </div>
                </div>
                <div className="admin-main">
                    <Outlet />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </div>
    );
};

export default Admin;
