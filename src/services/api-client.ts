import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a2ac75b76fe641b7833dbcdd07fa6d3d'
    }
})