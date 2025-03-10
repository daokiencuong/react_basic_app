import "./Login.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { PiSpinnerBallDuotone } from "react-icons/pi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleLogin = async () => {
        //validate
        if (!validateEmail(email)) {
            toast.error("Email is invalid");
            return;
        }
        setLoading(true);
        //submit api
        let data = await postLogin(email, password);
        if (data && +data.EC === 0) {
            dispatch(doLogin(data));
            toast.success(data.EM);
            setLoading(false);
            navigate("../");
        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM);
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="header ms-auto">
                <div>Don't have an account? </div>
                <Button
                    variant="outline-dark"
                    onClick={() => {
                        navigate("/signup");
                    }}
                >
                    Sign Up
                </Button>
            </div>
            <div className="content mx-auto">
                <div className="title">Login</div>
                <div className="welcome">Hi, who's this?</div>
                <div className="form-group">
                    <label htmlFor="emailLogin">Email</label>
                    <input
                        type="email"
                        name=""
                        id="emailLogin"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <label htmlFor="passLogin">Password</label>
                    <input
                        type="password"
                        name=""
                        id="passLogin"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                    />
                </div>
                <span>Forgot password?</span>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleLogin();
                        }}
                        disabled={isLoading}
                    >
                        {isLoading? <PiSpinnerBallDuotone className="loaderIcon"/>: ''}
                        
                        <span>Login</span>
                    </button>
                </div>
                <div
                    className="back-home mt-3"
                    onClick={() => {
                        navigate("../");
                    }}
                >
                    {" "}
                    &#60;&#60; Go to Homepage
                </div>
            </div>
        </div>
    );
};

export default Login;
