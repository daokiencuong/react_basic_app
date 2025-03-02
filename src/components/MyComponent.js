import React, { useState } from "react";
import UserInfo from "./UserInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             {id: 1, name: "Dao Kien Cuong", age: 16},
//             {id: 2, name: "Nguyen Van Huu", age: 67},
//             {id: 3, name: "Phan Thanh Tam", age: 13}
//         ]
//     };

//     handleAddNewUser = (userObj) => {
//         console.log("Add new user:", userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         });
//     }

//     handleDeleteUser = (id) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(user => user.id!== id);
//         this.setState({
//             listUsers: listUsersClone
//         });
//     }

//     render() {
//         return (
//             <>
//                 <AddUserInfo handleAddNewUser={this.handleAddNewUser}/>
//                 <UserInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser}/>
//                 <br />
//             </>
//         );
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Dao Kien Cuong", age: 16 },
        { id: 2, name: "Nguyen Van Huu", age: 67 },
        { id: 3, name: "Phan Thanh Tam", age: 13 },
    ]);

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (id) => {
        setListUsers(listUsers.filter(user => user.id!== id));
    };

    return (
        <>
            <AddUserInfo handleAddNewUser={handleAddNewUser} />
            <UserInfo
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
            <br />
        </>
    );
};

export default MyComponent;
