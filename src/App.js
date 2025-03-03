import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="App-container">
            <Header />
            <div>
                Test link
                <div>
                    <button>
                        <Link to="/users">Go to user</Link> 
                    </button>
                    <button>
                        <Link to="/admins">Go to admin</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;
