import axios from 'axios'
const axiosInstance = () => {
    const token = localStorage.getItem("refresh_token")
    const instance = axios.create({
        baseURL: 'https://wangechi.pythonanywhere.com/api', // Replace with your API URL
        timeout: 30000, // Set a timeout for requests (in milliseconds)
        headers: {
          'Content-Type': 'application/json',
          'Authorazation': `Bearer  ${token}`
          // You can add other common headers here
        },
      });
      //return your instance
      return {instance}
}
 
export default axiosInstance;