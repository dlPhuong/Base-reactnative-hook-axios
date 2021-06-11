import axios from "axios";

export default axios.create({
    baseURL: "http://172.30.128.1:8080/",
    headers: {
        "Content-type": "application/json"
    }
});
