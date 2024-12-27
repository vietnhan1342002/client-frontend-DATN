import axios from "axios";

const instance = axios.create({
    baseURL: 'https://13.211.141.240.nip.io'
});

export default instance;