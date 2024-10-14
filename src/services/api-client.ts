import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bfc24e80217242f7baa31884f63d3925",
  },
});
