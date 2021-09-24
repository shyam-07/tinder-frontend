import axios from'axios'

const instance = axios.create({
    baseURL: "https://tindershyam-backend.herokuapp.com/",
});

export default instance;
