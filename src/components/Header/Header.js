import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const account = useSelector((state) => state.user.account);

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary container">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    Quiz System
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/users" className="nav-link">
                            User
                        </NavLink>
                        <NavLink to="/admins" className="nav-link">
                            Admin
                        </NavLink>
                    </Nav>
                    <Nav>
                        {isAuthenticated === false ? (
                            <>
                                <button
                                    className="btn-login"
                                    onClick={() => handleLogin()}
                                >
                                    Log In
                                </button>
                                <button
                                    className="btn-signup"
                                    onClick={() => handleSignup()}
                                >
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <NavDropdown
                                title="Setting"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item>User Info</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Log out</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
