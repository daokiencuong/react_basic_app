import React from "react";

class UserInfo extends React.Component {
    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <h2>User Info</h2>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>Name: {user.name}</p>
                            <p>Age: {user.age}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default UserInfo;
