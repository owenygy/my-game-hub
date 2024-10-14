import axios from "axios";

export default axios.create({
    params: {
        base_url: "https://api.rawg.io/api",
        api_key: "bfc24e80217242f7baa31884f63d3925",
    },
});