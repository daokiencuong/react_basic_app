import React from "react";
import "./UserInfo.scss";
import logo from "../logo.svg";

class UserInfo extends React.Component {
    state = {
        isShowListUser: true,
    };

    handleShowHideListUser = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        });
    };
    render() {
        const { listUsers } = this.props;
        // console.table(listUsers);
        return (
            <>
                <div>
                    <span onClick={this.handleShowHideListUser} htmlFor="hide">
                        Hide list user:{" "}
                    </span>
                </div>
                {this.state.isShowListUser && (
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
                                        <button onClick={(event) =>{
                                            event.preventDefault();
                                            this.props.handleDeleteUser(user.id);
                                        }}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                )}
            </>
        );
    }
}

export default UserInfo;
