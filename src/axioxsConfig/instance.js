 import axios from 'axios';
 const axiosInstance=  axios.create({
        baseURL:'https://api.themoviedb.org/3',
        // headers:{},
         params:{
           api_key : "4477a975e3f21a0e9846875761c80e5b"
         }
    })

export default axiosInstance



