import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <MyComponent></MyComponent>
            </div>
        );
    }
}

export default App;
