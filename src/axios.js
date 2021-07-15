import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/myecom-app/us-central1/api' //the api (cl fn url)
});

export default instance;