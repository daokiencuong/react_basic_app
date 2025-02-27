import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: "Dao Kien Cuong", age: 31},
            {id: 2, name: "Nguyen Van Huu", age: 29},
            {id: 3, name: "Phan Thanh Tam", age: 33}
        ]
    };

    render() {
        return (
            <div>
                <UserInfo listUsers={this.state.listUsers} />
                <br />
            </div>
        );
    }
}

export default MyComponent;
