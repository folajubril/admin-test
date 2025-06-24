import axios from 'axios';


const axiosInstance = axios.create({
    headers: {
      'Content-type': 'application/json',
      // Authorization: `Bearer ${getAccessCookie() ? getAccessCookie() : ''}`,
    },
  });


  export default axiosInstance;
