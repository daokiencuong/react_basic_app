import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, username, role, image) => {
    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("username", username);
    form.append("role", role);
    form.append("userImage", image);

    return axios.post("api/v1/participant", form);
};

const getAllUsers = () => {
    return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, username, role, image) => {
    const form = new FormData();
    form.append("id", id);
    form.append("username", username);
    form.append("role", role);
    form.append("userImage", image);

    return axios.put("api/v1/participant", form);
};

const deleteUser = (id) => {
    return axios.delete(`api/v1/participant`, {data: {id: id}});
};

const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}

const postLogin = (email, password) => {
    const data = {
        email: email,
        password: password
    }
    return axios.post("/api/v1/login", data);
}

const postSignUp = (email, password, userName) => {
    const data = {
        email: email,
        password: password,
        username: userName
    }
    return axios.post("api/v1/register", data);

}

const getQuizByUser = () => {
    return axios.get("api/v1/quiz-by-participant");
}

export { postCreateNewUser, getAllUsers, putUpdateUser, deleteUser, getUserWithPaginate, postLogin, postSignUp, getQuizByUser };
