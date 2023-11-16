import axios from "axios";

const axiosInstance2 = axios.create({
    baseURL: 'https://wangechi.pythonanywhere.com/api',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
});
 
export default axiosInstance2;