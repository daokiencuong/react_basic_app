import React, { useEffect, useState } from "react";
import "./UserInfo.scss";
import logo from "../logo.svg";

//Stateless and Stateful Components
// class UserInfo extends React.Component {
//     render() {
//         const { listUsers } = this.props;
//         // console.table(listUsers);
//         return (
//             <>
//                 {true && (
//                     <div>
//                         <h2>User Info</h2>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div
//                                     key={user.id}
//                                     className={user.age < 18 ? "red" : "green"}
//                                 >
//                                     <p>Name: {user.name}</p>
//                                     <p>Age: {user.age}</p>
//                                     <div>
//                                         <button onClick={(event) =>{
//                                             event.preventDefault();
//                                             this.props.handleDeleteUser(user.id);
//                                         }}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </>
//         );
//     }
// }

const UserInfo = (props) => {
    const { listUsers } = props;
    // console.table(listUsers);

    const [isShowHideListUser, setIsShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setIsShowHideListUser(!isShowHideListUser);
    };

    useEffect(()=>{}, []);

    return (
        <div className="display-info-container">
            <div>
                <span
                    onClick={() => {
                        handleShowHideListUser();
                    }}
                >
                    {isShowHideListUser !== true
                        ? "Show list user"
                        : "Hide List user"}
                </span>
            </div>
            {isShowHideListUser && (
                <div>
                    <h2>User Info</h2>
                    {listUsers.map((user) => {
                        return (
                            <div
                                key={user.id}
                                className={user.age < 18 ? "red" : "green"}
                            >
                                <p>Name: {user.name}</p>
                                <p>Age: {user.age}</p>
                                <div>
                                    <button
                                        onClick={(event) => {
                                            event.preventDefault();
                                            props.handleDeleteUser(user.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default UserInfo;
