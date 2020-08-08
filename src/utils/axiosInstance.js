import Axios from 'axios';


const axiosInstance = Axios.create({
    baseURL: 'http://www.mocky.io/v2'
})


export default axiosInstance