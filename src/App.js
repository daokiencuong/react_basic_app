import "./App.scss";
import {useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    return (
        <div className="App-container">
            <div>Count = {count}</div>
        
        </div>
    );
}

export default App;
