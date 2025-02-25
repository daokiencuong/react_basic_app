import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
    state = {
        name: "John",
        address: "Hai Ba Trung",
    };
    render() {
        return (
            <div>
                Hello World 1243
                <MyComponent></MyComponent>
                {
                    <div>
                        <p>{this.state.name}</p>
                        <p>{this.state.address}</p>
                    </div>
                }
            </div>
        );
    }
}

export default App;
