import "./SignUp.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/apiService";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [seePassword, setSeePassword] = useState(true);

    const navigate = useNavigate();

    const handleSignUp = async () => {
        if(email && password) {
            let res = await postSignUp(email, password, userName);
            if(res && +res.EC === 0) {
                toast.success(res.EM);
                navigate("/login");
            } else {
                toast.error(res.EM);
            }
        }else{
            toast.error("Email and password are required");
        }
    };

    return (
        <div className="signUp-container">
            <div className="header ms-auto">
                <div>Do you have an account? </div>
                <Button
                    variant="outline-dark"
                    onClick={() => {
                        navigate("/login");
                    }}
                >
                    Login
                </Button>
            </div>
            <div className="content mx-auto">
                <div className="title">Sign Up</div>
                <div className="welcome">Welcome to Quiz System</div>
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
                        required
                    />
                    <label htmlFor="userName">UserName</label>
                    <input
                        type="text"
                        id="userName"
                        value={userName}
                        onChange={(event) => {
                            setUserName(event.target.value);
                        }}
                    />
                    <label htmlFor="passSignUp">Password</label>
                    <div className="password-toggle">
                        <input
                            type={seePassword ? "password" : "text"}
                            name=""
                            id="passSignUp"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}
                            className="input-password"
                            required
                        />
                        <div className="seePassBtn" onClick={() => {
                                setSeePassword(!seePassword);
                            }}>
                            {seePassword? <FaRegEye /> : <FaRegEyeSlash />} 
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            handleSignUp();
                        }}
                    >
                        <span>Sign Up</span>
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

export default SignUp;
