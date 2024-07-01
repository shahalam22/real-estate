import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://real-estate-backend-8uov.onrender.com",
    withCredentials: true,
});

export default apiRequest;