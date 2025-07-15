import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9f234e42e9b94ec29dbb5a708d71bbd6"
    }
})