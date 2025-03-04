import SideBar from "./SideBar";
import "./Admin.scss";
const Admin = (props) => {
    return(
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar/>
            </div>
            <div className="admin-content">
                <div className="ac__title">Admin Page</div>
                <div className="ac__desc">Welcome to the admin page. Here you can manage all the users and quizzes.</div>
            </div>
        </div>
    );
}

export default Admin;