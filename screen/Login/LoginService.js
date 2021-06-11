import { TouchableHighlightBase } from "react-native";
import httpauth from "../../http-commons-auth";
import http from "../../http-common";


const getAll = () => {
    return http.get("api/getAllLop");
};



const Login = data => {
    return http.post("api/authenticate", data);
};

const getDataAcount = (idtoken) => {
    return httpauth(idtoken).get("api/account");
};



const DisplayService = {
    getAll,
    Login,
    getDataAcount
};

export default DisplayService;
