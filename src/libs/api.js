import axios from "axios";
let base = '';
export const getRequest = (url,params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
}