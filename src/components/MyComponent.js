import React from "react";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
    state = {
        name: "John",
        address: "Hai Ba Trung",
    };

    onHover(event) {
        console.log("Hovered!", this.state.name);
    }

    changeName(event) {
        this.setState({
            name: "Doe",
            address: "123 Main St",
        });
    }

    handleOnChange(event) {
        //console.log(event);
        this.setState({
            name: event.target.value,
        });
    }

    handleOnSubmit(event) {
        event.preventDefault();
        console.log("test", event.target[0].value);
    }

    render() {
        return (
            <div>
                <br />
                <UserInfo name="Dao Kien Cuong" age={31} />
                <hr />
                <UserInfo name={this.state.name} age={31} />
                <br />
                <button
                    onClick={(event) => {
                        this.changeName(event);
                    }}
                >
                    Change Name
                </button>
                <button
                    onClick={(event) => {
                        this.onHover(event);
                    }}
                >
                    Console Name
                </button>

                <form
                    onSubmit={(event) => {
                        this.handleOnSubmit(event);
                    }}
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            onChange={(event) => {
                                this.handleOnChange(event);
                            }}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default MyComponent;
