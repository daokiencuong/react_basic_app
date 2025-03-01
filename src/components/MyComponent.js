import React from "react";
import UserInfo from "./UserInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: "Dao Kien Cuong", age: 16},
            {id: 2, name: "Nguyen Van Huu", age: 67},
            {id: 3, name: "Phan Thanh Tam", age: 13}
        ]
    };

    handleAddNewUser = (userObj) => {
        console.log("Add new user:", userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        });
    }

    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser}/>
                <UserInfo listUsers={this.state.listUsers} />
                <br />
            </div>
        );
    }
}

export default MyComponent;
