import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./SideBar.scss";

import { FaCalendar } from "react-icons/fa6";
import { FaCodiepie } from "react-icons/fa6";

const SideBar = () => {
    return (
        <>
            <Sidebar collapsed={true} backgroundColor={'red'}>
                <Menu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                    <SubMenu icon={<FaCalendar />} label="Charts">
                        <MenuItem icon={<FaCodiepie />}> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
        </>
    );
};

export default SideBar;
