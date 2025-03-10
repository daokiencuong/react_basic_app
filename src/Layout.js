import App from "./App";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import HomePage from "./components/Home/HomePage";
import ManageUser from "./components/Admin/Content/ManageUser";
import DashBoard from "./components/Admin/Content/DashBoard";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

import { Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const NotFound = () => {
    return (
        <div class="custom-bg text-dark">
            <div class="d-flex align-items-center justify-content-center min-vh-100 px-2">
                <div class="text-center">
                    <h1 class="display-1 fw-bold">404</h1>
                    <p class="fs-2 fw-medium mt-4">Oops! Page not found</p>
                    <p class="mt-4 mb-5">
                        The page you're looking for doesn't exist or has been
                        moved.
                    </p>
                    <a
                        href="/"
                        class="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn"
                    >
                        Go Home
                    </a>
                </div>
            </div>
        </div>
    );
};

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="users" element={<ListQuiz />}></Route>
                </Route>
                <Route path="/quiz/:id" element={<DetailQuiz />}></Route>
                <Route path="admins" element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path="manage-users" element={<ManageUser />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Slide}
            />
        </>
    );
};

export default Layout;
