import React from "react";

class UserInfo extends React.Component {
    render(){
        const { name, age } = this.props;
        return (
            <div>
                <h2>User Info</h2>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                
            </div>
        );
    }
}

export default UserInfo;