import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import "./SideBar.scss";

import { RxDashboard } from "react-icons/rx";
import { MdFeaturedVideo } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineQuiz } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";


const SideBar = (props) => {
    const collapsed = props.collapsed;

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <div className={ collapsed ? 'sidebar-logo collapsed' : 'sidebar-logo'}>
                    {collapsed ? "AM" : "Admin Management"}
                </div>
                <Sidebar
                    collapsed={collapsed}
                    backgroundColor={"transparent"}
                >
                    <Menu>
                        <MenuItem icon={<RxDashboard />} component={<Link to="/admins" />}> DashBoard </MenuItem>
                        <SubMenu icon={<MdFeaturedVideo />} label="Feature">
                            <MenuItem icon={<CiUser />} component={<Link to="/admins/manage-users" />}>
                                {" "}
                                Quản lý Users{" "}
                            </MenuItem>
                            <MenuItem icon={<MdOutlineQuiz />} component={<Link to="/admins" />}>
                                {" "}
                                Quản lý Bài Quiz{" "}
                            </MenuItem>
                            <MenuItem icon={<BsFillQuestionSquareFill />} component={<Link to="/admins" />}>
                                {" "}
                                Quản lý Câu Hỏi{" "}
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </div>
            
        </div>
    );
};

export default SideBar;
